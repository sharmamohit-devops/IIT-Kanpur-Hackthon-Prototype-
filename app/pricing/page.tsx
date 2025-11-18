'use client'

import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { CheckCircle2, X } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        'Up to 50 campaigns/month',
        'All AI tools access',
        'Basic analytics',
        'Email support',
        '500 MB storage',
      ],
      excluded: ['Team collaboration', 'API access', 'Priority support'],
    },
    {
      name: 'Growth',
      price: '₹2999',
      period: '/month',
      description: 'Ideal for growing teams',
      featured: true,
      features: [
        'Unlimited campaigns',
        'All AI tools access',
        'Advanced analytics',
        'Priority email support',
        '50 GB storage',
        'Team collaboration (up to 5)',
        'Custom integrations',
        'Monthly strategy calls',
      ],
      excluded: ['API access', '24/7 phone support'],
    },
    {
      name: 'Agency',
      price: '₹9999',
      period: '/month',
      description: 'For agencies and enterprises',
      features: [
        'Everything in Growth',
        'Unlimited everything',
        'Full API access',
        'Dedicated account manager',
        'Unlimited storage',
        'Unlimited team members',
        'White-label options',
        'Custom training',
        '24/7 priority support',
        'SLA guaranteed',
      ],
      excluded: [],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <Card
                key={i}
                className={`border relative ${
                  plan.featured ? 'border-primary scale-105 shadow-2xl' : 'border-border'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  <Button className="w-full mb-8" variant={plan.featured ? 'default' : 'outline'}>
                    Get Started
                  </Button>

                  <div className="space-y-4">
                    <div className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-success flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {plan.excluded.length > 0 && (
                      <>
                        <div className="border-t border-border pt-4">
                          {plan.excluded.map((feature, j) => (
                            <div key={j} className="flex items-center gap-2 text-muted-foreground mb-2">
                              <X size={18} className="flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans anytime?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.',
              },
              {
                q: 'Do you offer discounts for annual billing?',
                a: 'Yes! Pay annually and save 20% on any plan. Contact our sales team for custom enterprise pricing.',
              },
              {
                q: 'What happens if I exceed my storage limit?',
                a: 'You can purchase additional storage in increments of 10 GB. We\'ll notify you when you\'re approaching your limit.',
              },
              {
                q: 'Is there a free trial available?',
                a: 'Start with 14 days free on any plan. No credit card required to get started.',
              },
            ].map((faq, i) => (
              <Card key={i} className="border border-border">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of marketers transforming their workflow with Sampark.
          </p>
          <Button size="lg">Start Your Free Trial</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
