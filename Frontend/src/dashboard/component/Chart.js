import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Required for Chart.js integration

const Chart = () => {
  // Example data for latest orders
  const orders = [
    { date: "2025-01-20", count: 20 },
    { date: "2025-01-21", count: 35 },
    { date: "2025-01-22", count: 50 },
    { date: "2025-01-23", count: 40 },
    { date: "2025-01-24", count: 60 },
    { date: "2025-01-25", count: 30 },
    { date: "2025-01-26", count: 45 },
  ];

  // Process orders data for the chart
  const orderDates = orders.map((order) => order.date);
  const orderCounts = orders.map((order) => order.count);

  const reviewsData = {
    labels: orderDates, // x-axis labels (dates)
    datasets: [
      {
        label: "Orders", // Chart label
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
          text: "Number of Orders",
          color: "#333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Dates",
          color: "#333",
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
    backgroundColor: "#f9f9f9",
  };

  const chartStyle = {
    width: "100%",
    maxWidth: "800px",
    height: "400px", // Set an initial height
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Admin Dashboard</h2>
      <div style={chartStyle}>
        <Bar data={reviewsData} options={option} />
      </div>
    </div>
  );
};

export default Chart;













// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import "chart.js/auto"; // Required for Chart.js integration

// const Chart = () => {
//   // Example order status data
//   const orderData = {
//     pending: 25,
//     delivered: 60,
//     cancelled: 10,
//     returned: 5,
//   };

//   const data = {
//     labels: ["Pending", "Delivered", "Cancelled", "Returned"], // Labels for chart segments
//     datasets: [
//       {
//         data: Object.values(orderData), // Values for each status
//         backgroundColor: [
//           "rgba(255, 205, 86, 0.8)", // Pending
//           "rgba(75, 192, 192, 0.8)", // Delivered
//           "rgba(255, 99, 132, 0.8)", // Cancelled
//           "rgba(201, 203, 207, 0.8)", // Returned
//         ],
//         borderColor: [
//           "rgba(255, 205, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(255, 99, 132, 1)",
//           "rgba(201, 203, 207, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: true,
//         position: "bottom", // Position of the legend
//       },
//     },
//   };

//   return (
//     <div
//       style={{
//         width: "40%", // 40% width
//         margin: "0 auto",
//         backgroundColor: "#fff",
//         padding: "20px",
//         borderRadius: "10px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Order Status Overview
//       </h3>
//       <div style={{ height: "300px" }}>
//         <Doughnut data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default Chart;






// import React from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";

// const Chart = () => {
//   // Example latest orders data
//   const orders = [
//     { date: "2025-01-18", count: 15 },
//     { date: "2025-01-19", count: 20 },
//     { date: "2025-01-20", count: 25 },
//     { date: "2025-01-21", count: 30 },
//     { date: "2025-01-22", count: 50 },
//     { date: "2025-01-22", count: 50 },
//     { date: "2025-01-22", count: 50 },
//     { date: "2025-01-22", count: 50 },

//   ];

//   const data = {
//     labels: orders.map((order) => order.date), // X-axis: Dates
//     datasets: [
//       {
//         label: "Orders",
//         data: orders.map((order) => order.count), // Y-axis: Order Counts
//         fill: false,
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         tension: 0.4, // Smooth line
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: "top",
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Date",
//         },
//       },
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Number of Orders",
//         },
//       },
//     },
//   };

//   return (
//     <div
//       style={{
//         width: "80%",
//         margin: "0 auto",
//         backgroundColor: "#fff",
//         padding: "20px",
//         borderRadius: "10px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Latest Orders Trend
//       </h3>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default Chart;













// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// const NewChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext("2d");

//     // Data for individual product sales for each month
//     const productASales = [1000, 1500, 1800, 2000, 2200, 2500, 2700, 3000, 3200, 3500, 3800, 4200];
//     const productBSales = [800, 1100, 1400, 1600, 1800, 2100, 2500, 2800, 3100, 3300, 3600, 4000];

//     // Calculate the total sales for each month by adding sales of Product A and Product B
//     const totalSales = productASales.map((sales, index) => sales + productBSales[index]);

//     // Data for the chart
//     const data = {
//       labels: [
//         "January", "February", "March", "April", "May", 
//         "June", "July", "August", "September", "October", 
//         "November", "December"
//       ],
//       datasets: [
//         {
//           label: "Total Sales",
//           data: totalSales,
//           backgroundColor: "rgba(75, 192, 192, 0.6)", // Color for bars
//           borderColor: "rgba(75, 192, 192, 1)", // Border color for bars
//           borderWidth: 1,
//         },
//       ],
//     };

//     // Configuration for the chart
//     const config = {
//       type: "bar", // Bar chart
//       data,
//       options: {
//         responsive: true, // Make the chart responsive
//         plugins: {
//           legend: {
//             display: true,
//             position: "top",
//             labels: {
//               font: {
//                 size: 14,
//                 weight: "bold",
//               },
//             },
//           },
//         },
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: "Months",
//               color: "#666",
//               font: {
//                 size: 14,
//                 weight: "bold",
//               },
//             },
//           },
//           y: {
//             title: {
//               display: true,
//               text: "Sales (in USD)",
//               color: "#666",
//               font: {
//                 size: 14,
//                 weight: "bold",
//               },
//             },
//             beginAtZero: true,
//           },
//         },
//       },
//     };

//     // Create the chart instance
//     const myChart = new Chart(ctx, config);

//     // Cleanup on component unmount
//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   return (
//     <div className="chart-contain">
//       <h2>Overall Monthly Sales</h2>
//       <canvas ref={chartRef} />
//     </div>
//   );
// };

// export default NewChart;



