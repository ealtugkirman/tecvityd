import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/Navbar/Header";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import FeaturedWork from "./pages/FeaturedWork";

export default function App() {
  return (
   
    
    <Router>
        <div className=" bg-black bg-cover">
        <Header />
        <Hero />
        <Services />
        <FeaturedWork />
      <div className="h-[4000px]"></div>
      </div>
      </Router>
  );
}
