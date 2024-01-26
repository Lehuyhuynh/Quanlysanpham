import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide";
import exhibitionSlideReducer from "./exhibitionSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSlideReducer,
    exhibition: exhibitionSlideReducer,
  },
});
