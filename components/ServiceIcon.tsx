import Image from 'next/image'
import { serviceIcons } from '@/lib/images'

interface Props {
  slug: string
  size?: number
  className?: string
}

export default function ServiceIcon({ slug, size = 56, className = '' }: Props) {
  const icon = serviceIcons[slug]
  if (!icon) return null
  return (
    <Image
      src={icon.src}
      alt={icon.alt}
      width={size}
      height={size}
      className={`rounded-lg ${className}`}
    />
  )
}
