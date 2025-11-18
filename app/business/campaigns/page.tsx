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
import { Plus, Filter, TrendingUp } from 'lucide-react'

export default function BusinessCampaigns() {
  const campaigns = [
    { id: 1, name: 'Summer Sale 2024', status: 'Active', reach: '124K', engagement: '8.5%', date: 'Mar 15, 2024' },
    { id: 2, name: 'Product Launch', status: 'Active', reach: '98K', engagement: '12.3%', date: 'Mar 12, 2024' },
    { id: 3, name: 'Brand Awareness', status: 'Scheduled', reach: '-', engagement: '-', date: 'Apr 1, 2024' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="business" />
      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 z-40 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Campaigns</h1>
            <Button className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500">
              <Plus size={18} />
              New Campaign
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="border border-slate-700 bg-slate-800/30">
              <CardContent className="p-6">
                <p className="text-slate-400 text-sm mb-2">Active Campaigns</p>
                <p className="text-3xl font-bold">12</p>
              </CardContent>
            </Card>
            <Card className="border border-slate-700 bg-slate-800/30">
              <CardContent className="p-6">
                <p className="text-slate-400 text-sm mb-2">Total Reach</p>
                <p className="text-3xl font-bold">2.4M</p>
              </CardContent>
            </Card>
            <Card className="border border-slate-700 bg-slate-800/30">
              <CardContent className="p-6">
                <p className="text-slate-400 text-sm mb-2">Avg Engagement</p>
                <p className="text-3xl font-bold">9.2%</p>
              </CardContent>
            </Card>
            <Card className="border border-slate-700 bg-slate-800/30">
              <CardContent className="p-6">
                <p className="text-slate-400 text-sm mb-2">Conversions</p>
                <p className="text-3xl font-bold">892</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="border border-slate-700 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{campaign.name}</h3>
                    <p className="text-slate-400 text-sm">{campaign.date}</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-slate-400 text-xs">Reach</p>
                      <p className="text-lg font-bold">{campaign.reach}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-xs">Engagement</p>
                      <p className="text-lg font-bold">{campaign.engagement}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${campaign.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {campaign.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
