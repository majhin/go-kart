import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import alertReducer from "./reducers/alertReducer";

//BREAD AND BUTTER OF THIS APP
//May Lord Bless the person who made redux-toolkit
const store = configureStore({
	reducer: {
		products: productReducer,
		cart: cartReducer,
		alert: alertReducer,
	},
});

export default store;
