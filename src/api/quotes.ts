import { useEffect } from 'react';
import { useState } from 'react';
import quotes from '../data/quotes.json'

export interface Quote {
  content: string
  author: string
}

export async function getQuotes(): Promise<Quote> {
  const quotesLength = quotes.length
  return Promise.resolve(quotes[Math.floor(Math.random() * quotesLength)])
}

export function useQuotes(): { quote: Quote, loaded: boolean, failed: boolean } {
  const [quote, setQuote] = useState<Quote>({
    author: '',
    content: ''
  })
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    const fetch = async () => {
      const quotes =  await getQuotes()
      setLoaded(true)
      return quotes
    }

    fetch().then((response: Quote)=>{
      setQuote(response)
    }).catch(()=>{
      setFailed(true)
    })
  },[])

  return {
    quote,
    loaded,
    failed
  }
}