import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from './store/userSlice';


let stock = createSlice({
    name:'stock', // Changed the name to 'stock'
    initialState:'kim'
})

let cart = createSlice({
    name:'cart',
    initialState:[
        {id:0, name:'White and Black', count:2},
        {id:2, name:'Grey Yorddan', count:1}
    ],
    reducers:{
        addCount(state, action){
            let number= state.findIndex((a)=>{return a.id==action.payload})
            state[number].count++
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})

export let {addCount, addItem} = cart.actions

export default configureStore({
    reducer:{
        user:user.reducer,
        stock:stock.reducer,
        cart:cart.reducer
    }
});
