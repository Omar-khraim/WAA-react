import Post from "./post";
import './posts.css'

const Posts = (param)=>{

const postsList =[ 
    {id : 1, title : param.firstTitle , Author: "Jasmine"},
    {id : 2, title : "MIU" , Author: "Dean"},
    {id : 3, title : "Enjoy life" , Author: "Jasmine"}];


    return (
    <div className="cards">
        { postsList.map((ex) => (
      <Post
        key={ex.id}
        id={ex.id}
        title={ex.title}
        author={ex.Author}
      />  ))}
    </div>
    );
}

export default Posts;