import Link from "next/link";
import styles from "./homepage.module.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return(
  <div>
    <Navbar/>
    <Footer/>
  </div>
    );
}
