'use client'

import Link from 'next/link'
import { LayoutDashboard, Palette, Image, Maximize2, Volume2, Scissors, Calendar, BarChart3, Settings, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useIsMobile } from '@/hooks/use-mobile'

interface SidebarProps {
  role?: 'user' | 'business' | 'admin'
}

export function Sidebar({ role = 'user' }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const isMobile = useIsMobile()

  const userMenuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Branding', icon: Palette, href: '/tools/branding' },
    { label: 'Image Generator', icon: Image, href: '/tools/image' },
    { label: 'Poster Creator', icon: Maximize2, href: '/tools/poster' },
    { label: 'Video Ads', icon: Volume2, href: '/tools/video' },
    { label: 'Editor', icon: Scissors, href: '/tools/editor' },
    { label: 'Scheduler', icon: Calendar, href: '/tools/scheduler' },
    { label: 'Analytics', icon: BarChart3, href: '/tools/analytics' },
  ]

  const businessMenuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/business/dashboard' },
    { label: 'Campaigns', icon: Maximize2, href: '/business/campaigns' },
    { label: 'Team', icon: Palette, href: '/business/team' },
    { label: 'Analytics', icon: BarChart3, href: '/business/analytics' },
    { label: 'Integrations', icon: Volume2, href: '/business/integrations' },
    { label: 'Billing', icon: Settings, href: '/business/billing' },
  ]

  const adminMenuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
    { label: 'Users', icon: Palette, href: '/admin/users' },
    { label: 'Businesses', icon: Image, href: '/admin/businesses' },
    { label: 'Reports', icon: BarChart3, href: '/admin/reports' },
    { label: 'System', icon: Settings, href: '/admin/system' },
  ]

  const menuItems = role === 'admin' ? adminMenuItems : role === 'business' ? businessMenuItems : userMenuItems

  const handleLogout = () => {
    // Clear any auth state if needed
    router.push('/login')
    if (isMobile) {
      setIsMobileMenuOpen(false)
    }
  }

  const sidebarWidth = isMobile ? 'w-72' : isCollapsed ? 'w-20' : 'w-64'
  const sidebarPositionClasses = isMobile
    ? `fixed inset-y-0 left-0 ${sidebarWidth} transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} shadow-2xl z-50`
    : `${sidebarWidth} sticky top-0 shadow-sm`

  return (
    <>
      {isMobile && !isMobileMenuOpen && (
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden fixed top-4 left-4 z-40 flex items-center gap-2 rounded-full bg-white/95 border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg"
        >
          <Menu size={18} />
          Menu
        </button>
      )}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      <aside
        className={`${sidebarPositionClasses} bg-white border-r border-slate-200 transition-all duration-300 flex flex-col h-screen`}
        aria-hidden={isMobile && !isMobileMenuOpen}
      >
      {/* Logo */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
              <span className="text-white font-black">S</span>
            </div>
            {!isCollapsed && !isMobile && <span className="font-black text-sm truncate">Sampark</span>}
            {!isCollapsed && isMobile && <span className="font-black text-base">Sampark</span>}
          </Link>
          {isMobile && (
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={18} />
            </button>
          )}
        </div>

      {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium text-sm"
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
        </nav>

      {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-200 space-y-2">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors font-medium text-sm"
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          <Settings size={20} className="flex-shrink-0" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors font-medium text-sm"
        >
          <LogOut size={20} className="flex-shrink-0" />
          {!isCollapsed && <span>Sign Out</span>}
        </button>
        </div>

      {/* Collapse Button */}
        {!isMobile && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="mx-4 mb-4 px-4 py-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-bold transition-colors"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        )}
      </aside>
    </>
  )
}
