import './post.css';

const Post = (param)=>{

    return (<div className="card">
        <div>Id : {param.id}</div>
        <div>Title : {param.title}</div>
        <div>Author : {param.author}</div>
    </div>);
}

export default Post;