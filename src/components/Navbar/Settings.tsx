import React from 'react'
import { FaCog } from 'react-icons/fa'

const Settings: React.FC = () => {
  return (
    <div className="cursor-pointer p-1 active:scale-105">
      <FaCog size={18} />
    </div>
  )
}

export default Settings
