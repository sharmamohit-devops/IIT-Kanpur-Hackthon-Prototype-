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
import { Plus, Shield, Trash2 } from 'lucide-react'

export default function BusinessTeam() {
  const team = [
    { id: 1, name: 'John Manager', role: 'Manager', email: 'john@techsolutions.com', status: 'Active' },
    { id: 2, name: 'Sarah Designer', role: 'Designer', email: 'sarah@techsolutions.com', status: 'Active' },
    { id: 3, name: 'Mike Analyst', role: 'Analyst', email: 'mike@techsolutions.com', status: 'Pending' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="business" />
      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 z-40 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Team Members</h1>
            <Button className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500">
              <Plus size={18} />
              Invite Member
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="space-y-4">
            {team.map((member) => (
              <Card key={member.id} className="border border-slate-700 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-slate-400 text-sm">{member.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400 text-sm">{member.role}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${member.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {member.status}
                    </span>
                    <Trash2 size={18} className="text-slate-400 hover:text-red-400 cursor-pointer transition-colors" />
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
