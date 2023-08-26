import { createSlice } from "@reduxjs/toolkit";


export const NotesSlice=createSlice({
    initialState:{
        item:[]
    },
    reducers:{
        addData:(state,action)=>{
          state.item=action.payload
        }
    }
})

export const {addData}=addData.actions

export default NotesSlice.reducer