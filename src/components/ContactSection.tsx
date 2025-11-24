import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MapPin, Send, Github, MessageCircle } from 'lucide-react'

const ContactSection = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bluesky.engineer428@gmail.com",
      href: "https://mailto:bluesky.engineer428@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Ron114",
      href: "https://github.com/Ron114"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+380 95 544 06 91",
      href: "https://wa.me/+380955440691"
    },
    {
      icon: Send,
      label: "Telegram",
      value: "+380 95 165 57 09",
      href: "https://t.me/+380951655709"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Worldwide",
      href: null
    }
  ]

  return (
    <section id="contact" className="py-20 grid-3d">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Let's
              <span className="text-primary"> Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project 
              and explore how we can work together.
            </p>
          </div>

          {/* Contact Info */}
          <div className="max-w-2xl mx-auto fade-in-up">
            <Card className="hover-lift border-border/50 hover:border-primary/30 transition-all duration-300 bg-background">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection