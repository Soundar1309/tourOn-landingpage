import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../src/components/Header/Header"
import Hero from "../src/components/Hero/Hero";
import Footer from "../src/components/footer/Footer";
import Tours from "../src/components/tours/Tours";
import Testimonials from "../src/components/Testimonials/Testimonials";
import Contact from "../src/components/Conatct/Contact"



function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <ToastContainer
        position="bottom-center"
     />
     <Tours/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
