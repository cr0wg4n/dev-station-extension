import Alert from './components/Generic/Alert'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import QuoteBar from './components/Tools/QuoteBar'
import ToolBarPicker from './components/Toolbar/ToolbarPicker'
import { getMetadata } from './config'

const { respositoryURL, version, devMode } = getMetadata()

function App() {
  return (
    <div className="outline-2 outline bg-background relative">
      <Navbar title="Dev Station" subtitle="The definitive Swiss Knife!" devMode={devMode} />
      <ToolBarPicker />
      <QuoteBar />
      <Alert />
      <Footer url={respositoryURL} version={version} />
    </div>
  )
}

export default App
