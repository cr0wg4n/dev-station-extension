import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import QuoteBar from "./components/QuoteBar"

function App() {
  return (
    <div className="w-full">
      <Navbar title="Dev Station" />
      <QuoteBar />
      <Footer/>
    </div>
  )
}

export default App
