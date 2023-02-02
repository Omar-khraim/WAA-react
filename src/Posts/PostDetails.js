
import axios from 'axios';
import { useState } from 'react';
import './postDetails.css';
import PostEdit from './postedit';


const PostDetails = (param)=> {

    const[showEdit, setShowEdit] = useState(false);

    function deletePost(){
        axios.delete("http://localhost:8080/api/v1/post/"+param.selectedPost.id).then((res) => {
            console.log("deleted");
          });
    }

    const edit = ()=>{
        setShowEdit(!showEdit);
    }

    return(
        <div className='details'> 
        <h3>{param.selectedPost.title}</h3>
        <h4>{ param.selectedPost.author}</h4>
        <p>This is the content in the post.....</p>

        <button onClick={deletePost}>Delete</button>
        <button onClick={edit}>edit</button>
        {showEdit ? <PostEdit postId = {param.selectedPost.id}/> : null}
        </div>
    )
}


export default PostDetails;