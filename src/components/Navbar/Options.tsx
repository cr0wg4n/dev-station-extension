import React from "react"
import { FaCog } from 'react-icons/fa'

const Options: React.FC = ()=>{
  return <div className="cursor-pointer hover:animate-spin p-1 active:scale-125">
    <FaCog size={18}/>
  </div>
}

export default Options