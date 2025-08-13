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
    <div className="w-full p-2 text-white bg-neutral-900">
      <div className="flex items-center">
        <div className="flex items-center w-full">
          <img src={logo} alt="logo" className="max-h-7 mr-2" />
          <div className="flex flex-row items-center justify-between w-full">
            <div className="text-base font-medium">
              {title}
            </div>
            <div className="text-xs pt-[2px]">
              {subtitle}
            </div>
          </div>
          {devMode && (
            <div className="ml-2">
              <Badge>
                DEV Mode
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
