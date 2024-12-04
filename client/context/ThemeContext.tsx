'use client'
import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { applyTheme, loadTheme } from '@/utils/Theme';

type Theme = 'dark' | 'light' | null

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContextDefaultValues: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => null
}

const ThemeContext = createContext<ThemeContextType>(ThemeContextDefaultValues);

export function ThemeProvider({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        setTheme(savedTheme as Theme || 'light');
        loadTheme();
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        console.log(newTheme)
        applyTheme(newTheme);
    };

    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}

