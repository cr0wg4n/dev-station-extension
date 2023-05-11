import { ReactElement } from "react"

interface BlockInputProps {
  name: string,
  children?: ReactElement[] | ReactElement
} 

const BlockInput: React.FC<BlockInputProps> = ({ 
  name,
  children
}: BlockInputProps) => {
  return <div className="flex flex-col text-xs py-1">
    <div className="capitalize select-none">
      {name}
    </div>
    {
      children &&
      <div className="flex flex-row items-center">
        {children}
      </div>
    }
  </div>
}

export default BlockInput