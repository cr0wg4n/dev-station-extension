import { ReactElement, useEffect, useState } from "react"
import { FaChevronDown, FaChevronUp, FaFirefox } from "react-icons/fa"
import { Tool } from "../../store/toolbar/types"


interface ToolbarPickerItemProps extends Tool {
  children?: ReactElement
  icon?: ReactElement
  onClick?: (title: string) => void
}

const ToolbarPickerItem: React.FC<ToolbarPickerItemProps> = ({
  title,
  active=false,
  description,
  children,
  icon,
  onClick,
}: ToolbarPickerItemProps) => {
  const [_show, setShow] = useState(active)

  useEffect(()=>{
    setShow(active)
  },[active])

  return <div>
    <div 
      className="flex items-center bg-warning hover:bg-warning hover:cursor-pointer p-2 border-b-2"
      onClick={()=>{
        if(onClick) onClick(title)
      }}
      title={description}
    >
      <div className="mr-4 rounded-full bg-slate-50 p-1 flex items-center justify-center">
        {
          !_show ?
            <FaChevronDown size={12} />:
            <FaChevronUp size={12} />
        } 
      </div>
      { icon }
      <div className="text-sm select-none text-white font-medium">
        { title }
      </div>
    </div>

    {
      _show && 
      <div className="text-sm max-h-64 p-1 overflow-auto bg-white">
        { children }
      </div>
    }
  </div>
}


export default ToolbarPickerItem