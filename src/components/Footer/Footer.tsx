import React from "react"
import { METADATA } from "../../config/config"


const {creator, homeURL, version} = METADATA

const Footer: React.FC = () => {
  return <div className="p-2 text-right text-xs bg-neutral text-white">
    Made with ❤️ by <a 
      href={homeURL}
      target="_blank" 
      className="underline"
      title="Get in touch"
    >
      { creator }
    </a> (v{version})
  </div>
}

export default Footer