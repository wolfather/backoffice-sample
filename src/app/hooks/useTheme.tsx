import { useEffect, useState } from "react";

const themes = ['light','dark'] as const;
type ThemeApp = (typeof themes)[number];
export function useTheme() {

    const [theme, setTheme] = useState<ThemeApp>(() => {
        const themeStored = localStorage.getItem('theme');

        return (
            themeStored && 
            themes.includes(themeStored as ThemeApp) ? 
            themeStored : 
            'light'
        ) as ThemeApp;
    });

    useEffect(() => {
        if (themes.includes(theme)) {
            localStorage.setItem('theme', theme);
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [theme]);

    return {theme, setTheme};
}
