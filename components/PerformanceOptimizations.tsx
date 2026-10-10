'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizations() {
  useEffect(() => {
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