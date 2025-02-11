import React, { useContext } from "react";
import "./Products.css";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import image1 from '../banners-image/hero/blog-hero.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faComment, faUser } from "@fortawesome/free-solid-svg-icons";

import { HeroSection } from "./Buttons";
import { useParams } from "react-router-dom";
import blogData from '../data/blogs-data.json';


const BlogDetail = () => {

  const { id } = useParams();
  const blog = blogData.find(b => b.id === parseInt(id));


  return (

    <div>
      <HeroSection headingLabel="Blog Detail" heroBackground="BlogDetail-image" />
      <div className="blog-container">


        {/* Blog Content */}
        <div className="blog-content ">
          {/* Blog Image */}
          <img src={blog.image} alt="Blog" className="blogDetail-image" />

          <h1>{blog.content1Title}</h1>

          <div className="authorInform d-flex flex-row gap-4 my-4">
            <p><FontAwesomeIcon icon={faUser} style={{ color: '#C19A6B' }} /> <span>{blog.author}</span> </p>
            <p><FontAwesomeIcon icon={faCalendar} className="autohorsIcon" /> <span>{blog.date}</span> </p>
            <p><FontAwesomeIcon icon={faComment} className="autohorsIcon" /> <span>12-2-2023</span> </p>


          </div>

          {/* Paragraphs */}
          <p>{blog.blogContent1}</p>
          <p>{blog.blogContent2}</p>

          {/* Quote Section */}
          <div className="quote-section">
            <blockquote>
              {blog.quote}
            </blockquote>
            <span>{blog.quoteAuthor}</span>
          </div>

          {/* Small Paragraph */}
          <p>{blog.blogContent3}</p>

          {/* Two Images in Row */}
          <div className="image-row my-4">
            <img src={blog.image} alt="Image 1" />
            <img src={blog.image} alt="Image 2" className="image2" />
          </div>

          {/* Heading and Paragraph */}
          <h3>{blog.content5Title}</h3>
          <p>{blog.blogContent5}</p>

          {/* Image with Heading and Paragraph */}
          <img src={blog.image} alt="Additional Content" className="additional-image" />
          <h3>{blog.content6Title}</h3>
          <p>{blog.blogContent6}</p>

          {/* Important Points */}
          <ul className="important-points">
            <li><span>✔</span> {blog.points1}.</li>
            <li><span>✔</span> {blog.points2}</li>
            <li><span>✔</span> {blog.points3}</li>
          </ul>

          {/* Final Paragraph */}
          <p>{blog.blogContent4}</p>

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
