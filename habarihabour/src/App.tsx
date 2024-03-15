import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./assets/components/Navbar";
import CustomJumbo from "./assets/components/Jumbotron";
import About from "./assets/components/About";
import Features from "./assets/components/KeyFeatures";
import ContactForm from "./assets/components/Contact";

function App() {
  return (
    <>
      <CustomJumbo />
      <CustomNavbar />
      <About />
      <Features />
      <ContactForm />
    </>
  );
}

export default App;
