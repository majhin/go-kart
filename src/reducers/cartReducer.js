import { createSlice } from "@reduxjs/toolkit";

//if local storage present then initial state set to that else []
const cartData = () => {
	const localCart = localStorage.getItem("cart");
	if (localCart) {
		return JSON.parse(localCart);
	} else {
		localStorage.setItem("cart", JSON.stringify([]));
		return [];
	}
};

//Handles add to cart and remove from cart - duplicates not allowed
const cartSlice = createSlice({
	name: "cart",
	initialState: cartData(),
	reducers: {
		addToCart: (state, action) => {
			const { product } = action.payload;

			const existingProduct = state.find((itemId) => itemId === product.id);
			if (!existingProduct) {
				localStorage.setItem("cart", JSON.stringify([...state, product.id]));
				return [...state, product.id];
			}
			return state;
		},
		removeFromCart: (state, action) => {
			const productIdToRemove = action.payload;
			const updatedCart = state.filter(
				(itemId) => itemId !== productIdToRemove
			);
			localStorage.setItem("cart", JSON.stringify(updatedCart));
			return [...updatedCart];
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
