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
import { Button } from '@/components/ui/button'
import { CreditCard, Download } from 'lucide-react'

export default function BusinessBilling() {
  const invoices = [
    { id: 'INV-001', date: 'Mar 1, 2024', amount: '₹2,999', status: 'Paid' },
    { id: 'INV-002', date: 'Feb 1, 2024', amount: '₹2,999', status: 'Paid' },
    { id: 'INV-003', date: 'Jan 1, 2024', amount: '₹2,999', status: 'Paid' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="business" />
      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 z-40 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <h1 className="text-3xl font-bold">Billing & Payments</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
          <Card className="border border-slate-700 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-slate-400 mb-2">Current Plan</p>
                  <h3 className="text-3xl font-bold">Growth Plan</h3>
                  <p className="text-slate-300 mt-2">₹2,999/month • Unlimited campaigns</p>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500">
                  <CreditCard size={18} />
                  Update Plan
                </Button>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-xl font-bold mb-4">Payment Method</h3>
            <Card className="border border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <CreditCard size={32} className="text-blue-400" />
                    <div>
                      <p className="font-semibold">Visa ending in 4242</p>
                      <p className="text-slate-400 text-sm">Expires 12/2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Invoice History</h3>
            <div className="space-y-3">
              {invoices.map((invoice) => (
                <Card key={invoice.id} className="border border-slate-700">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{invoice.id}</p>
                      <p className="text-slate-400 text-sm">{invoice.date}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-bold">{invoice.amount}</span>
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">{invoice.status}</span>
                      <Download size={18} className="text-slate-400 hover:text-blue-400 cursor-pointer" />
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
