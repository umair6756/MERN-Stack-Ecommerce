import React, { createContext, useState } from 'react';

export const adminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [isGridView, setIsGridView] = useState(true);
    const [theme, setTheme] = useState("light");

    // Toggle filter menu visibility
    const toggleFilterMenu = () => {
        setIsFilterActive(prevState => !prevState);
    };

    // Switch to grid view
    const switchToGridView = () => {
        setIsGridView(true);
    };

    // Switch to list view
    const switchToListView = () => {
        setIsGridView(false);
    };

    // Toggle light/dark mode
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Apply the theme to the 'html' element
    document.documentElement.setAttribute('data-theme', theme);

    return (
        <adminContext.Provider value={{ isGridView, isFilterActive, toggleFilterMenu, switchToGridView, switchToListView, toggleTheme }}>
            {children}
        </adminContext.Provider>
    );
};
