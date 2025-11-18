'use client'

import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Users, Briefcase, Shield } from 'lucide-react'

export default function LoginSelection() {
  const loginOptions = [
    {
      title: 'Creator Login',
      description: 'For freelancers and individual creators',
      icon: Users,
      href: '/login/user',
      gradient: 'from-blue-500 via-cyan-400 to-teal-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      title: 'Business Login',
      description: 'For business owners and teams',
      icon: Briefcase,
      href: '/login/business',
      gradient: 'from-purple-500 via-pink-400 to-rose-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      title: 'Admin Login',
      description: 'For administrators only',
      icon: Shield,
      href: '/login/admin',
      gradient: 'from-amber-500 via-orange-400 to-red-500',
      bgGradient: 'from-amber-50 to-orange-50',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-200/40 to-pink-200/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="w-full max-w-5xl space-y-12">
        <div className="flex justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Logo & Title */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-white font-black text-2xl">S</span>
            </div>
            <span className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Sampark</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900">Choose Your Account</h1>
          <p className="text-lg text-slate-600">Select your account type to access your dashboard</p>
        </div>

        {/* Login Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loginOptions.map((option) => {
            const Icon = option.icon
            return (
              <Link key={option.title} href={option.href}>
                <Card className={`border-2 border-slate-200 hover:border-slate-400 hover:shadow-xl transition-all duration-300 cursor-pointer h-full bg-gradient-to-br ${option.bgGradient} group overflow-hidden relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4 h-full">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900 mb-2">{option.title}</h3>
                      <p className="text-sm text-slate-600">{option.description}</p>
                    </div>
                    <div className={`mt-auto bg-gradient-to-r ${option.gradient} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300`}>
                      <ArrowRight size={24} className="mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-slate-500 space-y-2">
          <p>Demo credentials are pre-filled for testing</p>
          <p className="text-xs">All accounts are sandbox/demo only</p>
        </div>
      </div>
    </div>
  )
}
