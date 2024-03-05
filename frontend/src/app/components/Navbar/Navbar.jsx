"use client";
import React, { useState } from 'react';
import styles from "./navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () =>{
    const [open, setOpen] = useState(false);
    return(
        <div className = {styles.container}>
            <div className={styles.Logo}>
                <Image src="/SIME-lab-logo.png" alt='SIME Lab' width={80} height={42}/>
            </div>

            <div className={styles.home}>
                <Link href='/'>Home</Link>
            </div>

            <div className={styles.links}>
                <Link href='/' className={styles.link}>Latest</Link>
                <Link href='/' className={styles.link}>Entertainment</Link>
                <Link href='/' className={styles.link}>Contact</Link>
                <ThemeToggle/>

            </div>
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.lines}></div>
                <div className={styles.lines}></div>
                <div className={styles.lines}></div>

            </div>
            {open &&(
                <div className={styles.responsiveMenu}>
                    <Link href='/'>Homepage</Link>
                    <Link href='/' >Latest</Link>
                    <Link href='/' >Entertainment</Link>
                    <Link href='/' >Contact</Link>
                </div>
            )}

        </div>
    );
}

export default Navbar;
