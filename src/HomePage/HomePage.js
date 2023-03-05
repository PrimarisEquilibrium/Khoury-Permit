import Hero from "./components/Hero";
import Navbar from "../components/Navbar"
import Info from "./components/Info"
import Gallery from "./components/Gallery"
import Footer from "../components/Footer"

function App() {
  return (
    <div>
      <Navbar active="home" />
      <Hero />

      <div className="margin-container">
        <Info />
        <Gallery />
      </div>
      <Footer />
    </div>
  )
}

export default App;
