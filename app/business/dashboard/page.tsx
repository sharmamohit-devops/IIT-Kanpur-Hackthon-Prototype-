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
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, Target, Zap, BarChart3, ArrowUpRight } from 'lucide-react'

export default function BusinessDashboard() {
  const metrics = [
    {
      label: 'Total Reach',
      value: '125.4K',
      change: '+12.5%',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Engagement Rate',
      value: '8.9%',
      change: '+2.3%',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
    },
    {
      label: 'Total Leads',
      value: '3,284',
      change: '+18.2%',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
    {
      label: 'Campaigns Running',
      value: '12',
      change: '3 new',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
    },
  ]

  const campaignPerformance = [
    { name: 'Q1 Summer Sale', reach: '45K', engagement: '12.5%', status: 'Active' },
    { name: 'Product Launch', reach: '32K', engagement: '9.8%', status: 'Active' },
    { name: 'Brand Awareness', reach: '28K', engagement: '7.2%', status: 'Scheduled' },
    { name: 'Email Campaign', reach: '18K', engagement: '5.1%', status: 'Completed' },
  ]

  const topCreatives = [
    { id: 1, title: 'Summer Banner Ad', views: '12.4K', engagement: '14.2%' },
    { id: 2, title: 'Product Video', views: '9.8K', engagement: '18.5%' },
    { id: 3, title: 'Instagram Story', views: '7.2K', engagement: '22.1%' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="business" />

      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-card border-b border-border soft-shadow">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Business Analytics</h1>
            <Button>Export Report</Button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, i) => {
              const Icon = metric.icon
              return (
                <Card key={i} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                      </div>
                      <div className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center`}>
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-success text-sm">
                      <ArrowUpRight size={16} />
                      <span>{metric.change}</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Campaign Performance */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Campaign Performance</h2>
              <Button variant="ghost" className="text-primary">View All →</Button>
            </div>
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 font-semibold text-sm text-muted-foreground">Campaign Name</th>
                        <th className="text-left py-3 font-semibold text-sm text-muted-foreground">Reach</th>
                        <th className="text-left py-3 font-semibold text-sm text-muted-foreground">Engagement</th>
                        <th className="text-left py-3 font-semibold text-sm text-muted-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaignPerformance.map((campaign, i) => (
                        <tr key={i} className="border-b border-border hover:bg-muted/50">
                          <td className="py-3 font-medium">{campaign.name}</td>
                          <td className="py-3">{campaign.reach}</td>
                          <td className="py-3 text-success font-semibold">{campaign.engagement}</td>
                          <td className="py-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              campaign.status === 'Active'
                                ? 'bg-success/20 text-success'
                                : campaign.status === 'Scheduled'
                                ? 'bg-warning/20 text-warning'
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {campaign.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Creatives */}
          <div>
            <h2 className="text-xl font-bold mb-4">Top Performing Creatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topCreatives.map((creative) => (
                <Card key={creative.id} className="border border-border hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-4xl">📊</div>
                    </div>
                    <h3 className="font-semibold mb-3">{creative.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Views</span>
                        <span className="font-semibold">{creative.views}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Engagement</span>
                        <span className="font-semibold text-success">{creative.engagement}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
