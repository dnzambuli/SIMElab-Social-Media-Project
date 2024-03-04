"use client";
import Image from "next/image";
import styles from "./themeToggle.module.css"
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () =>{
    const {toggle,theme} = useContext(ThemeContext);
    return(
        <div className={styles.container} onClick={toggle} style={
            theme === "dark" ?{backgroundColor:"#ecfaf9"} : {backgroundColor:"#02162e"}
        }>
            <Image src="/moon.png" alt="" width={14} height={14}/>
            <div 
             className={styles.ball} 
             style={
                theme === "dark" ?{left: 1, backgroundColor:"#02162e"} : {right: 1, backgroundColor:"#ecfaf9"}
             }
            ></div>
            <Image src="/sun.png" alt = "" width={14} height={14}/>
        </div>
    );
}

export default ThemeToggle;