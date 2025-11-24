import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Smartphone, Globe } from 'lucide-react'
import { useStaggerAnimation } from '@/hooks/useScrollAnimation'

const AboutSection = () => {
  const staggerRef = useStaggerAnimation()
  
  const highlights = [
    {
      icon: Code,
      title: "Blockchain Development",
      description: "Expert in dApps, smart contracts, and DeFi protocols"
    },
    {
      icon: Database,
      title: "AI & Machine Learning",
      description: "Building AI-driven analytics and trading bots"
    },
    {
      icon: Smartphone,
      title: "Full-Stack Solutions",
      description: "End-to-end development with modern technologies"
    },
    {
      icon: Globe,
      title: "DeFi & Web3",
      description: "Secure, scalable decentralized applications"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30 grid-3d">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Passionate Developer & 
              <span className="text-primary"> Problem Solver</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 5 years of experience, I specialize in building secure, scalable solutions for 
              DeFi platforms, smart contracts, and AI-driven analytics. Passionate about solving complex 
              challenges and delivering high-quality results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <div className="fade-in-up">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Senior Full Stack Developer with a focus on Blockchain and AI, specializing in 
                  building decentralized applications (dApps) and automation systems, including trend-following 
                  trading bots. With over 5 years of experience, I have a strong track record of developing 
                  secure, scalable solutions for DeFi platforms, smart contracts, and AI-driven analytics.
                </p>
                <p>
                  My expertise spans Web3.js, Solidity, Python, and advanced blockchain technologies. 
                  I'm passionate about solving complex challenges and delivering high-quality results that 
                  meet client needs. From building robust smart contracts to creating AI-powered trading 
                  algorithms, I bring innovative solutions to every project.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new blockchain protocols, contributing 
                  to DeFi projects, or developing AI models for predictive analytics. I believe in 
                  writing secure, efficient code that pushes the boundaries of what's possible in 
                  decentralized technology.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div ref={staggerRef} className="grid sm:grid-cols-2 gap-6 fade-in-up">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover-lift border-border/50 hover:border-primary/30 bg-background transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <highlight.icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Personal Touch */}
          <div className="mt-16 text-center fade-in-up">
            <Card className="inline-block max-w-2xl hover-lift border-border/50 bg-background hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground italic">
                  "I believe great software is built by understanding both the technology and 
                  the people who use it. Every project is an opportunity to create something 
                  that truly makes a difference."
                </p>
                <p className="text-primary font-heading font-semibold mt-4">
                  — Yurii
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection