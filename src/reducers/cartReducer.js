import { createSlice } from "@reduxjs/toolkit";

const cartData = () => {
	const localCart = localStorage.getItem("cart");
	if (localCart) {
		return JSON.parse(localCart);
	} else {
		localStorage.setItem("cart", JSON.stringify([]));
		return [];
	}
};

const cartSlice = createSlice({
	name: "cart",
	initialState: cartData(),
	reducers: {
		addToCart: (state, action) => {
			const { product } = action.payload;
			const localCart = JSON.parse(localStorage.getItem("cart"));

			const existsInLocal = localCart.find((item) => item.id === product.id);
			if (!existsInLocal) {
				localStorage.setItem("cart", JSON.stringify([...localCart, product]));
			}

			const existingProduct = state.find((item) => item.id === product.id);
			if (!existingProduct) {
				return [...state, product];
			}
			return state;
		},
		setCart: (state, action) => {
			const cartData = action.payload;
			return [...cartData];
		},
		removeFromCart: (state, action) => {
			const productIdToRemove = action.payload;
			const updatedCart = state.filter((item) => item.id !== productIdToRemove);
			localStorage.setItem("cart", JSON.stringify(updatedCart));
			return state.filter((item) => item.id !== productIdToRemove);
		},
	},
});

export const { addToCart, setCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
