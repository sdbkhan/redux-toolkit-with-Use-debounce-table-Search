import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: '',
  password: '',
  data: {}
};
export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setCredential: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;

    },
    setRegisterData: (state, action) => {
      state.data = action.payload
    },
    clearPersistedState: () => {
      return {
        username: '',
        password: '',
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCredential, setRegisterData, clearPersistedState } = userSlice.actions

export default userSlice.reducer