import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Video from "./components/Videos"

const App = () => {
  return (
    <div className="bg-[#145f7a]">
      <Header />
      <Hero />
      <Video/>
      <Footer/>
    </div>
  )
}

export default App