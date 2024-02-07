import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const getUsers = createAsyncThunk("api/getUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
});

 const initialState = {
    data:[],
    loading:false,
    error:null
 }

 export const apiSlice = createSlice({
    name:"apiData",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getUsers.pending, (state) => {
          state.loading = true;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(getUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    }
 })
 export default apiSlice.reducer
 