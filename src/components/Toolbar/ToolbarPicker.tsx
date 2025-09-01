import ToolbarPickerItem from './ToolbarPickerItem'
import { buildTool } from '@/core/toolBuilder'
import useToolbarStore from '@/store/toolbar'

const ToolBarPicker: React.FC = () => {
  const tools = useToolbarStore(state => state.tools)
  const activeTool = useToolbarStore(state => state.activeTool)
  const deactiveTool = useToolbarStore(state => state.deactiveTool)

  const handleClick = (title: string) => {
    const tool = tools.find(i => i.title === title)
    if (tool) {
      !tool.active ? activeTool(title) : deactiveTool(title)
    }
  }

  return (
    <div className="[&>*:not(:last-child)]:mb-0.5">
      {
        tools.map(({ id, title, active, description }) => {
          const tool = buildTool(id)
          return (
            <ToolbarPickerItem
              id={id}
              key={title}
              title={title}
              active={active}
              description={description}
              onClick={handleClick}
              icon={tool?.icon}
              children={tool?.rootComponent}
            />
          )
        })
      }
    </div>
  )
}

export default ToolBarPicker
