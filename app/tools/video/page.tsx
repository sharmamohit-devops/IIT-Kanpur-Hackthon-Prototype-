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
import { Play, Download, Copy } from 'lucide-react'
import { useState } from 'react'

export default function VideoAdGenerator() {
  const [scriptType, setScriptType] = useState('product')
  const [voiceType, setVoiceType] = useState('professional')

  const scripts = [
    { id: 'product', label: 'Product Demo', description: 'Showcase your product features' },
    { id: 'testimonial', label: 'Testimonial', description: 'Customer success story' },
    { id: 'promo', label: 'Promotional', description: 'Limited time offer' },
    { id: 'tutorial', label: 'Tutorial', description: 'How-to guide' },
  ]

  const voices = [
    { id: 'professional', label: 'Professional', accent: 'Neutral' },
    { id: 'enthusiastic', label: 'Enthusiastic', accent: 'Upbeat' },
    { id: 'calm', label: 'Calm', accent: 'Soothing' },
    { id: 'energetic', label: 'Energetic', accent: 'Dynamic' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="user" />

      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-card border-b border-border soft-shadow">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <h1 className="text-2xl font-bold">Video Ad Generator</h1>
            <p className="text-sm text-muted-foreground mt-1">Create professional video advertisements</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-8 py-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              {/* Script Type */}
              <Card className="border border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold">Script Type</h3>
                  <div className="space-y-2">
                    {scripts.map((script) => (
                      <button
                        key={script.id}
                        onClick={() => setScriptType(script.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          scriptType === script.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        <p className="font-medium text-sm">{script.label}</p>
                        <p className="text-xs text-muted-foreground">{script.description}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Voice Type */}
              <Card className="border border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold">Voiceover</h3>
                  <div className="space-y-2">
                    {voices.map((voice) => (
                      <button
                        key={voice.id}
                        onClick={() => setVoiceType(voice.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          voiceType === voice.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        <p className="font-medium text-sm">{voice.label}</p>
                        <p className="text-xs text-muted-foreground">{voice.accent}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            <div className="lg:col-span-2">
              <Card className="border border-border">
                <div className="w-full h-96 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-t-xl flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <Play size={48} className="text-white" />
                  </div>
                  <p className="text-white font-semibold">Video Preview</p>
                  <p className="text-white/80 text-sm">30-second video ad</p>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Generated Script</p>
                    <div className="p-4 bg-muted rounded-lg text-sm">
                      <p>Your compelling product story goes here. This is a dynamic script tailored to your needs...</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 gap-2">
                      <Download size={18} />
                      Download Video
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <Copy size={18} />
                      Regenerate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
