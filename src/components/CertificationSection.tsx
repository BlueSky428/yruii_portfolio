import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import { useStaggerAnimation } from '@/hooks/useScrollAnimation'

const CertificationSection = () => {
  const staggerRef = useStaggerAnimation()
  
  const certifications = [
    {
      title: "Software Engineer",
      issuer: "HackerRank",
      date: "2025",
      credentialId: "1182F8879C3A",
      description: "Professional-level certification in designing distributed systems on AWS",
      verifyLink: "#"
    },
    {
      title: "Laravel Certified Developer",
      issuer: "Laravel LLC",
      date: "2022",
      credentialId: "063CA17D2ACO",
      description: "Official certification in Laravel framework development and best practices",
      verifyLink: "#"
    }
  ]

  return (
    <section id="certification" className="py-20 grid-3d">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Professional Certifications
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Certified
              <span className="text-primary"> Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-recognized certifications validating expertise in 
              cutting-edge technologies and development practices.
            </p>
          </div>

          {/* Certifications Grid */}
          <div ref={staggerRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="hover-lift border-border/50 hover:border-primary/30 transition-all duration-300 fade-in-up group bg-background"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Credential Info */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span>Credential ID:</span>
                      <span className="font-mono">{cert.credentialId}</span>
                    </div>
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-primary hover:text-primary-glow transition-colors group-hover:underline"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Verify Certificate
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certification Summary */}
          <div className="mt-16 text-center fade-in-up">
            <Card className="inline-block max-w-2xl hover-lift border-border/50 hover:border-primary/30 transition-all duration-300 bg-background">
              <CardContent className="p-8">
                <div className="flex justify-center space-x-8 text-center">
                  <div>
                    <div className="text-3xl font-heading font-bold text-primary mb-2">
                      6+
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Professional Certifications
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-secondary mb-2">
                      4
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Cloud Platforms
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-accent mb-2">
                      2023
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Latest Certification
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationSection