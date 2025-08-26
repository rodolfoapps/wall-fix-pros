'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizations() {
  useEffect(() => {
    // Preload critical images that will be needed soon
    const preloadImages = [
      '/images/hero/hero-desktop.webp',
      '/images/Assets/logo-header-optimized.webp'
    ]
    
    preloadImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.type = 'image/webp'
      document.head.appendChild(link)
    })
    
    // Prefetch critical pages
    const prefetchPages = ['/services', '/locations', '/contact', '/quote']
    prefetchPages.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = href
      document.head.appendChild(link)
    })
  }, [])

  return null
}