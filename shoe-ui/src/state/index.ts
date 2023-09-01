import { createSlice } from "@reduxjs/toolkit";

// type initialStateType = {
//   user: {
//     _id: string,
//   },
//   token: string
// }

const initialState  =  {
  user: "",
  token: "",
  orderId: "",
  productCartLength: 0
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.orderId = action.payload.orderId;
      state.productCartLength = action.payload.productCartLength
    },
    setLogout: (state) => {
      state.user = "";
      state.token = "";
      state.orderId = "";
    },
    setProductCartLength: (state, action) => {
      state.productCartLength = state.productCartLength + action.payload.productCartLength
    },
    setOrderId : (state, action) => {
      state.orderId = action.payload.orderId
    }
   
  },
});

export const { setLogin, setLogout,  setProductCartLength, setOrderId } =
  authSlice.actions;
export default authSlice.reducer;
