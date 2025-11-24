import { useEffect, useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, MessageCircle, Send, Mail } from 'lucide-react'
import yevhenAvatar from '@/assets/Yurii.png'
import { useScrollAnimation, useFloatAnimation } from '@/hooks/useScrollAnimation'
import SplitText from './animation/SplitText'

const HeroSection = () => {
  const heroRef = useScrollAnimation()
  const floatRef = useFloatAnimation()
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20
    }))
    setParticles(newParticles)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-3d-hero">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-30"></div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`
          }}
        />
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <div ref={floatRef} className="max-w-4xl mx-auto fade-in-up">
          {/* Avatar */}
          <div className="mb-8 float-animation">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-500 hover-lift">
              <AvatarImage src={yevhenAvatar} alt="Yurii" className="object-cover" />
              <AvatarFallback className="text-2xl font-heading font-bold bg-gradient-card">Y</AvatarFallback>
            </Avatar>
          </div>

          {/* Main Heading */}
          <SplitText
            text="This is Yurii"
            className="text-5xl md:text-7xl font-heading font-bold mb-6 text-blue-500"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            <span className="text-primary font-bold">Full Stack Developer</span> ✦
            <span className="text-secondary font-bold"> Blockchain & AI Expert</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-medium px-8 py-3 rounded-full text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Ron114">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent glow-on-hover hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://wa.me/+380955440691" target='blank'>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent glow-on-hover hover:text-white">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://t.me/+380951655709" target='blank'>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent glow-on-hover hover:text-white">
                <Send className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://mailto:bluesky.engineer428@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent glow-on-hover hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="animate-bounce rounded-full hover:bg-accent"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection