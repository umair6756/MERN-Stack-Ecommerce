// src/OurTeam.js
import React from "react";
import './AboutUs.css';  // Import the CSS for advanced styling
import image1 from '../banners-image/hero/contact-hero2.jpg'
const OurTeam = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: "John Doe", 
      role: "CEO", 
      image: image1, 
      socials: { facebook: "#", twitter: "#", linkedin: "#" }
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      role: "Developer", 
      image:  image1, 
      socials: { facebook: "#", twitter: "#", linkedin: "#" }
    },
    { 
      id: 3, 
      name: "Mark Lee", 
      role: "Designer", 
      image:  image1, 
      socials: { facebook: "#", twitter: "#", linkedin: "#" }
    },
    { 
      id: 4, 
      name: "Emily Johnson", 
      role: "Manager", 
      image:  image1, 
      socials: { facebook: "#", twitter: "#", linkedin: "#" }
    }
  ];

  return (


<>
<div className="container my-5">
  <h1 className="my-5 text-center fw-bolder" style={{color:"#C19A6B"}}> Meet Our Team </h1>
  <div className="my-5">
    <div className="ourTeams">
    {teamMembers.map(team => (
      <div className="our-team">
        
        <div key={team.id} className="team-image">
          <img src={team.image}/>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            urna diam, maximus ut ullamcorper quis, placerat id eros. Duis
            semper justo sed condimentum rutrum. Nunc tristique purus turpis.
            Maecenas vulputate.
          </p>
          <ul className="social">
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </li>
          </ul>
        </div>
        <div className="team-info">
          <h3 className="title">{team.name}</h3>
          <span className="post">{team.role}</span>
        </div>
      </div>
      ))}
    </div>
  </div>
</div>
</>
  );
};

export default OurTeam;
