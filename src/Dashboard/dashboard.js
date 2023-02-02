import Posts from "../Posts/posts";
import { useState } from "react";
import AddPost from "../Posts/addpost";

const Dashbosrd = () => {

  const [title, setTitle] = useState("Happiness");
//   const [newPost, setNewPost] = useState("Happiness");


  const updateTitle = () => {
    console.log(title);
    const x = document.getElementById("titleBox").value;
    console.log(x);
    setTitle(x);
  };




  return (
    <div>
      <Posts firstTitle={title} />
      <AddPost />
      <input id="titleBox"></input>
      <button onClick={updateTitle}>updateTitle</button>    
    </div>
  );
};

export default Dashbosrd;
