import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import React from "react";

const DiaryItem = ({ id, emotion, content, date }) => {

    const navigate= useNavigate();

    const strDate = new Date(parseInt(date)).toLocaleDateString();

    const goDetail = () =>{
        navigate(`/diary/${id}`);
    };

    const goEdit = () =>{
        navigate(`/edit/${id}`);
    }

    const imageUrl = `${process.env.PUBLIC_URL}/assets/emotion${emotion}.png`; // 공백 제거
    
    return (
        <div className="DiaryItem">
            <div 
            onClick={goDetail}
                className={[
                    "emotion_img_wrapper", 
                    `emotion_img_wrapper_${emotion}`,
                ].join(" ")}>
                <img src={imageUrl} alt={`emotion-${emotion}`} />
            </div>

            <div onClick={goDetail} className="info_wrapper">
                <div className="diary_date">{strDate}</div>
                <div className="diary_content_preview">{content.slice(0,25)}</div>
            </div>
            
            <div className="btn_wrapper">
            <MyButton onClick={goEdit} text = {"수정하기"}/>
            </div>
            <div></div>
        </div>
    );
}

export default DiaryItem;
