import React from 'react';
import styles from "./navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () =>{
    return(
        <div className = {styles.container}>
            <div className={styles.Logo}>
                <Image src="/SIME-lab-logo.png" alt='SIME Lab' width={80} height={42}/>
            </div>

            <div className={styles.home}>
                <Link href='/'>Home</Link>
            </div>

            <div className={styles.links}>
                <Link href='/'>Emerging Stories</Link>
                <Link href='/'>Entertainment</Link>
                <Link href='/'>Contact</Link>
                <ThemeToggle/>

            </div>

        </div>
    );
}

export default Navbar;
