import { useState } from "react"
import ToolbarPickerItem from "./ToolbarPickerItem"


const tools = [
  'Demo',
  'Demo demo demo de',
  'Demo demo de',
  'Demo demo ',
]

const ToolBarPicker: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState('')
  return <div>
    {
      tools.map((i) => <ToolbarPickerItem
        key={i}
        title={i}
        show={i===selectedTool}
        onClick={(title: string)=>{
          setSelectedTool(i)
          title === selectedTool && setSelectedTool('')
        }}
      />)
    }
  </div>
}

export default ToolBarPicker