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
import { Type, Image, Zap, Download } from 'lucide-react'
import { useState } from 'react'

export default function PosterCreator() {
  const [selectedTemplate, setSelectedTemplate] = useState(1)

  const templates = [
    { id: 1, name: 'Minimalist', icon: '⚫' },
    { id: 2, name: 'Bold', icon: '🔴' },
    { id: 3, name: 'Elegant', icon: '✨' },
    { id: 4, name: 'Modern', icon: '📐' },
    { id: 5, name: 'Retro', icon: '📼' },
    { id: 6, name: 'Neon', icon: '💡' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="user" />

      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-card border-b border-border soft-shadow">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <h1 className="text-2xl font-bold">Poster Maker</h1>
            <p className="text-sm text-muted-foreground mt-1">Design professional posters and promotional materials</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-8 py-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Templates */}
              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Templates</h3>
                  <div className="grid grid-cols-3 lg:grid-cols-2 gap-3">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedTemplate === template.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        <div className="text-2xl mb-2">{template.icon}</div>
                        <p className="text-xs font-medium text-center">{template.name}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Text Editor */}
              <Card className="border border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold">Edit Text</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Title</label>
                      <input
                        type="text"
                        placeholder="Main heading"
                        className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Subtitle</label>
                      <input
                        type="text"
                        placeholder="Subtitle"
                        className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">CTA Button</label>
                      <input
                        type="text"
                        placeholder="Button text"
                        className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            <div className="lg:col-span-3">
              <Card className="border border-border">
                <div className="w-full h-96 bg-gradient-to-br from-primary/30 to-secondary/20 flex items-center justify-center rounded-t-xl">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold text-foreground">Your Poster Here</div>
                    <p className="text-xl text-muted-foreground">Poster Preview</p>
                  </div>
                </div>
                <CardContent className="p-6 flex gap-3">
                  <Button className="flex-1 gap-2">
                    <Download size={18} />
                    Download
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Save to Library
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
