import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Navbar/Header";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import FeaturedWork from "./pages/FeaturedWork";
import Footer from "./components/Footer";
import { ContactUs } from "./pages/ContactUs";
import Vision from "./pages/Vision";

export default function App() {
  return (
   
    
    <Router>
        <div className=" bg-black bg-cover">
        <Header />
        <Hero />
        <Services />
        <FeaturedWork />
        <Vision />
        <ContactUs />
        <Footer />
      </div>
      </Router>
  );
}
