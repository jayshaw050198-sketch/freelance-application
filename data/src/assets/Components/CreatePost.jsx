
// import React, { useState } from "react";
// import "./CreatePost.css";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// const CreatePost = ({ posts, setPosts }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [text, setText] = useState("");
//   const [image, setImage] = useState("");

//   const handleImage = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const addPost = () => {
//     if (text.trim() === "" && image === "") return;

//     const newPost = {
//       id: Date.now(),
//       text,
//       image,
//       date: new Date().toLocaleString(),
//     };

//     setPosts([newPost, ...posts]);

//     setText("");
//     setImage("");
//   };

//   return (
//     <div className="create-post">
//         <h1>Hello :{location.state.Username}</h1>
// 🎈🎈
//       <h2>Create Post</h2>

//       <textarea
//         placeholder="What's on your mind?"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       {image && (
//         <img
//           src={image}
//           alt="preview"
//           className="preview"
//         />
//       )}

//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImage}
//       />

//       <button onClick={addPost}>
//         Publish Post
//       </button>

//     </div>
//   );
// };

// export default CreatePost;