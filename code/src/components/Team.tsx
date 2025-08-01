import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Michael Rodriguez",
      title: "Founder & Chief Investment Officer",
      image: teamMember1,
      bio: "With over 15 years of experience in institutional investment management, Michael previously served as Senior Portfolio Manager at Goldman Sachs Asset Management. He holds a CFA designation and MBA from Wharton.",
      credentials: "CFA, MBA Wharton",
      email: "michael@growup.com"
    },
    {
      name: "Sarah Chen",
      title: "Director of Financial Planning",
      image: teamMember2,
      bio: "Sarah brings 12 years of comprehensive financial planning experience from Morgan Stanley. She specializes in retirement planning and tax-efficient strategies, holding CFP and CPA certifications.",
      credentials: "CFP, CPA",
      email: "sarah@growup.com"
    },
    {
      name: "David Thompson",
      title: "Senior Investment Analyst",
      image: teamMember3,
      bio: "Former equity research analyst at Fidelity Investments with 10 years of experience in market analysis and portfolio construction. David holds a CFA charter and MS in Finance from NYU Stern.",
      credentials: "CFA, MS Finance NYU",
      email: "david@growup.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-professional">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our experienced professionals bring decades of combined expertise from leading financial institutions. 
            Experience matters—especially when building something new.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={`${member.name}, ${member.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-trust font-medium mb-2">{member.title}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.credentials}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground hover:text-trust transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={20} />
                  </a>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-trust transition-colors"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Credentials Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Our Collective Experience</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-trust mb-2">37+</div>
              <p className="text-muted-foreground">Years Combined Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-trust mb-2">3</div>
              <p className="text-muted-foreground">CFA Charterholders</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-trust mb-2">$2B+</div>
              <p className="text-muted-foreground">Previously Managed Assets</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-trust mb-2">100%</div>
              <p className="text-muted-foreground">Commitment to Excellence</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground leading-relaxed">
              Our team combines institutional-level expertise with a boutique firm's personal attention. 
              We've left larger firms to build something better—a place where your interests truly come first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;