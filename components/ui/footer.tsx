'use client'

import Link from 'next/link'
import { Mail, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-bold">Sampark</span>
            </div>
            <p className="text-sm text-muted-foreground">AI-powered marketing automation for modern brands.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-foreground transition">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-foreground transition">Pricing</Link></li>
              <li><Link href="/templates" className="hover:text-foreground transition">Templates</Link></li>
              <li><Link href="/integrations" className="hover:text-foreground transition">Integrations</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition">About</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-foreground transition">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground transition">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition">Terms</Link></li>
              <li><Link href="/support" className="hover:text-foreground transition">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Sampark. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
