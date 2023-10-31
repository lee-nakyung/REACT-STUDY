import {createSlice,configureStore} from '@reduxjs/toolkit'

let user = createSlice({
    name:'user',
    initialState:{name:"kim", age:20},
    reducers:{
        changeName(state){
            state.name='park'
        },
        increase(state,a){
            state.age+=a.payload; //payload 꼭 써야함
        },
    }
})

export let { changeName, increase } = user.actions; // Exported increase here


export default user;