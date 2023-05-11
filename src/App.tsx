import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import QuoteBar from "./components/Tools/QuoteBar"
import ToolBarPicker from "./components/Toolbar/ToolbarPicker"
import Alert from "./components/Generic/Alert"

function App() {
  return (
    <div className="outline-2 outline bg-background">
      <Navbar title="Dev Station" />
      <ToolBarPicker />
      <QuoteBar />
      <Alert />
      <Footer/>
    </div>
  )
}

export default App
