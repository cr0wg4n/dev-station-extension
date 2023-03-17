import useToolbarStore from "../../store/toolbar"
import ToolbarPickerItem from "./ToolbarPickerItem"


const ToolBarPicker: React.FC = () => {
  const tools = useToolbarStore((state)=>state.tools)
  const activeToolName = useToolbarStore((state)=>state.activeToolName)
  const activeTool = useToolbarStore((state)=>state.activeTool)

  const handleClick = (title: string) => {
    activeTool(title)
    title === activeToolName && activeTool('')
  }

  return <div>
    {
      tools.map(({title, active, icon, description}) => <ToolbarPickerItem
        key={title}
        icon={icon}
        title={title}
        active={active}
        description={description}
        onClick={handleClick}
      />)
    }
  </div>
}

export default ToolBarPicker