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
import { Calendar, Plus, Check, Clock } from 'lucide-react'
import { useState } from 'react'

export default function CampaignScheduler() {
  const [view, setView] = useState('month')

  const scheduledCampaigns = [
    {
      id: 1,
      name: 'Q1 Spring Launch',
      date: '2024-03-15',
      time: '10:00 AM',
      platforms: ['Instagram', 'Facebook', 'Twitter'],
      status: 'Scheduled',
    },
    {
      id: 2,
      name: 'Email Blast - New Products',
      date: '2024-03-18',
      time: '2:00 PM',
      platforms: ['Email'],
      status: 'Scheduled',
    },
    {
      id: 3,
      name: 'Summer Sale Campaign',
      date: '2024-03-20',
      time: '9:00 AM',
      platforms: ['All Channels'],
      status: 'Scheduled',
    },
    {
      id: 4,
      name: 'Video Promo - TikTok',
      date: '2024-03-25',
      time: '5:00 PM',
      platforms: ['TikTok', 'Instagram Reels'],
      status: 'Scheduled',
    },
  ]

  const calendarDays = Array.from({ length: 35 }, (_, i) => i + 1)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="user" />

      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-card border-b border-border soft-shadow">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Campaign Scheduler</h1>
              <p className="text-sm text-muted-foreground mt-1">Plan and automate your campaigns</p>
            </div>
            <Button className="gap-2">
              <Plus size={18} />
              Schedule Campaign
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <Card className="border border-border">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">March 2024</h2>
                    <div className="flex gap-2">
                      {['Month', 'Week', 'Day'].map((v) => (
                        <Button
                          key={v}
                          variant={view === v.toLowerCase() ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setView(v.toLowerCase())}
                        >
                          {v}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="text-center font-semibold text-xs text-muted-foreground">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {calendarDays.map((day) => (
                        <div
                          key={day}
                          className={`p-4 rounded-lg border text-center cursor-pointer transition-all ${
                            [15, 18, 20, 25].includes(day)
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary'
                          }`}
                        >
                          <p className="font-medium text-sm">{day}</p>
                          {[15, 18, 20, 25].includes(day) && (
                            <p className="text-xs text-primary font-semibold mt-1">•</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Add Campaign Form */}
            <div>
              <Card className="border border-border sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold">New Campaign</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Campaign Name</label>
                      <input
                        type="text"
                        placeholder="Campaign name"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Date</label>
                      <input
                        type="date"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Time</label>
                      <input
                        type="time"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Platforms</label>
                      <div className="mt-2 space-y-2">
                        {['Instagram', 'Facebook', 'Twitter', 'Email'].map((p) => (
                          <label key={p} className="flex items-center gap-2 text-sm cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            {p}
                          </label>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">Schedule</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Scheduled Campaigns */}
          <div>
            <h2 className="text-xl font-bold mb-4">Upcoming Campaigns</h2>
            <div className="space-y-4">
              {scheduledCampaigns.map((campaign) => (
                <Card key={campaign.id} className="border border-border hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{campaign.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {campaign.platforms.map((platform) => (
                            <span
                              key={platform}
                              className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs font-medium"
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {campaign.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {campaign.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="px-3 py-1 bg-success/20 text-success rounded-full text-xs font-semibold">
                          {campaign.status}
                        </span>
                        <Button variant="outline" size="sm">Edit</Button>
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
