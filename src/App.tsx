import Alert from './components/Generic/Alert'
import Badge from './components/Generic/Badge'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import QuoteBar from './components/Tools/QuoteBar'
import ToolBarPicker from './components/Toolbar/ToolbarPicker'
import { getMetadata } from './config'

const { creator, homeURL, version, devMode } = getMetadata()

function App() {
  return (
    <div className="outline-2 outline bg-background relative">
      {devMode && (
        <div className="absolute top-2 right-1">
          <Badge>
            DEV Mode
          </Badge>
        </div>
      )}
      <Navbar title="Dev Station" />
      <ToolBarPicker />
      <QuoteBar />
      <Alert />
      <Footer creator={creator} url={homeURL} version={version} />
    </div>
  )
}

export default App
