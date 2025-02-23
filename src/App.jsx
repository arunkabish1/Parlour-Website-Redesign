import Header from "./components/Header"
import Intro from "./components/Intro"
import Hero from './components/Hero.jsx';
import { RevealLinks } from "./components/RevealLinks.jsx";
import Modal from './components/Modal.jsx'
import Videos from './components/Testimonial.jsx'
import AudioPlayer from "./components/Audio.jsx";

const App = () => {
  return (
    <div className="">
    <Header />
    <Hero />
    <Intro />
    <Videos />
    <RevealLinks/>
    <Modal />
    <AudioPlayer />

    
    </div>
  )
}

export default App