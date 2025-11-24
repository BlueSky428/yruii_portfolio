import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Github, MessageCircle, Send, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/Ron114", label: "GitHub" },
    { icon: MessageCircle, href: "https://wa.me/+380955440691", label: "WhatsApp" },
    { icon: Send, href: "https://t.me/+380951655709", label: "Telegram" },
    { icon: Mail, href: "https://mailto:bluesky.engineer428@gmail.com", label: "Email" }
  ]

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-primary">
                Yurii
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Senior Laravel & API Integrations, React, Vue, Scraping & Automation, 
                Web3 Developer. Building innovative web solutions with modern technologies.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full hover:bg-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:text-white"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold text-foreground">
                Quick Links
              </h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold text-foreground">
                Get In Touch
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Available for freelance projects</p>
                <p>Remote work worldwide</p>
                <a
                  href="https://mailto:bluesky.engineer428@gmail.com"
                  className="block hover:text-primary transition-colors"
                >
                  bluesky.engineer428@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Footer Bottom */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© {currentYear} Yurii. Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>using React & TypeScript</span>
          </div>

          {/* Back to Top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary hover:text-white rounded-full"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer