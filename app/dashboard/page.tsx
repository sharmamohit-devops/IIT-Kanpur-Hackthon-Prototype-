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
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Zap, Plus, Palette, Image, Maximize2, Volume2, Scissors, Calendar, BarChart3 } from 'lucide-react'

export default function UserDashboard() {
  const recentCampaigns = [
    {
      id: 1,
      name: 'Summer Sale Campaign',
      type: 'Social Media',
      date: 'Today',
      status: 'Published',
    },
    {
      id: 2,
      name: 'Product Launch Video',
      type: 'Video',
      date: 'Yesterday',
      status: 'Draft',
    },
    {
      id: 3,
      name: 'Brand Identity Update',
      type: 'Branding',
      date: '2 days ago',
      status: 'Published',
    },
  ]

  const quickActions = [
    { icon: Palette, label: 'New Brand', href: '/tools/branding' },
    { icon: Image, label: 'Generate Image', href: '/tools/image' },
    { icon: Maximize2, label: 'Design Poster', href: '/tools/poster' },
    { icon: Volume2, label: 'Create Video', href: '/tools/video' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="user" />

      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-card border-b border-border soft-shadow">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Button className="gap-2">
              <Plus size={18} />
              New Campaign
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-xl p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome back, Creator!</h2>
                <p className="text-muted-foreground">You've created 24 campaigns this month. Keep up the great work!</p>
              </div>
              <div className="text-5xl">🚀</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Total Campaigns', value: '24', icon: Maximize2 },
              { label: 'This Month', value: '12', icon: Calendar },
              { label: 'Avg Engagement', value: '8.5%', icon: BarChart3 },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <Card key={i} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {quickActions.map((action) => {
                const Icon = action.icon
                return (
                  <Button
                    key={action.label}
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary"
                  >
                    <Icon size={24} className="text-primary" />
                    <span className="text-sm">{action.label}</span>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Recent Campaigns */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Recent Campaigns</h3>
              <Button variant="ghost" className="text-primary">View All →</Button>
            </div>
            <div className="space-y-3">
              {recentCampaigns.map((campaign) => (
                <Card key={campaign.id} className="border border-border hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{campaign.name}</h4>
                      <p className="text-sm text-muted-foreground">{campaign.type} • {campaign.date}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      campaign.status === 'Published'
                        ? 'bg-success/20 text-success'
                        : 'bg-warning/20 text-warning'
                    }`}>
                      {campaign.status}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div className="border-t border-border pt-8">
            <h3 className="text-lg font-bold mb-4">Getting Started Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Create Your Brand Identity',
                  description: 'Start by defining your brand with our AI branding tool.',
                },
                {
                  title: 'Generate Professional Content',
                  description: 'Use our image and video generators to create stunning visuals.',
                },
                {
                  title: 'Schedule Your Campaigns',
                  description: 'Plan and automate your campaigns across multiple platforms.',
                },
                {
                  title: 'Analyze Your Results',
                  description: 'Track performance metrics and optimize your strategy.',
                },
              ].map((tip, i) => (
                <Card key={i} className="border border-border">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
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
