import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Special from "./components/Special";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Book from "./components/Book";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Special/>
      <Services/>
      <Testimonials/>
      <Gallery/>
      <Book/>
    </div>
  );
}

export default App;
