import { Tool } from './types';
import { create } from "zustand";

export interface ToolbarState {
  activeToolName: string
  tools: Tool[]
  activeTool: (name: string) => void
  deactiveAll: () => void
}

const useToolbarStore = create<ToolbarState>((set) => ({
  activeToolName: '',
  tools: [
    {
      title: 'Damian damian',
      active: false,
      icon: '',
      description: ''
    },
    {
      title: 'La verdad es que tengo que sonar',
      active: false,
      icon: '',
      description: ''
    },
    {
      title: 'Sonido refrescantte',
      active: false,
      icon: '',
      description: ''
    },
    {
      title: 'Con el cambio de la moneda',
      active: false,
      icon: '',
      description: ''
    },
  ],
  deactiveAll: () => {
    set((state)=>{
      const tools = [...state.tools]
      tools.forEach(i=>{
        i.active = false
      })
      return {...state, tools, activeToolName: ''}
    })
  },
  activeTool: (name: string) => {
    set((state)=>{
      const tools = [...state.tools]
      state.deactiveAll()

      const tool = tools.find(i => i.title === name)
      if(tool) tool.active = true

      return {...state, tools,  activeToolName: name}
    })
  },
}))


export default useToolbarStore