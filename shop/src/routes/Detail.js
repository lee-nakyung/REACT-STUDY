import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Nav} from 'react-bootstrap';
import { addItem } from "../store";
import { useDispatch } from "react-redux";
import { Dispatch } from "react";

function Detail(props){

    let dispatch = useDispatch()
    
    useEffect(()=>{
        let a = setTimeout(()=>{setAlert(false) }, 2000)
        return ()=>{
            clearTimeout(a);
        }
    },[])
   
    let [alert,setAlert]=useState(true);
    
    let [탭,탭변경]=useState(0);

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
                                <button className="btn btn-danger"
                                onClick={()=>{
                                    dispatch(addItem({id:1,name:'Red Knot',count:1}))
                                }}>주문하기</button>
                            </>
                        ) : (
                            <p>해당 상품을 찾을 수 없습니다.</p>
                        )
                    }
                </div>
            </div>
            <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{탭변경(1)}}eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<TabContent shoes={props.shoes} 탭={탭}/>

        </div>
    )
}

function TabContent({ 탭 , shoes}){

    let[fade,setFade]=useState('')
    

    useEffect(()=>{
        let a=setTimeout(()=>{setFade('end')}, 100)
        
        return ()=>{
            clearTimeout(a)
            setFade('')
        }
    },[탭])
    return <div className={'start' + fade}>
        {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][탭]}
    </div>
}


export default Detail;
