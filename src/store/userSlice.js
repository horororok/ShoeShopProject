import { createSlice } from "@reduxjs/toolkit"


let user = createSlice({
    name: 'user',
    initialState: {name :'Kim', age : 20},
    reducers : {
        changeName(state){
            // return 'john '+ state
            //return {name : 'park', age : 20}
            state.name = 'park'
        },
        increaseAge(state, action){
            state.age += action.payload
        }
    }
})

export let {changeName, increaseAge} = user.actions

export default user