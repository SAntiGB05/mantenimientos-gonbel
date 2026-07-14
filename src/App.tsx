import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
