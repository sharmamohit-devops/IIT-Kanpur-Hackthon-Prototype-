'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger
} from '@/components/ui/sidebar'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Users, Eye } from 'lucide-react'

export default function BusinessAnalytics() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="business" />
      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 z-40 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <h1 className="text-3xl font-bold">Analytics</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border border-slate-700 bg-gradient-to-br from-blue-500/10 to-cyan-500/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-slate-400 text-sm font-semibold">Total Reach</p>
                  <Eye size={20} className="text-blue-400" />
                </div>
                <p className="text-3xl font-bold mb-2">2.4M</p>
                <div className="flex items-center gap-1 text-green-400">
                  <TrendingUp size={16} />
                  <span className="text-xs">+12% from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-slate-700 bg-gradient-to-br from-purple-500/10 to-pink-500/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-slate-400 text-sm font-semibold">Engagement Rate</p>
                  <TrendingUp size={20} className="text-purple-400" />
                </div>
                <p className="text-3xl font-bold mb-2">9.2%</p>
                <div className="flex items-center gap-1 text-green-400">
                  <TrendingUp size={16} />
                  <span className="text-xs">+2.1% from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-slate-700 bg-gradient-to-br from-teal-500/10 to-emerald-500/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-slate-400 text-sm font-semibold">Conversions</p>
                  <Users size={20} className="text-teal-400" />
                </div>
                <p className="text-3xl font-bold mb-2">892</p>
                <div className="flex items-center gap-1 text-green-400">
                  <TrendingUp size={16} />
                  <span className="text-xs">+18% from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-slate-700 bg-gradient-to-br from-orange-500/10 to-red-500/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-slate-400 text-sm font-semibold">ROI</p>
                  <TrendingUp size={20} className="text-orange-400" />
                </div>
                <p className="text-3xl font-bold mb-2">340%</p>
                <div className="flex items-center gap-1 text-red-400">
                  <TrendingDown size={16} />
                  <span className="text-xs">-5% from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-slate-700">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">Top Performing Content</h3>
              <div className="space-y-3">
                {[
                  { title: 'Summer Sale Video', reach: '854K', engagement: '14.2%' },
                  { title: 'Product Demo Post', reach: '642K', engagement: '11.8%' },
                  { title: 'Customer Testimonial', reach: '512K', engagement: '9.3%' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                    <span className="text-white">{item.title}</span>
                    <div className="flex gap-6">
                      <span className="text-slate-400">Reach: {item.reach}</span>
                      <span className="text-green-400">Engagement: {item.engagement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
