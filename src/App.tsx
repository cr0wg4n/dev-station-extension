import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import QuoteBar from "./components/QuoteBar"
import ToolBarPicker from "./components/Toolbar/ToolbarPicker"
import { getCurrentTab } from "./core/utils"



function App() {
  return (
    <div className="w-full outline-2 outline">
      <Navbar title="Dev Station" />
      <ToolBarPicker></ToolBarPicker>
      <QuoteBar />
      <button onClick={()=>{
        getCurrentTab()
      }}>my button</button>
      <Footer/>
    </div>
  )
}

export default App
