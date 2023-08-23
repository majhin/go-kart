import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const response = await axios.get(
			"https://my-json-server.typicode.com/majhin/go-kart/products"
		);
		const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
		const allProducts = [...storedProducts, ...response.data];
		return allProducts;
	}
);

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
			}
			const localProducts = JSON.parse(localStorage.getItem("products"));
			let updatedLocalProducts;
			if (localProducts) {
				updatedLocalProducts = localProducts.map((product) => {
					if (product.id === id) {
						return updatedProduct;
					} else {
						return product;
					}
				});
				localStorage.setItem("products", JSON.stringify(updatedLocalProducts));
			}
		},
		deleteProduct: (state, action) => {
			const productId = action.payload;
			const localProducts = JSON.parse(localStorage.getItem("products"));

			if (localProducts) {
				const updatedLocalProducts = localProducts.filter(
					(product) => product.id !== productId
				);
				localStorage.setItem("products", JSON.stringify(updatedLocalProducts));
			}

			state.data = state.data.filter((product) => product.id !== productId);
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
