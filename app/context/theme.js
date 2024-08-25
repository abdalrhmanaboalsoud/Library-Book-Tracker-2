"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeWrapper({ children }) {
    const [isDarktheme, setIsDarkTheme] = useState(true);

    function initialThemeHandler() {
        const storedTheme = localStorage.getItem("isDarkTheme");
        if (storedTheme === null) {
            localStorage.setItem("isDarkTheme", 'true');
            document.body.classList.add("dark-mode");
            setIsDarkTheme(true);
        } else {
            const isDarktheme = JSON.parse(storedTheme);
            if (isDarktheme) {
                document.body.classList.add("dark-mode");
            } else {
                document.body.classList.remove("dark-mode");
            }
            setIsDarkTheme(isDarktheme);
        }
    }

    function toggleThemeHandler() {
        const newTheme = !isDarktheme;
        setIsDarkTheme(newTheme);
        document.body.classList.toggle("dark-mode", newTheme);
        localStorage.setItem("isDarkTheme", JSON.stringify(newTheme));
    }

    const globalState = {
        isDarktheme, // Use the actual state here
        toggleThemeHandler,
    };

    useEffect(() => initialThemeHandler(), []);

    return (
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    );
}
