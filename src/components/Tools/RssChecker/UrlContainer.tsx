
import { useState } from 'react'
import { FaClipboard, FaShareSquare } from 'react-icons/fa'
import { copyToClipboard } from '../../../core/utils'
import useAlertStore from '../../../store/alert'

interface UrlContainerProps {
  url: string
  name?: string
}

const UrlContainer: React.FC<UrlContainerProps> = ({
  name,
  url
}: UrlContainerProps) => {
  const { toogle: toogleAlert } = useAlertStore(state => state)

  const handleClipboard = (text: string)=>{
    toogleAlert('success', 'Copied to clipboard!')
    copyToClipboard(text)
  }

  return <div className="text-left w-full mb-1 bg-slate-200 p-2 text-xs">
    <div className="text-ellipsis whitespace-nowrap overflow-hidden font-bold">
      {name}
    </div>
    <div className="flex flex-row justify-between items-center">
      <div className="text-ellipsis whitespace-nowrap overflow-hidden">
        {url}
      </div>
      <div className="flex flex-row gap-2">
        <button
          className="btn btn-square btn-xs" 
          onClick={() => handleClipboard(url)}
        >
          <FaClipboard className='hover:text-warning' />
        </button>
        <button className="btn btn-square btn-xs">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaShareSquare className='hover:text-warning' />
          </a>
        </button>
      </div> 
    </div>
  </div>
}

export default UrlContainer
