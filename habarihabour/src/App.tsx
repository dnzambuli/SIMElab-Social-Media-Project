import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/Navbar";
import CustomJumbo from "./components/Jumbotron";
import About from "./components/About";
import Features from "./components/KeyFeatures";
import ContactForm from "./components/Contact";
import Data from "./components/DataMetrics";
import { SearchProvider } from "./components/SearchContext";

function App() {
  return (
    <SearchProvider>
      <>
        <CustomJumbo />
        <CustomNavbar />
        <About />
        <Features />
        <Data />
        <ContactForm />
      </>
    </SearchProvider>
  );
}

export default App;
