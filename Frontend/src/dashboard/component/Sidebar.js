// import React, { useState } from 'react'
// import './ViewProducts.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faMoon, faPowerOff } from '@fortawesome/free-solid-svg-icons'
// const Sidebar = ({label}) => {

//     const [theme, setTheme] = useState("light")


//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
// };

//   // Apply the theme to the 'html' element
// document.documentElement.setAttribute('data-theme', theme);


//   return (
//     <div>
//   <div className="page">
//   <header tabIndex={0}><p className='fs-2 fw-bolder ' style={{marginTop:'.9rem'}}>Header</p></header>

//   <div id="nav-container">
//     <div className="bg" />

//     <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
//     <div className="button" tabIndex={0}>
      
//       <FontAwesomeIcon icon={faBars} className='fs-4'/>
   
//      </div>
//       <div><h3 className='fw-bolder'>{label}</h3></div>

//      <div style={{cursor:'pointer'}}>
//       <FontAwesomeIcon icon={faPowerOff} className='fs-4'/>
//       <button className="mode-switch" title="Switch Theme" onClick={toggleTheme}>
//         <FontAwesomeIcon icon={faMoon} className='fs-3' style={{transform:"rotate(-25deg)"}}/>
//       </button>


//      </div>
//     </div>
    

//     <div id="nav-content" tabIndex={0}>
//       <ul>
//         <li>
//           <a href="#0">Home</a>
//         </li>
//         <li>
//           <a href="#0">Services</a>
//         </li>
//         <li>
//           <a href="#0">Blog</a>
//         </li>
//         <li>
//           <a href="#0">About</a>
//         </li>
//         <li>
//           <a href="#0">Contact</a>
//         </li>
//         <li className="small">
//           <a href="#0">Facebook</a>
//           <a href="#0">Instagram</a>
//         </li>
//       </ul>
//     </div>
//   </div>

// </div>


//     </div>
//   )
// }

// export default Sidebar
















import React, { useState, useEffect } from 'react';
import './ViewProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ label }) => {

  return (
    <div>
      <div className="page">
        <header tabIndex={0}>
          <p className='fs-2 fw-bolder' style={{ marginTop: '.9rem' }}>Header</p>
        </header>

        <div id="nav-container">
          <div className="bg" />

          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div className="button" tabIndex={0}>
              <FontAwesomeIcon icon={faBars} className='fs-4' />
            </div>
            <div>
              <h3 className='fw-bolder'>{label}</h3>
            </div>

            <div style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faPowerOff} className='fs-4' />
      
            </div>
          </div>

          <div id="nav-content" tabIndex={0}>
            <ul>
              <li><a href="#0">Home</a></li>
              <li><a href="#0">Services</a></li>
              <li><a href="#0">Blog</a></li>
              <li><a href="#0">About</a></li>
              <li><a href="#0">Contact</a></li>
              <li className="small">
                <a href="#0">Facebook</a>
                <a href="#0">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
