import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import user from "./store/userSlice.js"

/*redux 5*/


let cart = createSlice({
    name:'cart',
    initialState: [
        {id: 0 ,name: 'white and Black', count:2},
        {id:2, name:'Grey Yordan', count:1}
    ],
    reducers: {
        addCount(state, action){
            action.payload
            state[번호].count++
        }
    }
})

export let {addCount} = cart.actions


export default configureStore({
  reducer: { 
    user: user.reducer,
    cart: cart.reducer
  }
}) ;