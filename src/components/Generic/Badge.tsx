import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

const Badge: React.FC<BadgeProps> = ({ children }: BadgeProps) => {
  return (
    <div className="badge badge-primary badge-md truncate px-2 py-1">
      {children}
    </div>
  )
}

export default Badge
