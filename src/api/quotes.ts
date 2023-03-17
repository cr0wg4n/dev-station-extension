import { useEffect } from 'react';
import { useState } from 'react';
import { requester } from "./requester"
import APIS from "../config/config"

export interface Quote {
  content: string
  author: string
}

export async function getQuotes(): Promise<Quote> {
  return await requester<Quote>(APIS.randomQuotes)
}

export function useQuotes(): Quote {
  const [quote, setQuote] = useState<Quote>({
    author: '',
    content: ''
  })

  useEffect(() => {
    const fetch = async () => {
      return await getQuotes()
    }

    fetch().then((response: Quote)=>{
      setQuote(response)
    })
  },[])

  return quote
}