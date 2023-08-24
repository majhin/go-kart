import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showAlert } from "../reducers/alertReducer";
import { addProduct } from "../reducers/productReducer";

function CreateProduct() {
	//functional state to get a new product
	const [newProduct, setNewProduct] = useState({
		name: "",
		description: "",
		price: 0,
		image: "",
	});

	const dispatch = useDispatch();

	//Standard handler for input change
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewProduct({ ...newProduct, [name]: value });
	};
	//Standard handler for for Submit - makes a dummy API request and shows the corresponding Alerts
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"https://my-json-server.typicode.com/majhin/go-kart/products",
				newProduct
			);
			const existingProducts = JSON.parse(localStorage.getItem("products"));
			response.data.id = 21 + existingProducts.length + 1; //since server returns ID 22 always, !important increment!
			const updatedProducts = [...existingProducts, response.data];
			localStorage.setItem("products", JSON.stringify(updatedProducts));
			dispatch(addProduct(response.data)); // Add the new product to the Redux store
			dispatch(
				showAlert({
					type: "Success",
					message: "Product Added Successfully",
				})
			);
			setNewProduct({
				name: "",
				description: "",
				price: 0,
				image: "",
			});
		} catch (error) {
			dispatch(
				showAlert({
					type: "ERROR",
					message: `Error adding product: ${error}`,
				})
			);
		}
	};

	return (
		<div className='container mt-5'>
			<h1 className='mb-4'>Add Product</h1>
			<form onSubmit={handleSubmit}>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						name='name'
						id='floatingName'
						value={newProduct.name}
						onChange={handleInputChange}
						placeholder='Product Name'
					/>
					<label htmlFor='floatingName'>Product Name</label>
				</div>
				<div className='form-floating mb-3'>
					<textarea
						className='form-control'
						name='description'
						id='floatingDescription'
						value={newProduct.description}
						onChange={handleInputChange}
						placeholder='Product Description'
					/>
					<label htmlFor='floatingDescription'>Product Description</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='number'
						className='form-control'
						name='price'
						value={newProduct.price}
						onChange={handleInputChange}
						placeholder='Product Price'
						min={0}
					/>
					<label htmlFor='floatingDescription'>Product Price</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						name='image'
						id='floatingImage'
						value={newProduct.image}
						onChange={handleInputChange}
						placeholder='Image URL'
					/>
					<label htmlFor='floatingImage'>Product Image URL</label>
				</div>
				<button type='submit' className='btn btn-success '>
					Add Product
				</button>
			</form>
		</div>
	);
}

export default CreateProduct;
