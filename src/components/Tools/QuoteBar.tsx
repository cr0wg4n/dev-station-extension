import { useQuotes } from '@/api/quotes'

const QuoteBar: React.FC = () => {
  const {
    quote: { content, author },
    loaded,
  } = useQuotes()

  return (
    <div>
      {loaded
        ? (
            <div className="p-2 text-neutral-400 text-center text-xs bg-neutral-800">
              <span className="text-neutral-400/50">"</span>
              {content}
              <span className="text-neutral-400/50">"</span>
              <div className="mt-1 italic text-orange-300 text-xxs">
                —
                {' '}
                {author}
              </div>
            </div>
          )
        : (
            <div className="h-14 w-full flex justify-center items-center">
              Loading quote ...
            </div>
          )}
    </div>
  )
}

export default QuoteBar
