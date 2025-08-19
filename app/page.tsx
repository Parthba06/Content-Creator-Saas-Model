import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, BarChart3, Brain, FileText, Globe, Star, TrendingUp, Users, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">pussy</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Start Free Trial</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            <Zap className="h-4 w-4 mr-2" />
            AI-Powered Analytics
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Supercharge Your Social Strategy with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Real-time insights, smarter posts, and automated reporting — all in one AI-powered dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Watch Demo
            </Button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 border border-border">
              <img
                src="/placeholder-vclli.png"
                alt="SocialIntel Dashboard Preview"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Smarter Insights. Better Results.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to dominate social media with AI-powered intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border bg-card hover:bg-accent/50 transition-colors">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4" />
                <CardTitle>AI Insights</CardTitle>
                <CardDescription>
                  Sentiment analysis, topic detection, and performance predictions powered by machine learning
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:bg-accent/50 transition-colors">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Social Media Integration</CardTitle>
                <CardDescription>
                  Connect Instagram, X (Twitter), LinkedIn and more platforms in one unified dashboard
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:bg-accent/50 transition-colors">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Smart Recommendations</CardTitle>
                <CardDescription>
                  AI-generated hashtags, captions, and optimal posting times for maximum engagement
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:bg-accent/50 transition-colors">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Visualize reach, engagement, follower growth with beautiful, actionable charts
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:bg-accent/50 transition-colors">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Automated Reports</CardTitle>
                <CardDescription>
                  Weekly PDFs, email summaries, and custom reports delivered automatically
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:bg-accent/50 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Role-Based Access</CardTitle>
                <CardDescription>
                  Admin, team, and client views with granular permissions and white-label options
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Plug, Play, Predict.</h2>
            <p className="text-xl text-muted-foreground">Get started in minutes, not hours</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Your Accounts</h3>
              <p className="text-muted-foreground">Link your social media profiles in seconds</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Instant Insights</h3>
              <p className="text-muted-foreground">AI analyzes your data and provides actionable insights</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Act on Smart Suggestions</h3>
              <p className="text-muted-foreground">Implement AI recommendations to boost performance</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Automate Reporting</h3>
              <p className="text-muted-foreground">Set up automated reports and watch your growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">See SocialIntel in Action</h2>
            <p className="text-xl text-muted-foreground mb-8">No more guesswork. Built for scale.</p>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-border">
              <img
                src="/placeholder-wlze9.png"
                alt="Live Dashboard Demo"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pick a Plan That Scales With You</h2>
            <p className="text-xl text-muted-foreground">Start free, upgrade when you're ready</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="text-3xl font-bold">
                  $0<span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> 1 social account
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Basic analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Weekly reports
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Email support
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>
            <Card className="border-primary bg-card relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="text-3xl font-bold">
                  $49<span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> 10 social accounts
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Advanced AI insights
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Daily reports
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Priority support
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Team collaboration
                  </li>
                </ul>
                <Button className="w-full">Start Pro Trial</Button>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Agency</CardTitle>
                <CardDescription>For agencies and enterprises</CardDescription>
                <div className="text-3xl font-bold">
                  $149<span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Unlimited accounts
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Custom AI models
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> White-label reports
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> API access
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by 300+ Digital Agencies</h2>
            <p className="text-xl text-muted-foreground">See what our customers are saying</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "SocialIntel transformed our social media strategy. The AI insights are incredibly accurate and have
                  helped us increase engagement by 300%."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Marketing Director, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The automated reporting feature saves us hours every week. Our clients love the detailed insights and
                  professional reports."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Mike Chen</p>
                    <p className="text-sm text-muted-foreground">Agency Owner, Digital Plus</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Finally, a tool that actually understands social media. The AI recommendations have doubled our reach
                  and engagement rates."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Influencer & Content Creator</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about SocialIntel</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What platforms are supported?</AccordionTrigger>
              <AccordionContent>
                We currently support Instagram, X (Twitter), LinkedIn, Facebook, and TikTok. We're constantly adding new
                platforms based on user demand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is my data secure?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We use enterprise-grade encryption and follow SOC 2 compliance standards. Your data is never
                shared with third parties and is stored securely in encrypted databases.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I export reports?</AccordionTrigger>
              <AccordionContent>
                Yes! You can export reports in PDF, CSV, and PowerPoint formats. Pro and Agency plans also include
                white-label reporting options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do I need technical skills?</AccordionTrigger>
              <AccordionContent>
                Not at all! SocialIntel is designed for marketers, not developers. Our intuitive interface makes it easy
                for anyone to get started and see results immediately.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What kind of AI insights do you provide?</AccordionTrigger>
              <AccordionContent>
                Our AI analyzes sentiment, identifies trending topics, predicts optimal posting times, suggests
                hashtags, and provides performance forecasts based on your historical data and industry trends.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Start Making Smarter Social Decisions Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who are already using AI to supercharge their social media strategy
          </p>
          <Button size="lg" className="text-lg px-8 mb-4">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">SocialIntel</span>
              </div>
              <p className="text-muted-foreground">
                AI-powered social media analytics for smarter marketing decisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SocialIntel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
