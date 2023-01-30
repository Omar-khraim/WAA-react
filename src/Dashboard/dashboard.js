import Posts from "../Posts/posts";
import { useState } from "react";

const Dashbosrd = ()=>{

    const [title , setTitle] = useState("Happiness");


const updateTitle = ()=>{
console.log(title);
const x = document.getElementById('titleBox').value;
console.log(x);
    setTitle(x);
};

    return(
    <div>
        <Posts  firstTitle = {title}/>
        <input id="titleBox"></input>
        <button onClick={updateTitle}>updateTitle</button>
    </div>
    );
}

export default Dashbosrd;