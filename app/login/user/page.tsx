'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Mail, Lock, ArrowLeft, Check } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UserLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('alex@creator.com')
  const [password, setPassword] = useState('demo123')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({ role: 'user', email, name: 'Alex Creator' }))
      router.push('/dashboard')
    }, 1000)
  }

  const fillDemo = () => {
    setEmail('alex@creator.com')
    setPassword('demo123')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Link href="/login" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium">
            <ArrowLeft size={18} />
            Back to Login
          </Link>
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-600">Creator Dashboard Access</p>
          </div>
        </div>

        {/* Demo Info Card */}
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-md">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900 mb-3">Demo Credentials (Auto-filled)</p>
                <div className="space-y-1 text-xs">
                  <p className="text-slate-700">Email: <span className="font-mono font-semibold text-blue-600">alex@creator.com</span></p>
                  <p className="text-slate-700">Password: <span className="font-mono font-semibold text-blue-600">demo123</span></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Login Form */}
        <Card className="border-2 border-slate-200 bg-white shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-900">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-900">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium"
                    required
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3 pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70" 
                  size="lg" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In to Dashboard'}
                </Button>
                <Button 
                  type="button" 
                  onClick={fillDemo} 
                  className="w-full border-2 border-slate-300 bg-white text-slate-900 hover:bg-slate-50 font-bold py-3 rounded-lg transition-all"
                >
                  Use Demo Credentials
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-slate-600">
          This is a demo account. All data is sandbox only.
        </p>
      </div>
    </div>
  )
}
