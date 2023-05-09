import { Tool } from './types';
import { create } from "zustand";
import { tools } from './tools'

export interface ToolbarState {
  activeToolName: string
  tools: Tool[]
  activeTool: (name: string) => void
  deactiveTool: (name: string) => void
  deactiveAll: () => void
}

const useToolbarStore = create<ToolbarState>((set) => ({
  activeToolName: '',
  tools,
  deactiveAll: () => {
    set((state)=>{
      const tools = [...state.tools]
      tools.forEach(i=>{
        i.active = false
      })
      return {...state, tools, activeToolName: ''}
    })
  },
  deactiveTool: (name: string) => {
    set((state)=>{
      const tools = [...state.tools]
      const tool = tools.find(i => i.title === name)
      if(tool) tool.active = false
      return {...state, tools,  activeToolName: name}
    })
  },
  activeTool: (name: string) => {
    set((state)=>{
      const tools = [...state.tools]
      // state.deactiveAll()
      const tool = tools.find(i => i.title === name)
      if(tool) tool.active = true
      return {...state, tools,  activeToolName: name}
    })
  },
}))

export default useToolbarStore