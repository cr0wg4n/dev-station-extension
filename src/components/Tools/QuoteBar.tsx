import { useQuotes } from "../../api/quotes"

const QuoteBar: React.FC = () => {
  const { content, author } = useQuotes()

  return <div className="p-2 outline-1 outline-black text-justify">
    <div className="text-xs">
      { content }
    </div>
    <div className="text-right text-xs italic">
      { author }
    </div>
  </div>
}

export default QuoteBar
