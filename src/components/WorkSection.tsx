import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Building, Calendar, MapPin, Award } from 'lucide-react'
import { useStaggerAnimation } from '@/hooks/useScrollAnimation'
import ScrollStack, { ScrollStackItem } from './animation/ScrollStack'

const WorkSection = () => {
  const staggerRef = useStaggerAnimation()

  const workExperience = [
    {
      company: "CloudNest Solutions",
      position: "Senior Full-Stack | Web3 Developer",
      period: "Feb 2022 - Apr 2025",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Led development of microservices architecture serving 500K+ users",
        "Implemented real-time data processing reducing latency by 60%",
        "Mentored junior developers and established code review processes",
        "Built automated deployment pipeline improving release efficiency by 40%"
      ],
      technologies: ["Laravel", "React", "AWS", "Docker", "PostgreSQL"]
    },
    {
      company: "SoftBridge Studio",
      position: "Front-End Developer",
      period: "Jun 2020 - Dec 2021",
      location: "Remote | Germany",
      type: "Full-Time",
      achievements: [
        "Developed smart contracts handling $2M+ in transactions",
        "Created DeFi protocol with innovative yield farming mechanisms",
        "Optimized gas usage reducing transaction costs by 35%",
        "Built Web3 integrations for multiple blockchain networks"
      ],
      technologies: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS"]
    },
    {
      company: "NovaWeb Agency",
      position: "Software Engineer",
      period: "Jul 2018 - May 2020",
      location: "Odesa, Ukraine",
      type: "Full-time",
      achievements: [
        "Built MVP from scratch resulting in $1M seed funding",
        "Developed API gateway handling 10M+ requests monthly",
        "Implemented machine learning features for user recommendations",
        "Scaled application from 100 to 50,000 active users"
      ],
      technologies: ["Vue.js", "Node.js", "MongoDB", "Redis", "Python"]
    }
  ]

  return (
    <section id="work" className="py-20 bg-muted/30 grid-3d">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Professional Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Work
              <span className="text-primary"> History</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A track record of delivering innovative solutions and driving
              technical excellence across diverse projects and teams.
            </p>
          </div>
          {/* Work Experience Cards */}
          <div ref={staggerRef} className="space-y-8">
            {workExperience.map((job, index) => (
              <Card
                key={index}
                className="hover-lift border-border/50 hover:border-primary/30 transition-all duration-300 fade-in-up bg-background"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-semibold text-foreground">
                            {job.company}
                          </h3>
                          <p className="text-primary font-medium">
                            {job.position}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {job.type}
                        </Badge>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-foreground mb-3">
                          Key Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
                        <Award className="h-5 w-5 text-primary mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start space-x-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="leading-relaxed">{achievement}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Career Summary */}
          <div className="mt-16 text-center fade-in-up">
            <Card className="inline-block max-w-2xl hover-lift border-border/50 hover:border-primary/30 transition-all duration-300 bg-background">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  5+ Years of Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From startup MVPs to enterprise-scale applications, I've consistently
                  delivered high-quality solutions that drive business growth and
                  enhance user experiences across diverse industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection