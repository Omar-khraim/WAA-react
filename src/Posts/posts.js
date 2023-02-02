import Post from "./post";
import "./posts.css";
import axios from "axios";
import { useState } from "react";
import PostDetails from "./PostDetails";
import { useEffect } from "react";

const Posts = (param) => {
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(false);
  const [selectedPost, setSelectedPost] = useState([]); 

  const getPosts = () => {
    axios.get("http://localhost:8080/api/v1/post").then((res) => {
      setPosts(res.data);
    });
  };

  const handleFlag = (post)=>{    
    setSelectedPost(post); 
    setFlag(true);
  }

  useEffect(() => {
    getPosts();
  }, []);

  const postsList = posts.map((ex) => (
    <Post key={ex.id} id={ex.id} title={ex.title} author={ex.author}  handleFlag= {handleFlag} />
  ));

  //  postsList = [
  //   { id: 1, title: param.firstTitle, Author: "Jasmine" },
  //   { id: 2, title: "MIU", Author: "Dean" },
  //   { id: 3, title: "Enjoy life", Author: "Jasmine" },
  // ];

  return (
    <div>
      <div className="cards">{postsList}</div>
      <button onClick={getPosts}> get posts </button>
      {flag ? <PostDetails selectedPost ={selectedPost}/> : null}
    </div>
  );
};

export default Posts;
