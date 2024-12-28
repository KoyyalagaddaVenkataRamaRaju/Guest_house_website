import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
