import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      name: "Sarah Johnson",
      position: "CTO at TechFlow Solutions",
      company: "TechFlow Solutions",
      rating: 5,
      review: "Yurii is an exceptional developer who consistently delivers high-quality solutions. His expertise in Laravel and React helped us scale our platform to serve over 500,000 users. His attention to detail and problem-solving skills are outstanding.",
      project: "Microservices Architecture"
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      company: "Digital Innovations Inc.",
      rating: 5,
      review: "Working with Yurii on our Web3 project was fantastic. He not only delivered on time but also suggested improvements that saved us significant gas costs. His knowledge of smart contracts and DeFi protocols is impressive.",
      project: "DeFi Protocol Development"
    },
    {
      name: "Emma Rodriguez",
      position: "Startup Founder",
      company: "StartupLab",
      rating: 5,
      review: "Yurii helped us build our MVP from scratch and his work was instrumental in securing our $1M seed funding. He's not just a great developer but also understands business needs and user experience.",
      project: "MVP Development"
    },
    {
      name: "David Kim",
      position: "Technical Lead",
      company: "Innovation Corp",
      rating: 5,
      review: "The automation solutions Yurii built for us transformed our workflow. His web scraping and data processing systems handle millions of records efficiently. Highly recommend for any complex automation needs.",
      project: "Web Scraping & Automation"
    },
    {
      name: "Lisa Wang",
      position: "Project Manager",
      company: "CloudTech Solutions",
      rating: 5,
      review: "Yurii's API integration work is top-notch. He seamlessly connected our platform with multiple third-party services and implemented robust error handling. The system has been running flawlessly for months.",
      project: "API Integration Hub"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const currentTestimonial = reviews[currentReview]

  return (
    <section id="reviews" className="py-20 bg-muted/30 grid-3d">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Client Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Client
              <span className="text-primary"> Reviews</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What clients say about working with me - real feedback from 
              successful projects and long-term partnerships.
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <Card className="hover-lift border-border/50 hover:border-primary/30 transition-all duration-300 bg-background">
              <CardContent className="p-12 text-center">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    <Quote className="h-8 w-8" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                  "{currentTestimonial.review}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <h4 className="text-xl font-heading font-semibold text-foreground">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-primary font-medium">
                    {currentTestimonial.position}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.company} • {currentTestimonial.project}
                  </p>
                </div>
            </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full hover:bg-accent -translate-x-4"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full hover:bg-accent translate-x-4"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Review Indicators */}
          <div className="flex justify-center space-x-2 mb-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 bg-background ${
                  index === currentReview
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Review Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
            <Card className="text-center hover-lift border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  50+
                </div>
                <p className="text-muted-foreground">
                  Happy Clients
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-heading font-bold text-secondary mb-2">
                  98%
                </div>
                <p className="text-muted-foreground">
                  Success Rate
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <span className="text-4xl font-heading font-bold text-accent">5.0</span>
                  <Star className="h-6 w-6 fill-accent text-accent" />
                </div>
                <p className="text-muted-foreground">
                  Average Rating
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection