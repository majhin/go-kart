import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

//Fetches the products from API as initial state and creates localStorage with the same
export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const response = await axios.get(
			"https://my-json-server.typicode.com/majhin/go-kart/products"
		);
		const storedProducts = JSON.parse(localStorage.getItem("products"));
		if (storedProducts) {
			return [...storedProducts];
		}
		localStorage.setItem("products", JSON.stringify([...response.data]));
		return [...response.data];
	}
);

//Handles add, update, delete, toggleEdit for products
//builder is used for better handling the API call
const productSlice = createSlice({
	name: "products",
	initialState: {
		data: [],
		loading: false,
		error: null,
		sortByPrice: false,
	},
	reducers: {
		addProduct: (state, action) => {
			state.data.push(action.payload);
		},
		toggleEditing: (state, action) => {
			const productId = action.payload;
			const product = state.data.find((item) => item.id === productId);
			if (product) {
				product.isEditing = !product.isEditing;
			}
		},
		updateProduct: (state, action) => {
			const { id, updatedProduct } = action.payload;
			const product = state.data.find((item) => item.id === id);
			if (product) {
				Object.assign(product, updatedProduct);
				product.isEditing = false;
				localStorage.setItem("products", JSON.stringify(current(state).data));
			}
		},
		deleteProduct: (state, action) => {
			const productId = action.payload;

			state.data = state.data.filter((product) => product.id !== productId);
			localStorage.setItem("products", JSON.stringify(state.data));
		},
		toggleSortByPrice: (state) => {
			state.sortByPrice = !state.sortByPrice;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const {
	toggleEditing,
	updateProduct,
	deleteProduct,
	toggleSortByPrice,
	addProduct,
} = productSlice.actions;
export default productSlice.reducer;
