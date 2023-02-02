import axios from "axios";
import { useState } from "react";
import "./addpost.css";


const AddPost = () => {


  const [postedit, setPostEdit] = useState({});

  const editPost = () => {
    axios.post("http://localhost:8080/api/v1/post", {
      title: postedit.title,
      author: postedit.author,
    });
  };

  const updateAuthorValue = (evnt) => {
    setPostEdit({ ...postedit, author: evnt.target.value });
  };

  const updateTitleValue = (evnt) => {
    setPostEdit({ ...postedit, title: evnt.target.value });
  };

  return (
    <div className="addpost">
        <h3>Add new post:</h3>
      <label> Title</label>
      <input onChange={(evnt) => updateTitleValue(evnt)}></input>
      <label>Author</label>
      <input onChange={(evnt) => updateAuthorValue(evnt)}></input>
      <div>
        <button onClick={editPost}>Save</button>
      </div>
    </div>
  );
};

export default AddPost;
