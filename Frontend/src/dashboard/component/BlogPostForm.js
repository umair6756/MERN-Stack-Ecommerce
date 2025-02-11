import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter, faAlignLeft, faAlignRight, faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

const BlogPostForm = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    author: "",
    date: "",
    description: "",
    content: "",
    heroImage: null, // To store the Hero Image file
  });

  console.log(blogData)

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  // Handle hero image file change
  const handleHeroImageChange = (e) => {
    const file = e.target.files[0];
    setBlogData({ ...blogData, heroImage: file });
  };



  const [image, setImage] = useState(null);
  const pictureImageTxt = "Choose an image";

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result); // Set the base64 image data to state
      };

      reader.readAsDataURL(file);
    } else {
      setImage(null); // Reset image if no file is selected
    }
  };





  // Handle content change in ReactQuill
  const handleContentChange = (value) => {
    setBlogData({ ...blogData, content: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Data:", blogData);
    // Perform the logic to submit the data (e.g., API call)
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [controlsVisible, setControlsVisible] = useState(false);

  const handleImageClick = (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName === "IMG") {
      setSelectedImage(clickedElement); // Store the clicked image
      setControlsVisible(true); // Show image controls
    } else {
      setSelectedImage(null); // Deselect the image
      setControlsVisible(false); // Hide image controls
    }
  };

  const resizeImage = (size, isWidth = true) => {
    if (selectedImage) {
      if (isWidth) {
        selectedImage.style.width = size;
        selectedImage.style.height = size; // Ensure height matches the width for a square
      } else {
        selectedImage.style.height = size;
        selectedImage.style.width = size; // Ensure width matches the height for a square
      }
      selectedImage.style.objectFit = "cover"; // Ensure image fills the square without distortion
    }
  };

  const alignImage = (alignment) => {
    if (selectedImage) {
      selectedImage.style.display = "block";
      selectedImage.style.marginLeft = alignment === "center" ? "auto" : "0";
      selectedImage.style.marginRight = alignment === "center" ? "auto" : "0";
      selectedImage.style.float =
        alignment === "left" || alignment === "right" ? alignment : "none";
    }
  };

  const removeImage = () => {
    if (selectedImage) {
      selectedImage.remove(); // Remove the selected image
      setSelectedImage(null); // Clear the selected image
      setControlsVisible(false); // Hide image controls
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
      ["color", "background"],
    ],
  };

  const formats = [
    "header", "font", "size", "bold", "italic", "underline", "strike", "list", "bullet", "link", "image", 
    "blockquote", "code-block", "formula", "align", "video", "audio","color","background","emoji", "table",
  ];

  return (
    <div className="advanced-blog-form-container py-5 ">
    <div className="advanced-blog-form py-5">
      <form onSubmit={handleSubmit}>
        <h1>Create Blog Post</h1>

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleInputChange}
          placeholder="Enter Blog Title"
        />

        <label>Author</label>
        <input
          type="text"
          name="author"
          value={blogData.author}
          onChange={handleInputChange}
          placeholder="Enter Author Name"
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={blogData.date}
          onChange={handleInputChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={blogData.description}
          onChange={handleInputChange}
          placeholder="Enter Blog Description"
        ></textarea>



        <label>Blog Content</label>
        <div onClick={handleImageClick}>
          <ReactQuill
            theme="snow"
            value={blogData.content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            placeholder="Write your content here..."
          />
        </div>

        {controlsVisible && selectedImage && (
          <div className="image-controls">
            <button onClick={() => resizeImage("100%", true)}>100%</button>
            <button onClick={() => resizeImage("75%", true)}>75%</button>
            <button onClick={() => resizeImage("50%", true)}>50%</button>
            <button onClick={() => resizeImage("25%", true)}>25%</button>
            <button onClick={() => alignImage("left")}><FontAwesomeIcon icon={faAlignLeft}/></button>
            <button onClick={() => alignImage("center")}><FontAwesomeIcon icon={faAlignCenter}/></button>
            <button onClick={() => alignImage("right")}><FontAwesomeIcon icon={faAlignRight}/></button>
            <button onClick={removeImage}><FontAwesomeIcon icon={faTrash}/></button>
          </div>
        )}

        <button type="submit" className="btn-submit my-3">Save Blog</button>
      </form>
    </div>

    <div className="blog-heroImage" style={{paddingTop:'5rem'}}>
    <div>
      <label className="picture" htmlFor="picture__input" tabIndex={0}>
        <div className="picture__image">
          {image ? (
            <img src={image} alt="Uploaded Preview" className="picture__img" />
          ) : (
            <p>{pictureImageTxt}</p>
          )}
        </div>
      </label>
      <input
        id="picture__input"
        type="file"
        className="picture__input"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>

    </div>
    </div>
  );
};

export default BlogPostForm;
