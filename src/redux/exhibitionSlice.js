import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  exhibitionList: [],
};

export const exhibitionSlice = createSlice({
  name: "exhibition",
  initialState,
  reducers: {
    setDataExhibition: (state, action) => {
      console.log(action);
      state.productList = [...action.payload];
    },
  },
});

export const { setDataExhibition } = exhibitionSlice.actions;

export default exhibitionSlice.reducer;
