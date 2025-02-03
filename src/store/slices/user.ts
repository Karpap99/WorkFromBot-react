import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { TInitialState, User } from "../types"


const initialState: TInitialState = {
    user: null,
    isAuthed: true,
    lang: 0
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
        },
        setLang: (state, action: PayloadAction<number>) => {
            state.lang = action.payload;
        }
    }
})


export const userSliceActions = slice.actions;

export default slice.reducer;