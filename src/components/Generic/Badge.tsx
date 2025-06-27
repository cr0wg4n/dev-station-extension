import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

const Badge: React.FC<BadgeProps> = ({ children }: BadgeProps) => {
  return (
    <div className="rounded-xl bg-primary text-white px-2 py-1">
      {children}
    </div>
  )
}

export default Badge
