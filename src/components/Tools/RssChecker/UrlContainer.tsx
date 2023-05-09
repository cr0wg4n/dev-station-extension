
import { useState } from 'react'
import { FaClipboard, FaShareSquare } from 'react-icons/fa'
import { copyToClipboard } from '../../../core/utils'

interface UrlContainerProps {
  url: string
  name?: string
}

const UrlContainer: React.FC<UrlContainerProps> = ({
  name,
  url
}: UrlContainerProps) => {
  const [copied, setCopied] = useState(false)

  const handleClipboard = (text: string)=>{
    setCopied(true)
    copyToClipboard(text)
    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }

  return <div className="text-left w-full mb-1 bg-slate-200 p-2 text-xs">
    <div className="text-ellipsis whitespace-nowrap overflow-hidden font-bold">
      {name}
    </div>
    <div className="flex flex-row justify-between items-center">
      <div className="text-ellipsis whitespace-nowrap overflow-hidden">
        {url}
      </div>
      {
        !copied ?
        <div className="flex flex-row gap-2">
          <button className="btn btn-square btn-xs" onClick={() => handleClipboard(url)}>
            <FaClipboard className='hover:text-warning' />
          </button>
          <button className="btn btn-square btn-xs">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <FaShareSquare className='hover:text-warning' />
            </a>
          </button>
        </div> :
        <div className='p-1 text-warning'>
          Copied!
        </div>
      }
    </div>
  </div>
}

export default UrlContainer
