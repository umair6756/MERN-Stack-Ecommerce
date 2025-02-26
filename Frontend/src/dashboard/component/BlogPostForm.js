import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter, faAlignLeft, faAlignRight, faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
const BlogPostForm = () => {
  // const [blogData, setBlogData] = useState({
  //   title: "",
  //   author: "",
  //   date: "",
  //   description: "",
  //   content: "",
  //   heroImage: null, // To store the Hero Image file
  // });



  // Handle input changes




  const [blogs, setBlogs] = useState({
      title: "",
      author: "",
      date: "",
      description: "",
      content: "",
      heroImage: null,
    });



    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setBlogs({ ...blogs, [name]: value });
  
    };
    
  
  
  
  
    const [image, setImage] = useState(null);
 
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        setBlogs({ ...blogs, heroImage: file });
        const reader = new FileReader();
        
  
        reader.onload = (event) => {
          setImage(event.target.result); // Set the base64 image data to state
        };
  
        reader.readAsDataURL(file);
      } else {
        setBlogs({ ...blogs, heroImage: null });
        setImage(null); // Reset image if no file is selected
      }
    };
  
    

    console.log(blogs)


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('title', blogs.title);
    formData.append('author', blogs.author);
    formData.append('date', blogs.date);
    formData.append('description', blogs.description);
    formData.append('content', blogs.content);
    formData.append("heroImage", blogs.heroImage)
    
  
  
    fetch("http://localhost:5000/blog", {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Blog Added Successfully");
        } else {
          alert("Blog Added Successfully");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  
  





  // Handle content change in ReactQuill
  const handleContentChange = (value) => {
    setBlogs({ ...blogs, content: value });
  };

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Blog Data:", blogData);
  //   // Perform the logic to submit the data (e.g., API call)
  // };

  const [selectedImage, setSelectedImage] = useState(null);
  const [controlsVisible, setControlsVisible] = useState(false);

  




  useEffect(() => {
    const handleImageClick = (event) => {
      const clickedElement = event.target;
      if (clickedElement.tagName === "IMG") {
        setSelectedImage(clickedElement);
        setControlsVisible(true);
      } else {
        setSelectedImage(null);
        setControlsVisible(false);
      }
    };

    const editor = document.querySelector(".ql-editor");
    if (editor) {
      editor.addEventListener("click", handleImageClick);
    }

    return () => {
      if (editor) {
        editor.removeEventListener("click", handleImageClick);
      }
    };
  }, []);

  // Resize Image
  const resizeImage = (size, isWidth = true) => {
    if (selectedImage) {
      if (isWidth) {
        selectedImage.style.width = size;
        selectedImage.style.height = "auto"; // Maintain aspect ratio
      } else {
        selectedImage.style.height = size;
        selectedImage.style.width = "auto"; // Maintain aspect ratio
      }
    }
  };

  // Align Image
  const alignImage = (alignment) => {
    if (selectedImage) {
      selectedImage.style.display = "block";
      selectedImage.style.margin = alignment === "center" ? "0 auto" : "0";
      selectedImage.style.float =
        alignment === "left" || alignment === "right" ? alignment : "none";
    }
  };

  // Remove Image
  const removeImage = () => {
    if (selectedImage) {
      selectedImage.remove();
      setSelectedImage(null);
      setControlsVisible(false);
    }
  };




  // Define the toolbar with additional features
  const modules = {
    toolbar: [
      [{ header: [1, 2,3,4,5,6, false] }],
      [{ font: [] }],
      [{ size: ['small', 'medium', 'large', 'huge'] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "blockquote", "code-block", "formula"],
      [{ align: [] }],
      ["emoji", "table", "video", "audio"],  // Additional options like emojis, tables, etc.
      [{ color: [] }, { background: [] }], 
    ],
  };

  const formats = [
    "header", "font", "size", "bold", "italic", "underline", "strike", "list", "bullet", "link", "image", 
    "blockquote", "code-block", "formula", "align", "video", "audio","color","background","emoji", "table",
  ];

  return (
    <div className="advanced-blog-form-container py-5 ">
      <form onSubmit={handleSubmit} className="">
        <div className="d-flex flex-wrap">
    <div className="advanced-blog-form py-5">
      
        <h1>Create Blog Post</h1>

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={blogs.title}
          onChange={handleInputChange}
          placeholder="Enter Blog Title"
          required= "true"
        />

        <label>Author</label>
        <input
          type="text"
          name="author"
          value={blogs.author}
          onChange={handleInputChange}
          placeholder="Enter Author Name"
          required= "true"

        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={blogs.date}
          onChange={handleInputChange}
          required= "true"

        />

        <label>Description</label>
        <textarea
          name="description"
          value={blogs.description}
          onChange={handleInputChange}
          placeholder="Enter Blog Description"
          required= "true"

        ></textarea>



        <label>Blog Content</label>
        <div>
          <ReactQuill
            theme="snow"
            value={blogs.content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            placeholder="Write your content here..."
            required= "true"

          />
        </div>

        {controlsVisible && selectedImage && (
          <div className="image-controls">
    <button onClick={(e) => { e.preventDefault(); resizeImage("100%", true); }}>100%</button>
    <button onClick={(e) => { e.preventDefault(); resizeImage("75%", true); }}>75%</button>
    <button onClick={(e) => { e.preventDefault(); resizeImage("50%", true); }}>50%</button>
    <button onClick={(e) => { e.preventDefault(); resizeImage("25%", true); }}>25%</button>
    <button onClick={(e) => { e.preventDefault(); alignImage("left"); }}>
      <FontAwesomeIcon icon={faAlignLeft}/>
    </button>
    <button onClick={(e) => { e.preventDefault(); alignImage("center"); }}>
      <FontAwesomeIcon icon={faAlignCenter}/>
    </button>
    <button onClick={(e) => { e.preventDefault(); alignImage("right"); }}>
      <FontAwesomeIcon icon={faAlignRight}/>
    </button>
    <button onClick={(e) => { e.preventDefault(); removeImage(); }}>
      <FontAwesomeIcon icon={faTrash}/>
    </button>
          </div>
        )}

      
    </div>

    <div className="blog-heroImage" style={{paddingTop:'5rem'}}>
    <div>
      <label className="picture" htmlFor="picture__input" tabIndex={0}>
        <div className="picture__image">
          {image ? (
            <img src={image} alt="Uploaded Preview" className="picture__img" />
          ) : (
            <p>Hero Image</p>
          )}
        </div>
      </label>
      <input
        id="picture__input"
        name="heroImage"
        type="file"
        className="picture__input"
        accept="image/*"
        onChange={handleImageChange}
        required= "true"

      />
    </div>

    </div>
    </div>
    <button type="submit" className="btn-submit my-3">Save Blog</button>

    </form>
    </div>
  );
};

export default BlogPostForm;
