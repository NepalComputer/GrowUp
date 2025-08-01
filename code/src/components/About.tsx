import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-professional">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Grow Up Investment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the principle that trust is earned through transparency, expertise, and genuine care for our clients' financial well-being.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Grow Up Investment was born from a simple belief: investment management should be built on trust, 
              transparency, and genuine expertise—not flashy marketing or unrealistic promises.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a new firm, we don't have decades of past performance to showcase. Instead, we offer something 
              more valuable: a fresh perspective, unwavering integrity, and a team of seasoned professionals 
              committed to your financial success.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in educating our clients, maintaining open communication, and building relationships 
              that last. Your trust is something we earn every day through our actions, not our promises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="bg-trust/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-trust" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Our Mission</h4>
                <p className="text-muted-foreground">To provide honest, expert investment guidance that puts your interests first</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="bg-trust/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-trust" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Our Values</h4>
                <p className="text-muted-foreground">Transparency, integrity, and genuine care for every client relationship</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="bg-trust/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-trust" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Our Vision</h4>
                <p className="text-muted-foreground">To redefine investment management through education and authentic relationships</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="bg-trust/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-trust" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Our Promise</h4>
                <p className="text-muted-foreground">No unrealistic promises—just strategic planning and honest guidance</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment Philosophy */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <h3 className="text-3xl font-bold text-primary mb-6 text-center">Investment Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary mb-3">Evidence-Based</h4>
              <p className="text-muted-foreground">
                Our strategies are built on proven financial principles and thorough market research, 
                not speculation or trends.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary mb-3">Long-Term Focus</h4>
              <p className="text-muted-foreground">
                We believe in the power of compound growth and strategic patience over 
                short-term market timing.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary mb-3">Risk Management</h4>
              <p className="text-muted-foreground">
                Protecting your capital is our first priority. Growth is important, 
                but not at the expense of security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;