import Footer from './components/Footer/Footer'
import Alert from './components/Generic/Alert'
import Navbar from './components/Navbar/Navbar'
import ToolBarPicker from './components/Toolbar/ToolbarPicker'
import QuoteBar from './components/Tools/QuoteBar'

function App() {
  return (
    <div className="outline-2 outline bg-background">
      <Navbar title="Dev Station" />
      <ToolBarPicker />
      <QuoteBar />
      <Alert />
      <Footer />
    </div>
  )
}

export default App
