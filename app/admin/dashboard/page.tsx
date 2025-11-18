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
import { Users, Building2, TrendingUp, BarChart3, AlertTriangle, Settings } from 'lucide-react'

export default function AdminDashboard() {
  const systemMetrics = [
    {
      label: 'Total Users',
      value: '12,482',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Active Businesses',
      value: '2,847',
      icon: Building2,
      color: 'from-purple-500 to-pink-500',
    },
    {
      label: 'Revenue (30d)',
      value: '₹4.2M',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
    },
    {
      label: 'System Health',
      value: '99.8%',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
    },
  ]

  const recentUsers = [
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', plan: 'Growth', joined: '2 hours ago' },
    { id: 2, name: 'Priya Sharma', email: 'priya@business.com', plan: 'Agency', joined: '4 hours ago' },
    { id: 3, name: 'Amit Patel', email: 'amit.p@startup.io', plan: 'Starter', joined: '1 day ago' },
    { id: 4, name: 'Sarah Chen', email: 'sarah@corp.com', plan: 'Agency', joined: '2 days ago' },
  ]

  const systemAlerts = [
    { severity: 'warning', message: 'API latency slightly elevated (avg 245ms)', timestamp: '5 mins ago' },
    { severity: 'info', message: 'Database backup completed successfully', timestamp: '1 hour ago' },
    { severity: 'info', message: 'New integrations deployed', timestamp: '2 hours ago' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="admin" />

      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-card border-b border-border soft-shadow">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">System Administration</h1>
            <Button variant="outline" className="gap-2">
              <Settings size={18} />
              System Settings
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
          {/* System Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics.map((metric, i) => {
              const Icon = metric.icon
              return (
                <Card key={i} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                      </div>
                      <div className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center`}>
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Users */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Recent Users</h2>
                <Button variant="ghost" className="text-primary">View All →</Button>
              </div>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between pb-4 border-b border-border last:border-b-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                            {user.name[0]}
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-semibold text-primary">{user.plan}</p>
                          <p className="text-xs text-muted-foreground">{user.joined}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Alerts */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">System Alerts</h2>
              <Card className="border border-border">
                <CardContent className="p-6 space-y-4">
                  {systemAlerts.map((alert, i) => (
                    <div key={i} className={`flex gap-3 pb-4 ${i < systemAlerts.length - 1 ? 'border-b border-border' : ''}`}>
                      <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                        alert.severity === 'warning'
                          ? 'bg-warning'
                          : 'bg-success'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* System Controls */}
          <div>
            <h2 className="text-xl font-bold mb-4">Administrative Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Manage Users', icon: '👥' },
                { label: 'Manage Businesses', icon: '🏢' },
                { label: 'View Reports', icon: '📊' },
                { label: 'Revenue Analytics', icon: '💰' },
                { label: 'System Logs', icon: '📝' },
                { label: 'Security Settings', icon: '🔒' },
              ].map((control, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center gap-2 border-2 hover:border-primary"
                >
                  <span className="text-3xl">{control.icon}</span>
                  <span className="text-sm font-medium">{control.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
