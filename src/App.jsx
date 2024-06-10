import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Team from './components/Team';
import { banner } from './assets';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div style={{ backgroundImage: `url(${banner})` }}
          className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Services />
        <About />
        <Works />
        <Clients />
        <Testimonials />
        <Team />
        <div className='relative z-0'>
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
