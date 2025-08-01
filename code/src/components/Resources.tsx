import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, HelpCircle, TrendingUp, Calculator, FileText } from "lucide-react";

const Resources = () => {
  const educationalResources = [
    {
      icon: BookOpen,
      title: "Investment Fundamentals",
      description: "Learn the basics of investing, risk management, and portfolio construction.",
      type: "Guide"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Regular market commentary and analysis from our investment team.",
      type: "Weekly Report"
    },
    {
      icon: Calculator,
      title: "Retirement Calculator",
      description: "Plan for your retirement with our comprehensive planning tool.",
      type: "Tool"
    },
    {
      icon: FileText,
      title: "Investment Philosophy",
      description: "Detailed explanation of our investment approach and methodology.",
      type: "Whitepaper"
    }
  ];

  const faqs = [
    {
      question: "What makes TrustPoint Capital different?",
      answer: "As a new firm, we offer fresh perspectives without the burden of legacy practices. Our focus is on transparency, education, and building genuine client relationships rather than chasing assets under management."
    },
    {
      question: "How do you charge for your services?",
      answer: "We use a transparent fee structure based on assets under management, with no hidden fees or commissions. Our interests are aligned with yours—we only succeed when you do."
    },
    {
      question: "What is your minimum investment requirement?",
      answer: "We work with clients who have at least $250,000 to invest. This allows us to provide the personalized attention and sophisticated strategies our clients deserve."
    },
    {
      question: "How often will we communicate?",
      answer: "We believe in regular communication. You'll receive quarterly performance reports, monthly market insights, and we're always available for questions or concerns."
    }
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Educational Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that informed investors make better decisions. Access our library of educational content 
            and tools to help you understand your investments better.
          </p>
        </div>

        {/* Educational Resources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {educationalResources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="bg-trust/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-trust/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-trust" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-primary text-lg">{resource.title}</CardTitle>
                    <span className="text-xs bg-trust/10 text-trust px-2 py-1 rounded-full">{resource.type}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-trust rounded-2xl p-8 md:p-12 text-center text-white mb-20">
          <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly market insights, educational content, and investment updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-primary"
            />
            <Button 
              variant="secondary"
              className="bg-white text-trust hover:bg-white/90"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            No spam, unsubscribe anytime. Your privacy is important to us.
          </p>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-trust/10 p-2 rounded-full flex-shrink-0 mt-1">
                      <HelpCircle className="h-5 w-5 text-trust" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">{faq.question}</h4>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;