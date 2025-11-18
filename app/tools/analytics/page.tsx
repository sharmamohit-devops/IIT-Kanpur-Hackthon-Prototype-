'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
import { TrendingUp, Users, Eye, MessageSquare, Share2, Download } from 'lucide-react'

export default function AnalyticsDashboard() {
  const metrics = [
    { label: 'Impressions', value: '248.5K', change: '+12.5%', icon: Eye },
    { label: 'Reach', value: '125.3K', change: '+8.2%', icon: Users },
    { label: 'Engagement', value: '12.8K', change: '+24.1%', icon: MessageSquare },
    { label: 'Shares', value: '3.2K', change: '+18.5%', icon: Share2 },
  ]

  const performanceData = [
    { name: 'Campaign 1', impressions: 45000, engagement: 5200, roi: '340%' },
    { name: 'Campaign 2', impressions: 38000, engagement: 4100, roi: '280%' },
    { name: 'Campaign 3', impressions: 52000, engagement: 6200, roi: '425%' },
    { name: 'Campaign 4', impressions: 31000, engagement: 3500, roi: '215%' },
  ]

  const topContent = [
    { id: 1, title: 'Video Ad - Product Launch', views: '42.5K', engagement: '18.5%' },
    { id: 2, title: 'Instagram Stories - Promo', views: '28.3K', engagement: '12.2%' },
    { id: 3, title: 'Email Campaign', views: '19.8K', engagement: '8.9%' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="user" />

      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-card border-b border-border soft-shadow">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
            <Button className="gap-2">
              <Download size={18} />
              Export Report
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, i) => {
              const Icon = metric.icon
              return (
                <Card key={i} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                        <p className="text-3xl font-bold">{metric.value}</p>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-success text-sm font-semibold">{metric.change} from last week</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Charts & Data */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Campaign Performance */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Campaign Performance</h2>
                <Button variant="ghost" className="text-primary">View Detailed →</Button>
              </div>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {performanceData.map((campaign, i) => (
                      <div key={i} className="pb-4 border-b border-border last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold">{campaign.name}</p>
                          <p className="text-sm text-success font-bold">{campaign.roi}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex-1">
                            <div className="h-2 bg-border rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-secondary"
                                style={{ width: `${(campaign.impressions / 52000) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-muted-foreground">{campaign.impressions.toLocaleString()} impressions</p>
                            <p className="text-primary font-semibold">{campaign.engagement.toLocaleString()} engagements</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary Stats */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Summary</h2>
              <Card className="border border-border">
                <CardContent className="p-6 space-y-6">
                  {[
                    { label: 'Total Campaigns', value: '12', color: 'bg-primary/10 text-primary' },
                    { label: 'Active Campaigns', value: '5', color: 'bg-success/10 text-success' },
                    { label: 'Avg Engagement', value: '8.4%', color: 'bg-secondary/10 text-secondary' },
                    { label: 'Total Spent', value: '₹45,200', color: 'bg-warning/10 text-warning' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-xs text-muted-foreground mb-2">{stat.label}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Top Performing Content */}
          <div>
            <h2 className="text-xl font-bold mb-4">Top Performing Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topContent.map((content) => (
                <Card key={content.id} className="border border-border hover:border-primary transition-colors">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-t-xl flex items-center justify-center">
                    <span className="text-4xl">📊</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">{content.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Views</span>
                        <span className="font-semibold">{content.views}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Engagement</span>
                        <span className="font-semibold text-success">{content.engagement}</span>
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
