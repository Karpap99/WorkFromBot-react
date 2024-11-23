import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { TInitialState, User } from "../types"


const initialState: TInitialState = {
    user: null,
    isAuthed: false
}

export const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
        setAuthed: (state, action: PayloadAction<boolean>) => {
            state.isAuthed = action.payload;
        }
    }
})


export const userSliceActions = slice.actions;

export default slice.reducer;