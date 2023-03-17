import { ReactElement, useEffect, useState } from "react"
import { FaChevronDown, FaChevronUp, FaFirefox } from "react-icons/fa"


interface ToolbarPickerItemProps {
  title: string;
  show: boolean;
  description?: string;
  children?: ReactElement;
  onClick?: (title: string) => void;
}

const ToolbarPickerItem: React.FC<ToolbarPickerItemProps> = ({
  title,
  show=false,
  description,
  children,
  onClick,
}: ToolbarPickerItemProps) => {
  const [_show, setShow] = useState(show)

  useEffect(()=>{
    setShow(show)
  },[show])

  return <div
    onClick={()=>{
      if(onClick) onClick(title)
    }}
  >
    <div className="flex items-center bg-slate-300 hover:bg-slate-200 hover:cursor-pointer p-2 border-b-2">
      <div className="mr-4 rounded-full bg-slate-50 p-1 flex items-center justify-center">
        {
          !show ?
            <FaChevronDown size={12} />:
            <FaChevronUp size={12} />
        } 
      </div>
      <FaFirefox size={16} className="mr-2"/>
      <div className="text-sm select-none">
        { title }
      </div>
    </div>

    {
      show && 
      <div className="p-1 text-sm h-72">
        asdasdasdasdasd
        {children}
      </div>
    }
  </div>
}


export default ToolbarPickerItem