import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstname: "",
    lastname: '',
    address: "",
}

export const registerSlice = createSlice({
    initialState,
    name: "resgister",
    reducers: {
        setRegisterSlice: (state, action) => {
            state = action.payload
        }
    }
})
export const { setRegisterSlice } = registerSlice.actions
export default registerSlice.reducer