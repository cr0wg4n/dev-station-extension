import { useEffect, useState } from "react"
import BlockInput from "../../Generic/BlockInput"
import { copyToClipboard, generateLoremIpsum, random } from "../../../core/utils"
import { FaClipboard, FaDice } from "react-icons/fa"
import './custom.css'
import useAlertStore from "../../../store/alert"

const LoremIpsumGenerator: React.FC = () => {
  const [minSentenceParagraph, setMinSentenceParagraph] = useState(4)
  const [maxSentenceParagraph, setMaxSentenceParagraph] = useState(8)
  const [paragraphs, setParagraphs] = useState(1)
  const [lorem, setLorem] = useState('')
  const { toogle: toogleAlert }= useAlertStore(state => state)

  const generateLorem = () => {
    return generateLoremIpsum({
      format: 'html',
      count: paragraphs,
      paragraphLowerBound: minSentenceParagraph,
      paragraphUpperBound: maxSentenceParagraph
    })
  }

  const doCopyToClipboard = () => {
    const regexPattern = /(<p>.+<\/p>)+/ig
    const match = lorem.match(regexPattern)
    if(match){
      copyToClipboard(
        match.map(i=>i.replaceAll(/<\/?p>/g,''))
          .join('\n\n')
          .trim()
      )
    } else {
      copyToClipboard('')
    }
  }

  const handleCopy = () => {
    doCopyToClipboard()
    toogleAlert('success', 'Copied to clipboard!')
  }

  const handleRandom = () => {
    const min = random(8, 1)
    const max = random(16, min)
    setParagraphs(random(10,1))
    setMinSentenceParagraph(min)
    setMaxSentenceParagraph(max)
    toogleAlert('success', 'Copied to clipboard!')
  }

  useEffect(()=>{
    doCopyToClipboard()
  }, [lorem])

  useEffect(()=>{
    setLorem(generateLorem())
  }, [paragraphs, minSentenceParagraph, maxSentenceParagraph])

  return <div className="text-xs">
    <BlockInput name="Min sentences per paragraph">
      <input type="range" min="1" max={maxSentenceParagraph} value={minSentenceParagraph} className="range range-xs" step={1} onChange={(e)=>{
        setMinSentenceParagraph(Number(e.target.value))
      }}/>
      <span className="w-10 text-center text-xs">{minSentenceParagraph}</span>
    </BlockInput>

    <BlockInput name="Max sentences per paragraph">
      <input type="range" min={minSentenceParagraph} max={80} value={maxSentenceParagraph} className="range range-xs" step={1} onChange={(e)=>{
        setMaxSentenceParagraph(Number(e.target.value))
      }}/>
      <span className="w-10 text-center text-xs">{maxSentenceParagraph}</span>
    </BlockInput>

    <div className="flex flex-row gap-3 items-center justify-between w-full mt-1">
      <div className="flex flex-row items-center">
        <div className="text-xs mr-2">
          Paragraphs
        </div>
        <input 
          type="number"
          className="input input-bordered input-xs w-16"
          min={0}
          max={100}
          value={String(paragraphs)} 
          onChange={(e)=>{
            const newValue = Number(
              e.target.value
                .replace('.', '')
                .replace(',','')
            )
            if(newValue >= 0 && newValue <= 100) {
              setParagraphs(newValue)
            }
          }}
        />
      </div>
      <button className="btn btn-xs" onClick={() => handleRandom()}>
        <FaDice className="mr-1"/>
        Random & Copy
      </button>
      <button className="btn btn-xs mr-1" onClick={handleCopy}>
        <FaClipboard className='mr-1' />
        Copy
      </button>
    </div>

    <div 
      className="lorem-ipsum px-1 bg-slate-200 mt-3" 
      dangerouslySetInnerHTML={{ __html: lorem }} 
    />
  </div>
}

export default LoremIpsumGenerator
