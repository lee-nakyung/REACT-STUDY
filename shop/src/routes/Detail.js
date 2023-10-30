import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

    useEffect(()=>{
        setTimeout(()=>{setAlert(false) }, 2000)
    },[])
   
    let [alert,setAlert]=useState(true);
    let[count,setCount]=useState(0);

    let {id} = useParams();
    id=parseInt(id);

    return (
        <div className="container">
            {
                alert==true
                ?<div className="alert alert-warning">
                2초 이내 구매시 할인 
                </div>:null
            }
            {count}
            <button onClick={()=>{setCount(count+1)}}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="Shoe Image"/>
                </div>
                <div className="col-md-6 mt-4">
                    {
                        props.shoes[id] ? (
                            <>
                                <h4 className="pt-5">{props.shoes[id].title}</h4>
                                <p>{props.shoes[id].content}</p>
                                <p>{props.shoes[id].price}</p>
                                <button className="btn btn-danger">주문하기</button>
                            </>
                        ) : (
                            <p>해당 상품을 찾을 수 없습니다.</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail;
