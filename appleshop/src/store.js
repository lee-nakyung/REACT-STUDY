import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState:'kim'
})

export default configureStore({
  reducer: { 
    user: user.reducer
  }
}) ;