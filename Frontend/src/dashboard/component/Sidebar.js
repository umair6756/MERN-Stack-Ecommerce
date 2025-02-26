


import React, { useState, useEffect, useContext } from 'react';
import './ViewProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLightbulb, faMoon, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { adminContext } from './adminContext';
const Sidebar = ({ label }) => {

  const {toggleTheme} = useContext(adminContext)
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
              <li><Link to="/admin">Home</Link></li>
              <li><Link to="/productpage">Products</Link></li>
              <li><Link to="/blogpage">Blogs</Link></li>
              <li><Link to="/orderpage">Orders</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/cupons">Cupons</Link></li>
              <li><Link to="/message">Messages</Link></li>

                            <div className="toggle-switch mx-5 px-3" style={{ paddingBottom: "5rem" }}>
                              <label className=" ">
                                <input
                                  class="toggle-checkbox "
                                  type="checkbox"
                                  onClick={toggleTheme}
                                ></input>
                                <div class="toggle-slot ">
                                  <div class="sun-icon-wrapper">
                                    <div
                                      class="iconify sun-icon"
                                      data-icon="feather-sun"
                                      data-inline="false"
                                    >
                                      <FontAwesomeIcon
                                        icon={faLightbulb}
                                        className="iconify sun-icon"
                                      />
                                    </div>
                                  </div>
                                  <div class="toggle-button mx-0 px-0"></div>
                                  <div class="moon-icon-wrapper">
                                    <div
                                      class="iconify moon-icon"
                                      data-icon="feather-moon"
                                      data-inline="false"
                                    >
                                      <FontAwesomeIcon
                                        icon={faMoon}
                                        className="iconify moon-icon"
                                      />{" "}
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>


            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
