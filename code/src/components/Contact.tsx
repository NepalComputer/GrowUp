import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for your interest. We'll be in touch within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-professional">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your investment journey with us? Schedule a complimentary consultation 
            to discuss your financial goals and how we can help you achieve them.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-trust/10 p-2 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 text-trust" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Office Address</h4>
                    <p className="text-muted-foreground">
                      123 Financial District<br />
                      New York, NY 10004<br />
                      Suite 2500
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-trust/10 p-2 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 text-trust" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-trust/10 p-2 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 text-trust" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">info@growup.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-trust/10 p-2 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 text-trust" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Schedule a Consultation</CardTitle>
                <p className="text-muted-foreground">
                  Complete the form below and we'll contact you within 24 hours to schedule your 
                  complimentary consultation.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your investment goals, current financial situation, or any questions you have..."
                      className="border-border"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and consent to be contacted 
                    regarding investment services.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-16 bg-card rounded-lg p-6 border border-border">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            <strong>Important Disclosure:</strong> Grow Up Investment is a registered investment advisor. 
            Past performance does not guarantee future results. All investments involve risk and may lose value. 
            Please read our{" "}
            <a href="#" className="text-trust hover:underline">Privacy Policy</a> and{" "}
            <a href="#" className="text-trust hover:underline">Form ADV</a> before engaging our services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;