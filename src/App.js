import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/Navbar/Header";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import FeaturedWork from "./pages/FeaturedWork";
import Footer from "./pages/Footer";

export default function App() {
  return (
   
    
    <Router>
        <div className=" bg-black bg-cover">
        <Header />
        <Hero />
        <Services />
        <FeaturedWork />
        <Footer />
      </div>
      </Router>
  );
}
