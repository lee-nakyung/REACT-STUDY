import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { increase, changeName } from '../store/userSlice';
import { addCount } from '../store';

function Cart(){

    let state= useSelector((state)=>state)
    console.log(state.cart[0].name)
    let dispatch = useDispatch()

    return (
      <div>
      {state.user.name} {state.user.age}의 장바구니
      <button onClick={()=>{dispatch(increase(3))}}>버튼</button>
        <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
  {
                    state.cart.map((a, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{a.name}</td>
                                <td>{a.count}</td>
                                <td>
                                  <button onClick={()=>{
                                    dispatch(addCount(state.cart[i].id))
                                  }}>+</button>
                                </td>
                            </tr>
                        )
                    })
                }
  </tbody>
</Table> 
</div>
    )
}

export default Cart;