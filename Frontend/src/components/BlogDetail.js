import React, { useContext, useState, useEffect } from "react";
import "./Products.css";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import image1 from '../banners-image/hero/blog-hero.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faComment, faUser } from "@fortawesome/free-solid-svg-icons";

import { HeroSection } from "./Buttons";
import { useParams } from "react-router-dom";
import moment from "moment";


const BlogDetail = () => {


   const [blogs, setblogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  

  const { id } = useParams();
  



  useEffect(() => {
      // Fetch product data from the backend
      fetch(`http://localhost:5000/blog/${id}`) // Change the URL based on your API endpoint
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error fetching blogs');
          }
          return response.json();
        })
        .then((data) => {
          setblogs(data);  // Set the fetched products
          setLoading(false);   // Stop loading
        })
        .catch((err) => {
          setError(err.message);  // Handle error
          setLoading(false);
        });
    }, [id]); // Empty dependency array ensures this runs only once (on component mount)
  
    // If loading, display a loading message
    if (loading) {
      return <div>Loading products...</div>;
    }
  
    // If error occurs, display an error message
    if (error) {
      return <div>Error: {error}</div>;
    }

  return (

    <div>
      <HeroSection headingLabel="Blog Detail" heroBackground="BlogDetail-image" />
      <div className="blog-container">


        {/* Blog Content */}
        <div className="blog-content ">
          {/* Blog Image */}
          <img src={blogs.heroImage} alt="Blog" className="blogDetail-image" />

          <h1>{blogs.title}</h1>

          <div className="authorInform d-flex flex-row gap-4 my-4">
            <p><FontAwesomeIcon icon={faUser} style={{ color: '#C19A6B' }} /> <span>{blogs.author}</span> </p>
            <p><FontAwesomeIcon icon={faCalendar} className="autohorsIcon" /> <span>{moment(blogs.date).format("DD MMMM YYYY")}</span> </p>
            <p><FontAwesomeIcon icon={faComment} className="autohorsIcon" /> <span>12-2-2023</span> </p>


          </div>

          <div>
          <div dangerouslySetInnerHTML={{ __html: blogs.content }} />
          </div>

          {/* Paragraphs */}
          {/* <p>{blog.blogContent1}</p>
          <p>{blog.blogContent2}</p>


          {/* Border Bottom */}
          <div className="bottom-border"></div>

          {/* Share Section */}
          <h3 className="share-heading">Share Post</h3>
          <div className="blogDetail-social-icons">

            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>

            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>





          </div>
        </div>



      </div>



      <div className="authorInformation mx-auto d-flex justify-content-center align-items-center flex-column p-3" style={{ width: "80%", background: "white", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <img src={image1} className="authorImage"></img>
        <h3 className="my-3 fw-bolder opacity-75">hafiz umair</h3>
        <p className="text-center" style={{ maxWidth: "95%" }}>lLorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.</p>
        <div className="author-socialIcons d-flex flex-row gap-2">
          <a href="#" className=" fs-5"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className=" fs-5"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className=" fs-5"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className=" fs-5"><FontAwesomeIcon icon={faLinkedinIn}/></a>

        </div>
      </div>


    </div>
  );
};

export default BlogDetail;
