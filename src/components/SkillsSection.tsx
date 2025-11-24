import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Smartphone, 
  Globe, 
  Server, 
  Bot,
  Brain
} from 'lucide-react'
import { useStaggerAnimation } from '@/hooks/useScrollAnimation'

const SkillsSection = () => {
  const staggerRef = useStaggerAnimation()
  
  const skillCategories = [
    {
      category: "Backend Development",
      icon: Server,
      color: "text-primary",
      skills: [
        { name: "Laravel", level: 95 },
        { name: "PHP", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "API Development", level: 95 },
        { name: "Database Design", level: 90 }
      ]
    },
    {
      category: "Frontend Development", 
      icon: Smartphone,
      color: "text-secondary",
      skills: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      category: "Web3 & Blockchain",
      icon: Globe,
      color: "text-accent",
      skills: [
        { name: "Solidity", level: 90 },
        { name: "Web3.js", level: 88 },
        { name: "Ethereum", level: 85 },
        { name: "DeFi Protocols", level: 87 },
        { name: "Smart Contracts", level: 90 },
        { name: "dApps Development", level: 88 }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      color: "text-primary",
      skills: [
        { name: "Python", level: 92 },
        { name: "Trading Bots", level: 90 },
        { name: "AI Analytics", level: 85 },
        { name: "Machine Learning", level: 82 },
        { name: "Data Science", level: 80 }
      ]
    },
    {
      category: "Automation & Tools",
      icon: Server,
      color: "text-primary-glow",
      skills: [
        { name: "Web Scraping", level: 95 },
        { name: "Process Automation", level: 90 },
        { name: "CI/CD", level: 85 },
        { name: "Docker", level: 80 },
        { name: "AWS/Cloud", level: 75 }
      ]
    }
  ]

  const technologies = [
    "Solidity", "Web3.js", "Ethereum", "React", "Vue.js", "Python", 
    "TypeScript", "Node.js", "Laravel", "Smart Contracts", "DeFi", 
    "dApps", "AI/ML", "Trading Bots", "Ethers.js", "Hardhat", 
    "Truffle", "IPFS", "The Graph", "Chainlink", "Polygon", 
    "Arbitrum", "Redis", "Docker", "AWS", "Git"
  ]

  return (
    <section id="skills" className="py-20 grid-3d">
      <div className="container mx-auto px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up bg-background">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Technologies I
              <span className="text-primary"> Master</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks 
              to build exceptional digital experiences.
            </p>
          </div>

          {/* Skill Categories */}
          <div ref={staggerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover-lift border-border/50 hover:border-primary/30 transition-all duration-300 fade-in-up bg-background">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-full bg-primary/10 ${category.color} mr-4`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-heading font-semibold mb-8 text-center text-foreground">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-primary text-white hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection