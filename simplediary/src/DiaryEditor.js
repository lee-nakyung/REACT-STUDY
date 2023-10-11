import {useState} from "react";

const DiaryEditor = () =>{

    const [author, setAuthor] = useState("");
    const [content, setContent]= useState("");

    return (
    <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
            name="author"
            value={author} 
            onChange={(e)=>{
                setAuthor(e.target.value);
            }}/>
        </div>
        <div>
            <textarea 
            value={content} 
            onchange= {(e)=>{
                setContent(e.target.value);
            }}
                />

        </div>
    </div>

    );
}

export default DiaryEditor;