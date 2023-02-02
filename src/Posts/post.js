import './post.css';

const Post = (param)=>{

    function selectedPost() 
    {
        param.handleFlag({id:param.id, title: param.title , author:param.author});
    }

    return (
      <div className="card" onClick={selectedPost}>
        <div>Id : {param.id}</div>
        <div>Title : {param.title}</div>
        <div>Author : {param.author}</div>
      </div>
    );
}

export default Post;