import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import QuoteBar from "./components/QuoteBar"
import ToolBarPicker from "./components/Toolbar/ToolbarPicker"



function App() {
  return (
    <div className="w-full outline-2 outline">
      <Navbar title="Dev Station" />
      <ToolBarPicker></ToolBarPicker>
      <QuoteBar />
      <Footer/>
    </div>
  )
}

export default App
