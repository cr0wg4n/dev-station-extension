import { FaClipboard, FaSearch } from 'react-icons/fa'
import { checkRss, copyToClipboard } from '@/core/utils'
import { useEffect, useState } from 'react'

import type { RssItem } from '@/core/types'
import { Tools } from '@/core/enums'
import UrlContainer from './UrlContainer'
import useAlertStore from '@/store/alert'
import { useChromeStorageLocal } from 'use-chrome-storage'

function INITIAL_STATE() {
  return {
    url: '',
    rssSources: [],
  }
}

export const toolName = Tools.RSS_CHECKER

const RssChecker: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [nothing, setNothing] = useState(false)
  const [feed, setFeed] = useState<RssItem>(INITIAL_STATE())
  const { toggle: toggleAlert } = useAlertStore(state => state)

  const [lastFeed, setLastFeed] = useChromeStorageLocal<RssItem>(
    toolName,
    INITIAL_STATE(),
  )

  const handleCopyAll = () => {
    toggleAlert('success', 'Copied all to clipboard!')
    let text = ''
    feed.rssSources.forEach(({ url }) => {
      text += `${url}\n`
    })
    copyToClipboard(text.trim())
  }

  const handleScan = async () => {
    setLoading(true)
    try {
      const rssFeed = await checkRss()
      setFeed(INITIAL_STATE())
      if (rssFeed && rssFeed.rssSources.length > 0) {
        setFeed(rssFeed)
        setLastFeed(rssFeed)
      }
      else {
        setNothing(true)
      }
    }
    catch (error) {
      toggleAlert('error', 'The target is not valid')
      setNothing(true)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (lastFeed.rssSources.length) {
      setFeed(lastFeed)
    }
  }, [lastFeed])

  return (
    <div className="w-full text-center">
      <div className="flex items-center flex-row gap-2 justify-center">
        <button
          className={`btn btn-xs ${loading ? 'loading' : ''}`}
          onClick={handleScan}
        >
          {!loading && <FaSearch className="mr-1" size={10} />}
          Scan
        </button>
        {
          feed?.rssSources.length > 0 && !loading && !nothing
          && (
            <button
              className="btn btn-xs"
              onClick={handleCopyAll}
            >
              <FaClipboard className="mr-1" size={10} />
              {' '}
              Copy All
            </button>
          )
        }
      </div>
      <div>
        {
          loading
            ? (
                <div className="py-2 text-sm">
                  searching ...
                </div>
              )
            : nothing
              ? (
                  <div className="py-2 text-sm">
                    Nothing was found
                  </div>
                )
              : feed?.rssSources.length > 0
                && (
                  <>
                    <div className="pt-2">
                      <div className="text-xs pb-1 truncate">
                        <strong>Latest successfully scanned:</strong>
                        {' '}
                        <span title={lastFeed.url}>
                          { lastFeed.url }
                        </span>
                      </div>
                      {feed?.rssSources.map(({ name, url }) => (
                        <UrlContainer
                          key={url}
                          name={name}
                          url={url}
                        />
                      ),
                      )}
                    </div>
                  </>
                )
        }
      </div>
    </div>
  )
}

export default RssChecker
