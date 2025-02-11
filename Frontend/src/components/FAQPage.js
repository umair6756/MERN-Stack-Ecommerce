
import React, { useState, useRef } from "react";
import "./FAQPage.css"
import { HeroSection } from "./Buttons";

const FAQPage = () => {
  const faqs = [
    {
      id: 1,
      title: "company Policies",
      heading: "company Policies",
      question: "You Can Learn About Company Policies Gide, Some Rules, and Useful Info",
      answer: "Company policies guide is useful information for clients. You can learn about company rules regarding payment methods, shipping, support, etc. If you have questions you can always study this guide to find necessary answers for you, or use a contact form.",
    },
    {
      id: 2,
      title: "payment options",
      heading: "payment options",
      question: "Do You Want To Know More About Payment Options? Here Is All You Need to Know",
      answer: "Here is some useful information about payment options. You can use your PayPal account to make a purchase. You need to know the email address to make a payment. You can also use your credit card to make a purchase. You can make a payment anywhere you want. ",
    },
    {
      id: 3,
      title: "terms & conditions",
      heading: "terms & conditions",
      question: "The Terms of this Agreement Concerns Everyone Who Has Access to the Website",
      answer: "Everyone who has access to the website need to be aware of these terms. You need to maintain your rights and obligations. Some guidelines facilitate the use of this wonderful website. Learning these guidelines can have some benefits.",
    },
    {
      id: 4,
      title: "delivery job",
      heading: "delivery job",
      question: "Learn More About the Delivery Job We Provide. This Can Be Useful Information",
      answer: "Delivery is an important part of our daily routine. The key to success is the right timing. We pay attention to the speed, but what is most important, we care about the quality of our job. We can assure you that your order will be delivered in time.",
    },
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRefs = useRef([]);

  const handleClick = (id) => {
    setActiveFAQ(id);
    setTimeout(() => setActiveFAQ(null), 5000); // Arrow disappears after 5 seconds
    const target = faqRefs.current[id];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
    
    <div className="faq-container">
      {/* FAQ Titles Section */}
      <div className="faq-sidebar">
        <h2>FAQs</h2>
        <p>Successful brands get into the mind slowly. A blurb in a magazine. A mention in a newspaper. A comment from a friend. A display in a retail</p>
        <ul>
          {faqs.map((faq) => (
            <li key={faq.id} onClick={() => handleClick(faq.id)}>
              {faq.title}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Details Section */}
      <div className="faq-details">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="faq-item"
            ref={(el) => (faqRefs.current[faq.id] = el)}
          >
            <h4>{faq.heading}</h4>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            {activeFAQ === faq.id && <span className="arrow-icon">→</span>}
            <div className="faq-divider"></div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQPage;
