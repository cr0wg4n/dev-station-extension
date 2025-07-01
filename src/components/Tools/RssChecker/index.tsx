import { FaClipboard, FaSearch } from 'react-icons/fa'
import { checkRss, copyToClipboard } from '@/core/utils'
import { useEffect, useState } from 'react'

import type { RssItem } from '@/core/types'
import { Tools } from '@/core/tools'
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
  const { toogle: toogleAlert } = useAlertStore(state => state)

  const [lastFeed, setLastFeed] = useChromeStorageLocal<RssItem>(
    toolName,
    INITIAL_STATE(),
  )

  const handleCopyAll = () => {
    toogleAlert('success', 'Copied all to clipboard!')
    let text = ''
    feed.rssSources.forEach(({ url }) => {
      text += `${url}\n`
    })
    copyToClipboard(text.trim())
  }

  const handleClick = () => {
    setLoading(true)
    checkRss()
      .then((rssFeed) => {
        setFeed(INITIAL_STATE())
        if (rssFeed) {
          setLastFeed(rssFeed)

          if (rssFeed.rssSources.length <= 0) {
            setNothing(true)
          }
          else {
            setFeed(rssFeed)
          }
        }
        else {
          setNothing(true)
        }
      })
      .finally(() => {
        setLoading(false)
      })
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
          onClick={handleClick}
        >
          {!loading && <FaSearch className="mr-1" size={10} />}
          Scan
        </button>
        {
          feed?.rssSources.length > 0 && !loading
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
                      <div className="text-xs pb-1 text-ellipsis whitespace-nowrap overflow-hidden">
                        <strong>Latest scanned:</strong>
                        {' '}
                        { lastFeed.url }
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
