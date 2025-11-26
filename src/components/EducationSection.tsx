import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "National Technical University of Ukraine 'Igor Sikorsky Kyiv Polytechnic Institute'",
      period: "2014 - 2018",
      description: "Completed a comprehensive 4-year program in Computer Science. Specialized in software engineering, web technologies, and computer systems. Located in Kyiv, Ukraine.",
      type: "BCompSc"
    },
    {
      degree: "Bachelor of Science",
      institution: "State University 'Lviv Polytechnics'",
      period: "Ukraine",
      description: "Bachelor of Science degree from one of Ukraine's leading technical universities, located in Lviv, Ukraine.",
      type: "BSc"
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'degree':
        return GraduationCap
      case 'course':
        return Award
      case 'certification':
        return Award
      default:
        return GraduationCap
    }
  }

  const getColor = (type: string) => {
    switch (type) {
      case 'degree':
        return 'text-primary'
      case 'course':
        return 'text-secondary'
      case 'certification':
        return 'text-accent'
      default:
        return 'text-primary'
    }
  }

  return (
    <section id="education" className="py-20 bg-background grid-3d">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Education & Learning
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Continuous
              <span className="text-primary"> Growth</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey of continuous learning through formal education, specialized courses, 
              and professional certifications.
            </p>
          </div>

          {/* Education Items */}
            <div className="space-y-12">
              {education.map((item, index) => {
                const Icon = getIcon(item.type)
                const colorClass = getColor(item.type)
                const isEven = index % 2 === 0

                return (
                  <div
                    key={index}
                    className={`relative fade-in-up flex items-center  ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >

                    {/* Content Card */}
                    <div className={`w-full md:w-full ml-20 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 bg-background">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`p-2 rounded-full bg-primary/10 ${colorClass} flex-shrink-0`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm font-medium text-muted-foreground">
                                  {item.period}
                                </span>
                              </div>
                              <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                                {item.degree}
                              </h3>
                              <p className="text-primary font-medium mb-3">
                                {item.institution}
                              </p>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection