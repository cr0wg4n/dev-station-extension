import { useQuotes } from "../../api/quotes"

const QuoteBar: React.FC = () => {
  const { quote: {content, author}, loaded } = useQuotes()

  return <div>
    {loaded ? 
    <div className="p-2 outline-1 outline-black text-justify">
      <div className="text-xs">
        { content }
      </div>
      <div className="text-right text-xs italic">
        { author }
      </div>
    </div> : 
    <div className="h-14 w-full flex justify-center items-center">
      Loading quote ...
    </div>}
  </div>
}

export default QuoteBar
