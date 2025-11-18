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
import { Plus, CheckCircle2, X } from 'lucide-react'

export default function BusinessIntegrations() {
  const integrations = [
    { name: 'Facebook', status: 'Connected', icon: '📘' },
    { name: 'Instagram', status: 'Connected', icon: '📷' },
    { name: 'Twitter', status: 'Not Connected', icon: '𝕏' },
    { name: 'LinkedIn', status: 'Connected', icon: '💼' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="business" />
      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 z-40 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Integrations</h1>
            <Button className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500">
              <Plus size={18} />
              Add Integration
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrations.map((integration) => (
              <Card key={integration.name} className="border border-slate-700 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{integration.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg">{integration.name}</h3>
                        <p className="text-slate-400 text-sm">{integration.status}</p>
                      </div>
                    </div>
                    {integration.status === 'Connected' ? (
                      <CheckCircle2 size={24} className="text-green-400" />
                    ) : (
                      <Button size="sm" variant="outline">Connect</Button>
                    )}
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
