import Badge from '@/components/Generic/Badge'
import React from 'react'
import logo from '@/assets/icon.png'

export interface NavbarProps {
  title: string
  subtitle?: string
  devMode?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ title, subtitle, devMode = false }: NavbarProps) => {
  return (
    <div className="w-full p-2 pe-2.5 text-white bg-neutral-900 relative flex items-center justify-between whitespace-nowrap gap-2">
      <img src={logo} alt="logo" className="max-h-7" />
      <div className="flex-1 flex items-center justify-between gap-2 leading-none">
        <div className="text-base font-medium">
          {title}
        </div>
        <div className="text-[11px] text-nowrap font-light text-neutral-400">
          {subtitle}
        </div>
        {devMode && (
          <div>
            <Badge>
              DEV Mode
            </Badge>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
