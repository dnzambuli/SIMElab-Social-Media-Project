import "./App.css";
import Banner from "./components/Banner";
import Topics from "./components/Topics";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
// import Test from "./components/Test";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Trending />
      <Topics />
      {/* <Test /> */}
    </>
  );
}

export default App;
