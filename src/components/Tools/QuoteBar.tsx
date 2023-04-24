import { useQuotes } from "../../api/quotes"

const QuoteBar: React.FC = () => {
  const { content, author } = useQuotes()

  return <div className="p-1 outline-1 outline-black text-justify">
    <div className="text-xs">
      <strong>Dev Quote:</strong> { content }
    </div>
    <div className="text-right text-xs">
      { author }
    </div>
  </div>
}

export default QuoteBar