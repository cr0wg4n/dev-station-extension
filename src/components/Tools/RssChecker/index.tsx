import { useState } from "react"
import { checkRss } from "../../../core/utils"
import { RssItem, RssSource } from "../../../core/types"
import UrlContainer from "./UrlContainer"
import { FaClipboard } from "react-icons/fa"


const INITIAL_STATE = ()=>({
  url: '',
  rssSources: []
})

const RssChecker: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [nothing, setNothing] = useState(false)
  const [feed, setFeed] = useState<RssItem>(INITIAL_STATE())

  const handleCopyAll = () => {
    let text = ''
    feed.rssSources.forEach(({url})=>{
      text += url + '\n'
    })
    navigator.clipboard.writeText(text.trim())
  }

  const handleClick = () => {
    setLoading(true)
    checkRss()
      .then((rssFeed)=>{
        setFeed(INITIAL_STATE())
        if (rssFeed) {
          setFeed(rssFeed)
          rssFeed.rssSources.length <= 0 && setNothing(true)
        } else {
          setNothing(true)
        }
      })
      .finally(()=>{
        setLoading(false)
      })
  }

  return <div className="w-full text-center">
    <div className="flex items-center flex-row gap-2 justify-center">
      <button
        className={`btn btn-xs ${loading ? 'loading' : ''}`}
        onClick={handleClick}
      >
        {feed?.rssSources.length > 0 ? 'Re-Scan' : 'Scan'}
      </button>
      {
        feed?.rssSources.length > 0 && !loading && 
        <button 
          className="btn btn-xs" 
          onClick={handleCopyAll}
        >
          <FaClipboard className="mx-1" size={10}/> Copy All
        </button>
      }
    </div>
    <div>
      {
        loading ? 
        <div className="py-2 text-sm">
          searching ...
        </div> : nothing ? 
        <div className="py-2 text-sm">
          Nothing was found
        </div> :
        feed?.rssSources.length > 0 && <div className="pt-2">
          {feed?.rssSources.map(({name, url}) =>
            <UrlContainer 
              key={url} 
              name={name} 
              url={url} 
            />
          )}
        </div>
      }
    </div>
  </div>
}

export default RssChecker
