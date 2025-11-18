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
import { Upload, Sparkles, Download, Copy } from 'lucide-react'
import { useState } from 'react'

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('')

  const styles = [
    { id: 1, name: 'Photorealistic', emoji: '📸' },
    { id: 2, name: 'Illustration', emoji: '🎨' },
    { id: 3, name: '3D Render', emoji: '🎭' },
    { id: 4, name: 'Minimalist', emoji: '⚫' },
    { id: 5, name: 'Abstract', emoji: '✨' },
    { id: 6, name: 'Vintage', emoji: '📼' },
  ]

  const generatedImages = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="user" />

      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-card border-b border-border soft-shadow">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <h1 className="text-2xl font-bold">AI Image Generator</h1>
            <p className="text-sm text-muted-foreground mt-1">Create stunning product images and visuals</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-8 py-8 space-y-8">
          {/* Generator Controls */}
          <Card className="border border-border">
            <CardContent className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">Describe Your Image</label>
                <textarea
                  placeholder="E.g., A modern smartphone displaying a beautiful dashboard on a marble desk with warm lighting..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full h-24 p-4 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Select Style</label>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      className="p-4 border-2 border-border rounded-lg hover:border-primary transition-all text-center space-y-2"
                    >
                      <div className="text-2xl">{style.emoji}</div>
                      <p className="text-xs font-medium">{style.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              <Button className="w-full gap-2" size="lg">
                <Sparkles size={18} />
                Generate Image
              </Button>
            </CardContent>
          </Card>

          {/* Generated Images Gallery */}
          <div>
            <h2 className="text-xl font-bold mb-4">Generated Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {generatedImages.map((image) => (
                <Card key={image.id} className="border border-border overflow-hidden hover:border-primary transition-colors">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">🖼️</div>
                      <p className="text-sm text-muted-foreground">Generated Image #{image.id}</p>
                    </div>
                  </div>
                  <CardContent className="p-4 flex gap-2">
                    <Button variant="outline" className="flex-1 gap-2" size="sm">
                      <Download size={16} />
                      Download
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2" size="sm">
                      <Copy size={16} />
                      Edit
                    </Button>
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
