import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./Reducers/NotesSlice";


export default configureStore({
    reducer:{
        notes:NotesSlice
    }
})