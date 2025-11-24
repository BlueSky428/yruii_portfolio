import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink} from 'lucide-react'
import { useStaggerAnimation } from '@/hooks/useScrollAnimation'
import projectsImage from '@/assets/projects.png'

const ProjectsSection = () => {
  const staggerRef = useStaggerAnimation()
  
  // Single image for all projects
  const projectImage = projectsImage
  
  const projects = [
    {
      title: "Radiant Capital - Cross-Chain Lending",
      description: "Cross-chain money market protocol enabling users to deposit and borrow assets across multiple blockchains. Features unified liquidity pools and seamless cross-chain transfers.",
      image: projectImage, 
      technologies: ["Solidity", "Web3.js", "Cross-Chain", "DeFi", "Smart Contracts"],
      liveLink: "https://app.radiant.capital/",
      githubLink: "#",
      featured: true
    },
    {
      title: "GMX - Perpetual Trading Platform",
      description: "Decentralized perpetual exchange with low fees and zero price impact. Features leverage trading, liquidity provision, and yield farming on Arbitrum and Avalanche.",
      image: projectImage,
      technologies: ["Solidity", "Web3.js", "Perpetuals", "DeFi", "Trading"],
      liveLink: "https://gmx.io/",
      githubLink: "#",
      featured: true
    },
    {
      title: "Velodrome - Optimized AMM",
      description: "Next-generation AMM on Optimism designed for capital efficiency. Features vote-escrowed tokenomics, low slippage swaps, and sustainable liquidity incentives.",
      image: projectImage,
      technologies: ["Solidity", "Optimism", "AMM", "DeFi", "Web3.js"],
      liveLink: "https://velodrome.finance/",
      githubLink: "#",
      featured: true
    },
    {
      title: "LooksRare - NFT Marketplace",
      description: "Community-first NFT marketplace with zero platform fees for creators. Features advanced trading tools, collection analytics, and royalty enforcement.",
      image: projectImage,
      technologies: ["React", "Web3.js", "Ethereum", "IPFS", "NFT"],
      liveLink: "https://looksrare.org/",
      githubLink: "#",
      featured: false
    },
    {
      title: "Trader Joe - Avalanche DEX",
      description: "One-stop decentralized trading platform on Avalanche. Features liquidity pools, yield farming, lending, and NFT marketplace all in one interface.",
      image: projectImage,
      technologies: ["Solidity", "Avalanche", "Web3.js", "React", "DeFi"],
      liveLink: "https://traderjoexyz.com/",
      githubLink: "#",
      featured: false
    },
    {
      title: "Beefy Finance - Yield Optimizer",
      description: "Multi-chain yield optimizer that automatically compounds rewards from various DeFi protocols. Features vault strategies across 15+ blockchains.",
      image: projectImage,
      technologies: ["Solidity", "Multi-Chain", "DeFi", "Yield Farming", "Web3.js"],
      liveLink: "https://beefy.com/",
      githubLink: "#",
      featured: false
    },
    {
      title: "Convex Finance - Curve Optimizer",
      description: "Yield optimization platform for Curve liquidity providers. Features boosted rewards, staking, and governance token distribution.",
      image: projectImage,
      technologies: ["Solidity", "Ethereum", "DeFi", "Yield Optimization", "Web3.js"],
      liveLink: "https://www.convexfinance.com/",
      githubLink: "#",
      featured: false
    },
    {
      title: "Frax Finance - Algorithmic Stablecoin",
      description: "Fractional-algorithmic stablecoin protocol with multiple stablecoin types. Features lending, borrowing, and AMO (Algorithmic Market Operations).",
      image: projectImage,
      technologies: ["Solidity", "Ethereum", "Stablecoins", "DeFi", "Web3.js"],
      liveLink: "https://frax.finance/",
      githubLink: "#",
      featured: false
    },
    {
      title: "Moralis - Web3 API Platform",
      description: "Complete Web3 development platform providing APIs for blockchain data, NFT metadata, and wallet integration. Powers thousands of dApps.",
      image: projectImage,
      technologies: ["API", "Web3.js", "Blockchain", "Node.js", "TypeScript"],
      liveLink: "https://moralis.io/",
      githubLink: "#",
      featured: false
    },
    {
      title: "Alchemy - Blockchain Infrastructure",
      description: "Enterprise-grade blockchain API and developer platform. Provides reliable node infrastructure, analytics, and monitoring tools for Web3 applications.",
      image: projectImage,
      technologies: ["API", "Blockchain", "Infrastructure", "Node.js", "Web3"],
      liveLink: "https://www.alchemy.com/",
      githubLink: "#",
      featured: false
    },
    {
      title: "QuickNode - Blockchain RPC",
      description: "Fast and reliable blockchain infrastructure provider offering RPC endpoints, analytics, and developer tools for multiple blockchain networks.",
      image: projectImage,
      technologies: ["RPC", "Blockchain", "Infrastructure", "API", "Web3"],
      liveLink: "https://www.quicknode.com/",
      githubLink: "#",
      featured: false
    },
    {
      title: "3Commas - Trading Bot Platform",
      description: "Advanced cryptocurrency trading bot platform with AI-powered strategies. Features automated trading, portfolio management, and backtesting tools.",
      image: projectImage,
      technologies: ["Python", "Trading Bots", "AI", "APIs", "Blockchain"],
      liveLink: "https://3commas.io/",
      githubLink: "#",
      featured: false
    },
    {
      title: "Cryptohopper - AI Trading Bot",
      description: "Automated cryptocurrency trading bot with machine learning capabilities. Features strategy builder, technical analysis, and portfolio management.",
      image: projectImage,
      technologies: ["Python", "AI/ML", "Trading Bots", "Blockchain", "APIs"],
      liveLink: "https://www.cryptohopper.com/",
      githubLink: "#",
      featured: false
    },
    {
      title: "Shrimpy - Portfolio Management",
      description: "Social trading platform for cryptocurrency portfolio management. Features automated rebalancing, copy trading, and performance analytics.",
      image: projectImage,
      technologies: ["React", "Node.js", "APIs", "Trading", "Blockchain"],
      liveLink: "https://shrimpy.io/",
      githubLink: "#",
      featured: false
    },
    {
      title: "Foundation - NFT Platform",
      description: "Creative NFT marketplace for digital art and collectibles. Features creator-friendly fees, auction system, and community-driven curation.",
      image: projectImage,
      technologies: ["React", "Web3.js", "Ethereum", "IPFS", "NFT"],
      liveLink: "https://foundation.app/",
      githubLink: "#",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 grid-3d">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              My
              <span className="text-primary"> Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of blockchain, DeFi, and AI projects I've contributed to. 
              From decentralized exchanges to smart contracts and trading bots.
            </p>
          </div>

          {/* Projects Grid */}
          <div ref={staggerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`hover-lift border-border/50 hover:border-primary/30 transition-all duration-300 fade-in-up bg-background ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className='w-full h-full object-cover'
                        loading="lazy"
                      />
                    </div>
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-white">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground text-white"
                        asChild
                      >
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection