import { createSlice } from "@reduxjs/toolkit";


interface userInterface {
    name: string | null
    pfp: string | null
}

const initialState:userInterface = {
    name: null,
    pfp: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {value: initialState},
    reducers: {
        getUser: (state, action)=>{
            state.value = action.payload
        },
    }
})


export default userSlice.reducer
export const {getUser} = userSlice.actions


