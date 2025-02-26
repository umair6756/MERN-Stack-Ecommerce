


import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import html2pdf from "html2pdf.js";


const Invoice = () => {
  

  const { invoiceNumber } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
      fetch(`http://localhost:5000/order/${invoiceNumber}`) // ✅ Fetch order by invoice
          .then((res) => res.json())
          .then((data) => setOrder(data))
          .catch((error) => console.error("Error fetching order:", error));
  }, [invoiceNumber]);

  if (!order) return <h2>Loading...</h2>;

  // Download PDF function
  // const downloadPDF = async () => {
  //   const element = document.getElementById("invoice");
  //   if (element) {
  //     const canvas = await html2canvas(element);
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 size
  //     pdf.save("invoice.pdf");
  //   } else {
  //     console.error("Element with id 'invoice' not found.");
  //   }
  // };




  // const downloadPDF = () => {
  //   const element = document.getElementById("invoice");
  //   if (element) {
  //     html2pdf().from(element).save(); // Automatically handles the generation and download
  //   } else {
  //     console.error("Element with id 'invoice' not found.");
  //   }
  // };
  


  // Print invoice function
  const printInvoice = () => {
    const originalContents = document.body.innerHTML;
    const printContents = document.getElementById("invoice").innerHTML;
    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    } else {
      console.error("Element with id 'invoice' not found.");
    }
  };

  return (
    <div className="invoice-wrapper" id="print-area">
      <div className="invoice" id="invoice"> {/* Added id="invoice" here */}
        <div className="invoice-container">
          <div className="invoice-head">
            <div className="invoice-head-top">
              <div className="invoice-head-top-left text-start">
                <img src="images/logo.png" alt="Logo" />
              </div>
              <div className="invoice-head-top-right text-end">
                <h3>Invoice</h3>
              </div>
            </div>
            <div className="hr" />
            <div className="invoice-head-middle">
              <div className="invoice-head-middle-left text-start">
                <p>
                  <span className="text-bold">Date</span>: 05/12/2020
                </p>
              </div>
              <div className="invoice-head-middle-right text-end">
                <p>
                  <span className="text-bold">{order.invoiceNumber}</span>
                </p>
              </div>
            </div>
            <div className="hr" />
            <div className="invoice-head-bottom">
              <div className="invoice-head-bottom-left">
                <ul>
                  <li className="text-bold">Invoiced To:</li>
                  <li>{order.customer.name}</li>
                  <li>{order.customer.address}</li>
                  <li>{order.customer.email}</li>
                  <li>{order.customer.phone}</li>
                  <li>{order.customer.city}</li>

                </ul>
              </div>
              <div className="invoice-head-bottom-right">
                <ul className="text-end">
                  <li className="text-bold">Pay To:</li>
                  <li>Koice Inc.</li>
                  <li>2705 N. Enterprise</li>
                  <li>Orange, CA 89438</li>
                  <li>contact@koiceinc.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="overflow-view">
            <div className="invoice-body">
              <table>
                <thead>
                  <tr>
                    <td className="text-bold">Service</td>
                    <td className="text-bold">Description</td>
                    <td className="text-bold">Rate</td>
                    <td className="text-bold">QTY</td>
                    <td className="text-bold">Amount</td>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((prod, index) => (
                  <tr key={index}>
                    <td>{prod.productName}</td>
                    <td>Creating a website design</td>
                    <td>{prod.productPrice}</td>
                    <td>{prod.quantity}</td>
                    <td className="text-end">{prod.productPrice * prod.quantity}</td>
                  </tr>
                  ))}
                 
                </tbody>
              </table>
              <div className="invoice-body-bottom">
                <div className="invoice-body-info-item border-bottom">
                  <div className="info-item-td text-end text-bold">Sub Total:</div>
                  <div className="info-item-td text-end">{order.totalPrice}</div>
                </div>
                <div className="invoice-body-info-item border-bottom">
                  <div className="info-item-td text-end text-bold">Tax:</div>
                  <div className="info-item-td text-end">O</div>
                </div>
                <div className="invoice-body-info-item">
                  <div className="info-item-td text-end text-bold">Total:</div>
                  <div className="info-item-td text-end">{order.totalPrice}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="invoice-foot text-center">
            <p>
              <span className="text-bold text-center">NOTE:&nbsp;</span>This is
              computer generated receipt and does not require physical signature.
            </p>
            <div className="invoice-btns">
              <button
                type="button"
                className="invoice-btn"
                onClick={printInvoice} // Updated the onClick handler
              >
                <span>
                  <i className="fa-solid fa-print" />
                </span>
                <span>Print</span>
              </button>
              {/* <button
                type="button"
                className="invoice-btn"
                onClick={downloadPDF} // Updated the onClick handler
                disabled={!order}
              >
                <span>
                  <i className="fa-solid fa-download" />
                </span>
                <span>Download</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;


