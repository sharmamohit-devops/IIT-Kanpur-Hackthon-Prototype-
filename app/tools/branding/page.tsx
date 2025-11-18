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
import { Upload, Sparkles, Copy, Download } from 'lucide-react'
import { useState } from 'react'

export default function BrandingGenerator() {
  const [step, setStep] = useState(1)
  const [description, setDescription] = useState('')

  const generatedBrand = {
    name: 'LumaVision',
    tagline: 'Illuminate Your Digital Future',
    colors: [
      { name: 'Primary', code: '#4A3AFF' },
      { name: 'Secondary', code: '#A7A3FF' },
      { name: 'Accent', code: '#F59E0B' },
      { name: 'Success', code: '#22C55E' },
    ],
    fonts: ['Inter (Headings)', 'Geist (Body)'],
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role="user" />

      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-card border-b border-border soft-shadow">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <h1 className="text-2xl font-bold">Branding AI Generator</h1>
            <p className="text-sm text-muted-foreground mt-1">Create a unique brand identity in minutes</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <div className="lg:col-span-1">
              <Card className="border border-border sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-bold mb-4">Tell Us About Your Brand</h3>
                    <textarea
                      placeholder="Describe your business, target audience, and brand personality..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full h-32 p-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  {/* Upload */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Logo (Optional)</label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload size={32} className="mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Drop logo here or click to upload</p>
                    </div>
                  </div>

                  {/* Generate Button */}
                  <Button className="w-full gap-2" onClick={() => setStep(2)}>
                    <Sparkles size={18} />
                    Generate Brand
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Output Section */}
            <div className="lg:col-span-2 space-y-6">
              {step >= 2 && (
                <>
                  {/* Brand Name & Tagline */}
                  <Card className="border border-border">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Brand Name</p>
                          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {generatedBrand.name}
                          </h2>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Tagline</p>
                          <p className="text-xl font-semibold text-foreground italic">"{generatedBrand.tagline}"</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Color Palette */}
                  <Card className="border border-border">
                    <CardContent className="p-8">
                      <h3 className="font-bold mb-6">Color Palette</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {generatedBrand.colors.map((color, i) => (
                          <div key={i} className="text-center">
                            <div
                              className="w-full h-24 rounded-lg mb-3 cursor-pointer hover:opacity-80 transition-opacity soft-shadow"
                              style={{ backgroundColor: color.code }}
                            ></div>
                            <p className="text-xs font-semibold">{color.name}</p>
                            <p className="text-xs text-muted-foreground font-mono mt-1">{color.code}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Typography */}
                  <Card className="border border-border">
                    <CardContent className="p-8">
                      <h3 className="font-bold mb-6">Typography</h3>
                      <div className="space-y-4">
                        {generatedBrand.fonts.map((font, i) => (
                          <div key={i} className="p-4 bg-muted rounded-lg">
                            <p className="text-sm text-muted-foreground mb-2">Font {i === 0 ? '1' : '2'}</p>
                            <p className="text-lg font-semibold">{font}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button className="flex-1 gap-2">
                      <Download size={18} />
                      Download Brand Kit
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <Copy size={18} />
                      Regenerate
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
