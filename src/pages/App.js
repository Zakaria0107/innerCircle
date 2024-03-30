import Footer from "../compenents/Footer";
import Condidates from "../compenents/Home/Condidates";
import Contact from "../compenents/Home/Contact";
import FAQ from "../compenents/Home/FAQ";
import ForCompanies from "../compenents/Home/ForCompanies";
import Hero from "../compenents/Home/Hero";
import HiringExperts from "../compenents/Home/HiringExperts";
import Story from "../compenents/Home/Story";
import Team from "../compenents/Home/Team";
import Navbar from "../compenents/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Story/>
      <HiringExperts/>
      <ForCompanies/>
      <Condidates/>
      <Team/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
