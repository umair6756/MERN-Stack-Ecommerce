import React, { createContext, useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import products from '../data/products-data.json'
import { useEffect } from 'react';

export const CartContext = createContext();
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [wishlest, setWishlest] = useState([])
    const [count, setCount] = useState(1);

    // const addToCart = (product) =>{
    //     setCart((prevCart) => [...prevCart, product]);
    //     toast.success("Product added successfully 🧡 ", {
    //       position: "top-right",
    //       autoClose: 3000,  
    //       theme: "colored",  
            
           
    //     });

    // }


    const [searchTerm, setSearchTerm] = useState("");








    const addToCart = (product) => {
      setCart((prevCart) => {
        const exists = prevCart.find((item) => item.id === product._id);
        toast.success("Product added successfully 🧡 ", {
          position: "top-right",
          autoClose: 3000,  
          theme: "light",  
            
           
        });
  
        if (exists) {
          return prevCart.map((item) =>
            item.id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    };


    const addToWish = (product) =>{
      setWishlest((prevWish) => [...prevWish, product]);
      toast.success("Product added successfully 🧡 ", {

          
         
      });

      
    }

    const removeFromCart = (index) => {
      setCart((prevCart) => {
        
        return prevCart.filter((item, position) => position !== index)}) 
      toast.error('Product Remove from Cart 🤬 ',{

      });
    }

    const removeFromWishlest = (index) => {
      setWishlest((prevWish) => {
        return prevWish.filter((item, prod) => prod !== index)})
      toast.error('Product Remove from Wishlest 🤬 ',{

      });
    }

    const calculateProductPrice = () => {
      return cart.reduce((total, product) => {
        const prodPrice = product.productSale
          ? product.productPrice - (product.productPrice * product.productSale) / 100
          : product.productPrice;
        
    
        return total + prodPrice * (product.quantity || 1);
      }, 0).toFixed(2); 
    }



    



    const increament = (index) => {
      setCart((prevCart) => {
        return prevCart.map((item, idx) => {
          if (idx === index) {
            return { ...item, quantity: (item.quantity || 1) + 1 }; // Default to 1 if no quantity
          }
          return item;
        });
      });
    };

    const decreament = (index) => {
      setCart((prevCart) => {
        return prevCart.map((item, idx) => {
          if (idx === index && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      });
    };
    
    

    // ============   scroll Animation ==========

    const useScrollAnimation = () => {
      useEffect(() => {
        const checkBoxes = () => {
          const triggerBottom = (window.innerHeight / 5) * 4;
    
          document.querySelectorAll('.animationBox').forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
    
            if (boxTop < triggerBottom) {
              box.classList.add('show');
            } else {
              box.classList.remove('show');
            }
          });
        };
    
        window.addEventListener('scroll', checkBoxes);
    
        // Call once on component mount
        checkBoxes();
    
        // Cleanup on component unmount
        return () => {
          window.removeEventListener('scroll', checkBoxes);
        };
      }, []);
    }

 


    const showSuccess = (message) => toast.success(message);
    const showError = (message) => toast.error(message);



    

  return (
    <CartContext.Provider value={{searchTerm,setSearchTerm,cart,setCart, wishlest,addToCart, removeFromCart,addToWish,removeFromWishlest, calculateProductPrice,increament,decreament,count,setCount,useScrollAnimation,showSuccess, showError}}>
        {children}
        
        <ToastContainer position="top-right" autoClose={2000} />
    </CartContext.Provider>
  );
};

