"use client";
import { useContext } from 'react';
import React from 'react'
import { ThemeContext } from '@/context/ThemeContext';

const ThemeProvider = ({children}) => {
    const {theme} = useContext(ThemeContext)
    return <div className={theme}>{children}</div>
};

export default ThemeProvider;