'use client';
import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { applyTheme } from '@/utils/Theme';

type Theme = 'dark' | 'light' | null;

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContextDefaultValues: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => null,
};

const ThemeContext = createContext<ThemeContextType>(ThemeContextDefaultValues);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as Theme;
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
            setTheme(initialTheme);
            applyTheme(initialTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
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
