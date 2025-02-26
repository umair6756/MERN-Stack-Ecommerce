import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faBell,
  faBlog,
  faBuilding,
  faEye,
  faGift,
  faLightbulb,
  faMessage,
  faMoon,
  faSearch,
  faShieldHeart,
  faShoppingBag,
  faShoppingCart,
  faStore,
  faSun,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto"; // Required for Chart.js integration

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import UserReviews from "./UserReviews";
import { adminContext } from "./adminContext";

ChartJS.register(...registerables);

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);
   
  const {toggleTheme} = useContext(adminContext)


  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // chart

  const ProductsCatagory = {
    labels: ["Clothes", "Watches", "Electronics", "bags", "Glasses"],
    datasets: [
      {
        data: [30, 25, 20, 25, 10],
        backgroundColor: [
          "#3a4ed5",
          "#38d39f",
          "#ff6b6b",
          "#feca57",
          "#54a0ff",
        ],
      },
    ],
  };

  // Example order status data
  const orderData = {
    pending: 25,
    delivered: 60,
    cancelled: 10,
    returned: 5,
  };

  const data = {
    labels: ["Pending", "Delivered", "Cancelled", "Returned"], // Labels for chart segments
    datasets: [
      {
        data: Object.values(orderData), // Values for each status
        backgroundColor: [
          "rgba(255, 205, 86, 0.8)", // Pending
          "rgba(75, 192, 192, 0.8)", // Delivered
          "rgba(255, 99, 132, 0.8)", // Cancelled
          "rgba(201, 203, 207, 0.8)", // Returned
        ],
        borderColor: [
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom", // Position of the legend
      },
    },
  };

  //  ===========  Monthly Sales chart     ===============

  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const productASales = [
      1000, 1500, 1800, 2000, 2200, 2500, 2700, 3000, 3200, 3500, 3800, 1200,
    ];
    const productBSales = [
      800, 1100, 1400, 1600, 1800, 2100, 2500, 2800, 3100, 3300, 3600, 1000,
    ];

    const totalSales = productASales.map(
      (sales, index) => sales + productBSales[index]
    );

    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Total Sales",
          data: totalSales,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        },
      ],
    };

    const config = {
      type: "line",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
              color: "#666",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "Sales (in USD)",
              color: "#666",
              font: {
                size: 14,
                weight: "bold",
              },
            },
            beginAtZero: true,
          },
        },
      },
    };

    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  //   ==========   User Reviews Chart    =====================

  // Example data for latest orders
  const orders = [
    { month: "January", count: 20 },
    { month: "Feb", count: 50 },
    { month: "Mar", count: 40 },
    { month: "Apr", count: 60 },
    { month: "May", count: 30 },
    { month: "June", count: 45 },
    { month: "July", count: 35 },
    { month: "Aug", count: 55 },
    { month: "Sep", count: 45 },
    { month: "Oct", count: 15 },
    { month: "Nov", count: 25 },
    { month: "Dec", count: 22 },
  ];

  // Process orders data for the chart
  const orderDates = orders.map((order) => order.month);
  const orderCounts = orders.map((order) => order.count);

  const reviewsData = {
    labels: orderDates, // x-axis labels (dates)
    datasets: [
      {
        label: "Reviews", // Chart label
        data: orderCounts, // y-axis data (counts)
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const option = {
    responsive: true,
    maintainAspectRatio: false, // Ensures proper resizing
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Reviews",
          color: "var(--text-color)",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
          color: "var(--text-color)",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };

  // Inline styles for the chart container
  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "var(--background-color)",
  };

  const chartStyle = {
    width: "100%",
    maxWidth: "800px",
    height: "400px", // Set an initial height
    margin: "0 auto",
    backgroundColor: "var(--background-color)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  // user profile

  const [isOpen, setIsOpen] = useState(false); // To toggle the popup visibility
  const [isEditing, setIsEditing] = useState(false); // To toggle between view/edit mode
  const [userInfo, setUserInfo] = useState({
    name: "Admin Name",
    role: "Administrator",
    email: "admin@example.com",
    phone: "123-456-7890",
    image: "/default-profile.png", // Default profile image
  });
  const [tempImage, setTempImage] = useState(null); // Temp image preview for file upload

  // Load saved image from localStorage
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setUserInfo((prevInfo) => ({ ...prevInfo, image: savedImage }));
    }
  }, []);

  // Toggle Popup
  const togglePopup = () => setIsOpen(!isOpen);

  // Handle Image Upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTempImage(e.target.result); // Preview the new image
      };
      reader.readAsDataURL(file);
    }
  };

  // Save Image to localStorage
  const saveProfileImage = () => {
    if (tempImage) {
      setUserInfo((prevInfo) => ({ ...prevInfo, image: tempImage }));
      localStorage.setItem("profileImage", tempImage); // Save image to localStorage
      setTempImage(null); // Clear the temp image
    }
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <div className="home-container">
      <header>
        <div className="logosec">
          <div className="logo">Hafiz Store</div>

          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleSidebar}
            className="fs-3"
          />
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search" />
          <div className="searchbtn">
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="message">
          <div className="" />
          <div className="notification-container">
            <Link to="/message"><span className="bell-icon">🔔</span></Link>
            <span className="notification-badge">5</span>
            <div className="message-list">
              <div className="user-message-box">
                <div className="message-content">
                  <div className="message-title">New message from John</div>
                  <div className="message-time">2 min ago</div>
                </div>
              </div>
              <div className="user-message-box">
                <div className="message-content">
                  <div className="message-title">Your order has shipped</div>
                  <div className="message-time">10 min ago</div>
                </div>
              </div>
              
             

            </div>
          </div>

          {/* user profile   */}
          <div>
            <div>
              {/* Small Profile Picture */}
              <div className="profile-container p-5">
                <img
                  src={tempImage || userInfo.image}
                  alt="Admin Profile"
                  className="profile-picture"
                  onClick={togglePopup}
                />
              </div>

              {/* Overlay */}
              {isOpen && <div className="overlay" onClick={togglePopup}></div>}

              {/* Popup */}
              {isOpen && (
                <div className="popup">
                  {/* Header Section */}
                  <div className="popup-header">
                    <div className="image-upload">
                      <label htmlFor="imageUpload">
                        <img
                          src={tempImage || userInfo.image}
                          alt="Admin"
                          className="admin-image"
                          title="Click to change image"
                        />
                      </label>
                      <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="admin-info">
                      <h5>{userInfo.name}</h5>
                      <p>{userInfo.role}</p>
                    </div>
                  </div>

                  {/* Toggle between viewing and editing */}
                  {isEditing ? (
                    <div className="popup-body edit-mode">
                      <h6>Edit Profile</h6>
                      <form>
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            value={userInfo.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phone"
                            value={userInfo.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <button
                          type="button"
                          className="save-btn"
                          onClick={() => setIsEditing(false)}
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="popup-body">
                      <ul className="popup-links">
                        <li>
                          <button onClick={() => setIsEditing(true)}>
                            <i className="fas fa-user-cog"></i> Profile Settings
                          </button>
                        </li>
                        <li>
                          <button>
                            <i className="fas fa-sign-out-alt"></i> Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="main-container">
        <div className={`navcontainer ${showSidebar ? "navclose" : ""}`}>
          <nav className="nav">
            <div className="nav-upper-options">
              <div className="nav-option option1">
                <FontAwesomeIcon icon={faTableColumns} />
                <h3> Dashboard</h3>
              </div>

              <Link to="/productpage">
                <div className="option2 nav-option">
                  <FontAwesomeIcon icon={faGift} />
                  <h3> Products</h3>
                </div>
              </Link>

              <Link to="/blogpage">
                <div className="nav-option option3">
                  <FontAwesomeIcon icon={faBlogger} />
                  <h3> Blogs</h3>
                </div>
              </Link>

              <Link to="/orderpage">
                <div className="nav-option option4">
                  <FontAwesomeIcon icon={faStore} />
                  <h3> Orders</h3>
                </div>
              </Link>
              <Link to="/message">
                <div className="nav-option option5">
                  <FontAwesomeIcon icon={faMessage} />
                  <h3>Messages</h3>
                </div>
              </Link>
              <Link to="/reviews">
                <div className="nav-option option6">
                  <FontAwesomeIcon icon={faShieldHeart} />
                  <h3> Reviews</h3>
                </div>
              </Link>

              <Link to="/cupons">
                <div className="nav-option logout">
                  <FontAwesomeIcon icon={faBuilding} />
                  <h3>Cupons</h3>
                </div>
              </Link>

              <div className="nav-option logout">
                <FontAwesomeIcon icon={faBuilding} />
                <h3>Others</h3>
              </div>

              <div className="toggle-switch" style={{ paddingBottom: "5rem" }}>
                <label className=" ">
                  <input
                    class="toggle-checkbox"
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
                    <div class="toggle-button"></div>
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
            </div>
          </nav>
        </div>
        <div className="main">
          <div className="searchbar2">
            <input type="text" name="" id="" placeholder="Search" />
            <div className="searchbtn">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>

          {/* =================   chart    =========== */}

          <div className="chart-contain">
            <h2>Total Monthly Sales (Line Chart)</h2>
            <canvas ref={chartRef} />
          </div>

          <div className="chart-container">
            <div className="chart">
              <h2>Product Catagory</h2>
              <Pie data={ProductsCatagory} />
            </div>

            <div
              //   style={{
              //      // 40% width
              //     margin: "0 auto",
              //     backgroundColor: "var(--background-color)",
              //     padding: "30px",
              //     borderRadius: "10px",
              //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              //   }}

              className="chart"
            >
              <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
                Order Status Overview
              </h3>
              <div style={{ height: "400px" }}>
                <Doughnut data={data} options={options} />
              </div>
            </div>
          </div>

          <div className="report-container">
            <div className="report-header">
              <h1 className="recent-Articles">Recent Orders</h1>
              <button className="view">View All</button>
            </div>
            <div className="report-body">
              <div className="report-topic-heading">
                <h3 className="t-op">Order id</h3>
                <h3 className="t-op">Customer</h3>
                <h3 className="t-op">Total Price</h3>
                <h3 className="t-op">Status</h3>
              </div>
              <div className="items">
                <div className="item1">
                  <h3 className="t-op-nextlvl">#7645</h3>
                  <h3 className="t-op-nextlvl">Usman</h3>
                  <h3 className="t-op-nextlvl">210</h3>
                  <h3 className="t-op-nextlvl label-tag">Delivered</h3>
                </div>
                <div className="item1">
                  <h3 className="t-op-nextlvl">Article 72</h3>
                  <h3 className="t-op-nextlvl">1.5k</h3>
                  <h3 className="t-op-nextlvl">360</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>
                <div className="item1">
                  <h3 className="t-op-nextlvl">Article 71</h3>
                  <h3 className="t-op-nextlvl">1.1k</h3>
                  <h3 className="t-op-nextlvl">150</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>
                <div className="item1">
                  <h3 className="t-op-nextlvl">Article 70</h3>
                  <h3 className="t-op-nextlvl">1.2k</h3>
                  <h3 className="t-op-nextlvl">420</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>
                <div className="item1">
                  <h3 className="t-op-nextlvl">Article 69</h3>
                  <h3 className="t-op-nextlvl">2.6k</h3>
                  <h3 className="t-op-nextlvl">190</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>
                <div className="item1">
                  <h3 className="t-op-nextlvl">Article 68</h3>
                  <h3 className="t-op-nextlvl">1.9k</h3>
                  <h3 className="t-op-nextlvl">390</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>
                <div className="item1">
                  <h3 className="t-op-nextlvl">Article 67</h3>
                  <h3 className="t-op-nextlvl">1.2k</h3>
                  <h3 className="t-op-nextlvl">580</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>
                <div className="item1">
                  <h3 className="t-op-nextlvl">Article 66</h3>
                  <h3 className="t-op-nextlvl">3.6k</h3>
                  <h3 className="t-op-nextlvl">160</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>
                <div className="item1">
                  <h3 className="t-op-nextlvl">Article 65</h3>
                  <h3 className="t-op-nextlvl">1.3k</h3>
                  <h3 className="t-op-nextlvl">220</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>
              </div>
            </div>
          </div>
          <div style={containerStyle}>
            <h2 style={{ marginBottom: "20px", color: "var(--text-color)" }}>
              User Reviews
            </h2>
            <div style={chartStyle}>
              <Bar data={reviewsData} options={option} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
