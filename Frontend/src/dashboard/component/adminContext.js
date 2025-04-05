import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const adminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [isGridView, setIsGridView] = useState(true);

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
    // const toggleTheme = () => {
    //     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    // };

    // // Apply the theme to the 'html' element
    // document.documentElement.setAttribute('data-theme', theme);

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "light";
      });
    
      const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        // Save the new theme in localStorage
        localStorage.setItem("theme", newTheme);
      };
    
      // Apply the theme to the 'html' element
      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
      }, [theme]);
    


      const showSuccess = (message) => toast.success(message);
      const showError = (message) => toast.error(message);
  

    return (
        <adminContext.Provider value={{ isGridView, isFilterActive, toggleFilterMenu, switchToGridView, switchToListView, toggleTheme, showSuccess, showError }}>
            {children}
      <ToastContainer position="top-right" autoClose={2000} />

        </adminContext.Provider>
    );
};
