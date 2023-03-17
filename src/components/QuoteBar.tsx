import { useQuotes } from "../api/quotes"

const QuoteBar: React.FC = () => {
  const quote = useQuotes()
  return <div className="p-1 outline-1 outline-black">
    <div className="text-xs">
      <strong>Dev Quote:</strong> {quote.content}
    </div>
    <div className="text-right text-xs">
      {quote.author}
    </div>
  </div>
}

export default QuoteBar
