import { configureStore, createSlice } from "@reduxjs/toolkit"

import user from "./store/userSlice"

//useState와 비슷
//state 하나를 슬라이스라 부름





let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12]
})

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ]
})


export default configureStore({
    reducer: {
        //state 등록 후 사용가능
        user: user.reducer,

        stock: stock.reducer,

        cart: cart.reducer
    }
})