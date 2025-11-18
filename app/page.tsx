'use client'

import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Zap, Palette, Image, Maximize2, Volume2, Scissors, Calendar, BarChart3, CheckCircle2, Play, Github, Linkedin, ArrowRight, Star, TrendingUp, Users, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  const features = [
    {
      icon: Palette,
      title: 'AI Branding Studio',
      description: 'Generate unique brand identities with AI-powered color palettes, naming, and positioning.',
    },
    {
      icon: Image,
      title: 'Visual Generator',
      description: 'Create stunning product images and graphics with advanced AI in seconds.',
    },
    {
      icon: Maximize2,
      title: 'Smart Poster Maker',
      description: 'Design professional posters and promotional materials with pre-built templates.',
    },
    {
      icon: Volume2,
      title: 'Video Ad Creator',
      description: 'Produce engaging video advertisements with AI-written scripts and effects.',
    },
    {
      icon: Volume2,
      title: 'Voiceover AI',
      description: 'Generate natural-sounding voiceovers in 50+ languages and accents instantly.',
    },
    {
      icon: Scissors,
      title: 'Auto Content Enhancer',
      description: 'Automatically edit and optimize your content for maximum engagement.',
    },
    {
      icon: Calendar,
      title: 'Campaign Scheduler',
      description: 'Plan and automate multi-channel campaigns with smart scheduling.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track performance metrics and optimize campaigns with actionable insights.',
    },
  ]

  const teamMembers = [
    { 
      name: 'Azhan Ali', 
    role: 'AI / ML Developer',
    expertise: 'Machine Learning, Model Integration, Automation',
    color: 'from-blue-500 to-cyan-500',
    initials: 'AA',
    bio: 'AI/ML specialist focusing on intelligent automation and generative pipelines.',
    },
    { 
       name: 'Mohit Sharma', 
    role: 'Backend & Database Developer',
    expertise: 'APIs, Databases, Authentication Systems',
    color: 'from-purple-500 to-pink-500',
    initials: 'MS',
    bio: 'Backend engineer specializing in high-performance APIs and scalable DB systems.',
    },
    { 
       name: 'Divyansh Singh', 
    role: 'Frontend & UI/UX Developer',
    expertise: 'Frontend Engineering, UI Systems, Prototyping',
    color: 'from-green-500 to-teal-500',
    initials: 'DS',
    bio: 'Frontend specialist crafting elegant UI layouts and seamless digital experiences.',
    },
    { 
      name: 'Aarif Khan', 
    role: 'Full Stack Developer',
    expertise: 'Frontend + Backend Development, System Integration',
    color: 'from-orange-500 to-red-500',
    initials: 'AK',
    bio: 'Full stack engineer experienced in building complete end-to-end product systems.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/3 -right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-200/40 to-pink-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm sm:text-base font-bold px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
                  🚀 AI-Powered Marketing Platform
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-tight tracking-tight">
                Create World-Class Campaigns
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Instantly with AI</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Stop spending weeks on design. Sampark's intelligent AI creates stunning marketing campaigns, branding, and content in minutes. Focus on growth, not grunt work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 flex-wrap">
              <Link href="/login">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-xl text-white font-bold px-8 py-6 rounded-lg text-base md:text-lg transition-all hover:scale-105">
                  <Rocket size={20} />
                  Start Free Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2 border-2 border-slate-300 text-slate-900 hover:bg-slate-50 font-bold px-8 py-6 rounded-lg text-base md:text-lg transition-all">
                <Play size={20} />
                Watch Demo
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 border-t border-slate-200">
              {[
                { number: '50K+', label: 'Active Users', icon: Users },
                { number: '10M+', label: 'Campaigns Created', icon: TrendingUp },
                { number: '4.9★', label: 'User Rating', icon: Star },
              ].map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div key={i} className="text-center">
                    <div className="flex justify-center mb-2">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                    <div className="text-sm sm:text-base text-slate-600 font-semibold">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-slate-900">Complete AI Toolkit</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize marketing campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const IconComponent = feature.icon
              return (
                <Card key={i} className="border-2 border-slate-200 bg-white hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:h-2 transition-all"></div>
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent size={28} className="text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900">{feature.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section id="workflow" className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-slate-900">Simple as 1-2-3-4</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Get from idea to campaign in minutes with our intuitive, step-by-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: 1, 
                title: 'Describe Your Vision', 
                description: 'Tell Sampark what you want to create in plain English. Describe your brand, target audience, and campaign goals.',
                details: ['Share your brand story', 'Define your goals', 'Set your tone & style'],
                icon: '✨'
              },
              { 
                step: 2, 
                title: 'AI Generates Options', 
                description: 'Our advanced AI generates multiple design variations, copy, and creative options instantly based on your requirements.',
                details: ['Multiple design variants', 'AI-written copy variations', 'Professional templates'],
                icon: '🤖'
              },
              { 
                step: 3, 
                title: 'Customize & Refine', 
                description: 'Fine-tune colors, fonts, messaging, and design elements with our intuitive editor. No design skills needed.',
                details: ['Drag-and-drop editor', 'Brand kit integration', 'Smart suggestions'],
                icon: '🎨'
              },
              { 
                step: 4, 
                title: 'Launch & Analyze', 
                description: 'Schedule your campaigns across platforms and track real-time performance metrics, engagement, and ROI instantly.',
                details: ['Multi-channel scheduling', 'Real-time analytics', 'Performance insights'],
                icon: '📊'
              },
            ].map((item, i) => (
              <Card key={i} className="border-2 border-slate-200 bg-white hover:border-blue-400 hover:shadow-xl transition-all group overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-black text-2xl group-hover:scale-110 transition-transform shadow-lg">
                      {item.step}
                    </div>
                    <div className="text-3xl">{item.icon}</div>
                  </div>
                  <h3 className="font-black text-lg mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.description}</p>
                  
                  <div className="pt-4 border-t border-slate-200 space-y-2">
                    {item.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-xs font-semibold text-slate-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Timeline Visual */}
          <div className="mt-16 px-4">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {[1, 2, 3, 4].map((step, i) => (
                <div key={step} className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-lg">
                    {step}
                  </div>
                  {i < 3 && <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28 bg-slate-50 border-y border-slate-200 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-slate-900">Flexible Pricing Plans</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. Always flexible, never locked in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '₹999',
                period: '/month',
                description: 'Perfect for freelancers',
                features: ['50 campaigns/month', 'All AI tools', 'Basic analytics', 'Email support', 'Standard templates'],
              },
              {
                name: 'Professional',
                price: '₹2,999',
                period: '/month',
                description: 'For growing teams',
                featured: true,
                features: ['Unlimited campaigns', 'All AI tools', 'Advanced analytics', 'Priority support', 'Team collaboration', 'Custom branding', 'API access'],
              },
              {
                name: 'Enterprise',
                price: '₹9,999',
                period: '/month',
                description: 'For agencies',
                features: ['Everything in Professional', 'Unlimited everything', 'Dedicated manager', 'SLA guaranteed', 'White-label options', 'Advanced integrations'],
              },
            ].map((plan, i) => (
              <Card
                key={i}
                tabIndex={0}
                className="group border-2 border-slate-200 relative overflow-hidden cursor-pointer transition-all duration-300 bg-white rounded-3xl focus-visible:ring-4 focus-visible:ring-blue-200 hover:border-blue-200 group-hover:-translate-y-1 group-hover:shadow-xl active:scale-[0.99]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition group-hover:border-blue-200/70"></div>
                <div className="pointer-events-none absolute -inset-8 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-500">
                  <div className="absolute inset-0 rounded-[2.75rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)] blur-3xl animate-bubble"></div>
                </div>
                <CardContent className="relative z-10 p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-blue-700 transition-colors">{plan.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-5xl font-black text-slate-900 group-hover:text-slate-950 transition-colors">{plan.price}</span>
                      <span className="text-slate-600 text-sm font-medium">{plan.period}</span>
                    </div>
                  </div>

                  <Link href="/login">
                    <Button className="w-full mb-6 font-bold py-3 text-base transition-all group-hover:shadow-lg group-active:scale-[0.98] border-2 border-slate-300 text-slate-900 bg-white hover:bg-slate-50">
                      Get Started <ArrowRight size={18} />
                    </Button>
                  </Link>

                  <div className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
                        <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Built by Exceptional Talent</h2>
            <p className="text-lg sm:text-xl text-slate-600">Meet the visionary minds behind Sampark</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <Card key={i} className="border-2 border-slate-200 bg-white hover:border-blue-400 hover:shadow-2xl transition-all group overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${member.color} group-hover:h-2 transition-all`}></div>
                <CardContent className="p-6 sm:p-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{member.role}</p>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">{member.expertise}</p>
                  <p className="text-sm text-slate-700 mb-4">{member.bio}</p>
                  <div className="flex gap-3 pt-4 border-t border-slate-200">
                    <a href="#" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Github size={18} className="text-slate-600" />
                    </a>
                    <a href="#" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Linkedin size={18} className="text-slate-600" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Credit Banner */}
          <div className="mt-12 sm:mt-16 text-center p-6 sm:p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl border-2 border-slate-200 shadow-sm">
            <p className="text-base sm:text-lg text-slate-900 font-bold mb-2">
              Crafted with passion by
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              <span className="font-black text-slate-900">Azhan Ali</span> • <span className="font-black text-slate-900">Mohit Sharma</span> • <span className="font-black text-slate-900">Divyansh Singh</span> • <span className="font-black text-slate-900">Aarif Khan</span>
            </p>
            <p className="text-xs text-slate-600 mt-3">Bringing innovation and excellence to marketing automation</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white">Ready to Transform Marketing?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10">
            Join thousands of teams using Sampark to create stunning campaigns in minutes.
          </p>
          <Link href="/login">
            <Button size="lg" className="gap-2 bg-white text-blue-600 hover:bg-slate-100 font-bold px-8 py-6 rounded-lg text-base md:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Start Your Free Trial <Rocket size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
