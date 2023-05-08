import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import QuoteBar from "./components/Tools/QuoteBar"
import ToolBarPicker from "./components/Toolbar/ToolbarPicker"

function App() {
  return (
    <div className="w-96 outline-2 outline bg-background">
      <Navbar title="Dev Station" />
      <ToolBarPicker />
      <QuoteBar />
      <Footer/>
    </div>
  )
}

export default App
