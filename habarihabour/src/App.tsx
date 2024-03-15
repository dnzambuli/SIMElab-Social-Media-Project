import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./assets/components/Navbar";
import CustomJumbo from "./assets/components/Jumbotron";
import About from "./assets/components/About";
import Features from "./assets/components/KeyFeatures";

function App() {
  return (
    <>
      <CustomJumbo />
      <CustomNavbar />
      <About />
      <Features />
    </>
  );
}

export default App;
