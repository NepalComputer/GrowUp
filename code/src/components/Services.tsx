import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, TrendingUp, Shield, Users, BookOpen, Calculator } from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive investment solutions designed to meet your unique financial goals and risk tolerance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-trust/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-trust" />
              </div>
              <CardTitle className="text-primary">Portfolio Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Customized investment portfolios tailored to your risk tolerance, time horizon, and financial objectives.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Asset allocation strategy</li>
                <li>• Regular rebalancing</li>
                <li>• Performance monitoring</li>
                <li>• Tax-efficient investing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-trust/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-trust" />
              </div>
              <CardTitle className="text-primary">Financial Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive financial planning to help you achieve your short and long-term financial goals.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Retirement planning</li>
                <li>• Goal-based investing</li>
                <li>• Cash flow analysis</li>
                <li>• Legacy planning</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-trust/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-trust" />
              </div>
              <CardTitle className="text-primary">Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Thorough evaluation of your risk profile to ensure your investments align with your comfort level.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Risk tolerance analysis</li>
                <li>• Diversification strategies</li>
                <li>• Stress testing</li>
                <li>• Risk mitigation planning</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-trust/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-trust" />
              </div>
              <CardTitle className="text-primary">Investment Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Expert advice and guidance for making informed investment decisions in any market condition.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Market analysis</li>
                <li>• Investment recommendations</li>
                <li>• Regular reviews</li>
                <li>• Strategic adjustments</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-trust/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-trust" />
              </div>
              <CardTitle className="text-primary">Financial Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ongoing education to help you understand your investments and make informed financial decisions.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Investment workshops</li>
                <li>• Market insights</li>
                <li>• Educational resources</li>
                <li>• Personal guidance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-trust/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-trust" />
              </div>
              <CardTitle className="text-primary">Tax Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Tax-efficient investment strategies to help maximize your after-tax returns.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Tax-loss harvesting</li>
                <li>• Asset location optimization</li>
                <li>• Retirement account strategies</li>
                <li>• Tax planning coordination</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Schedule a complimentary consultation to discuss your financial goals and how we can help you achieve them.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToContact}
            className="text-lg px-8 py-3 bg-white text-primary hover:bg-white/90"
          >
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;