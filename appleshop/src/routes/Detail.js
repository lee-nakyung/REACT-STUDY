import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { useEffect } from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";

function Detail(props){

  

    

    let {id}=useParams();
    let product = props.shoes.find(x=> x.id==id);
    let [count,setCount]=useState(0);
    let [alert, setAlert]=useState(true);

    useEffect(()=>{
        let a = setTimeout(()=>{setAlert(false)},2000)
        console.log(2)
        return ()=>{
            console.log(1)
            clearTimeout(a)
        }
    }, [])
    
    return (
        <div className="container">
            <div className="alert alert-warning">
                2초 이내 구매시 할인
            </div>
            {count}
            <button onClick={()=>{setCount(count+1)}}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes0.jpg" width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<div>내용0</div>
<div>내용1</div>
<div>내용2</div> 
        </div>
    )
}

export default Detail;