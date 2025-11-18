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
import { Wand2, Download, RotateCcw } from 'lucide-react'
import { useState } from 'react'

export default function EnhancerEditor() {
  const [showComparison, setShowComparison] = useState(false)

  const enhancements = [
    { id: 1, label: 'Enhance Colors', icon: '🎨' },
    { id: 2, label: 'Fix Lighting', icon: '💡' },
    { id: 3, label: 'Remove Background', icon: '🔲' },
    { id: 4, label: 'Upscale Quality', icon: '✨' },
    { id: 5, label: 'Add Effects', icon: '🌟' },
    { id: 6, label: 'Auto Crop', icon: '✂️' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="user" />

      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-card border-b border-border soft-shadow">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <h1 className="text-2xl font-bold">AI Editor & Enhancer</h1>
            <p className="text-sm text-muted-foreground mt-1">Enhance and edit your images with AI</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-8 py-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tools */}
            <div className="space-y-4">
              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Enhancement Tools</h3>
                  <div className="space-y-3">
                    {enhancements.map((tool) => (
                      <button
                        key={tool.id}
                        className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left"
                      >
                        <span className="text-xl">{tool.icon}</span>
                        <span className="font-medium text-sm">{tool.label}</span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview Area */}
            <div className="lg:col-span-3">
              <Card className="border border-border">
                <CardContent className="p-6">
                  {!showComparison ? (
                    <div className="space-y-4">
                      <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-3">📸</div>
                          <p className="text-muted-foreground">Upload an image to get started</p>
                        </div>
                      </div>
                      <Button className="w-full">Upload Image</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-2">Before</p>
                          <div className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg"></div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-2">After</p>
                          <div className="w-full h-64 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-lg"></div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button className="flex-1 gap-2">
                          <Download size={18} />
                          Download
                        </Button>
                        <Button variant="outline" className="flex-1 gap-2">
                          <RotateCcw size={18} />
                          Reset
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
