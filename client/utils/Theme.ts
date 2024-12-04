export function applyTheme(theme: string | null) {
    if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle(
            'dark',
            theme === 'dark' ||
            (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
        localStorage.setItem('theme', theme || 'light');
    }
}

export function loadTheme() {
    const savedTheme: string | null = localStorage.getItem('theme');
    applyTheme(savedTheme);
}