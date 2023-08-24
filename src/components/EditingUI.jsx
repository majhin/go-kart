// src/components/ProductItem.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { showAlert } from "../reducers/alertReducer";
import { addToCart, removeFromCart } from "../reducers/cartReducer";
import {
	toggleEditing,
	updateProduct,
	deleteProduct,
} from "../reducers/productReducer";

//Conditionally renders each product card based on if inline editing TRUE/FALSE and shows corresponding alerts
function EditingUI({ product }) {
	const dispatch = useDispatch();
	const [editedProduct, setEditedProduct] = useState({ ...product });

	//handler to delete product, also deletes from the cart
	const handleDelete = () => {
		dispatch(deleteProduct(product.id));
		dispatch(removeFromCart(product.id));
		dispatch(
			showAlert({
				type: "Success",
				message: "Product Deleted Successfully",
			})
		);
	};

	//handler to toggle editibility (is that a word!) of product card
	const handleEditToggle = () => {
		dispatch(toggleEditing(product.id));
	};

	//standard handler for input change
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedProduct({ ...editedProduct, [name]: value });
	};

	// handler for updating a product
	const handleUpdateProduct = () => {
		dispatch(updateProduct({ id: product.id, updatedProduct: editedProduct }));
		dispatch(
			showAlert({
				type: "Success",
				message: "Product Updated",
			})
		);
	};

	//handler to add product to cart - duplicates don't get added
	const handleAddToCart = (product) => {
		dispatch(addToCart({ product }));
		dispatch(
			showAlert({
				type: "Success",
				message: "Product Added To Cart",
			})
		);
	};

	return (
		<div>
			{product.isEditing ? (
				<div>
					<Link to={`/product/${product.id}`}>
						<img
							src={product.image}
							alt={product.name}
							className='card-img-top custom-card-img'
						/>
					</Link>
					<div className='form-inline'>
						<div className='input-group mb-2 mr-sm-2'>
							<input
								type='text'
								className='form-control'
								name='name'
								value={editedProduct.name}
								onChange={handleInputChange}
							/>
						</div>

						<div className='input-group mb-2 mr-sm-2'>
							<input
								type='text'
								className='form-control'
								name='description'
								value={editedProduct.description}
								onChange={handleInputChange}
							/>
						</div>

						<div className='input-group mb-2 mr-sm-2'>
							<div className='input-group-prepend'>
								<div className='input-group-text'>Rs.</div>
							</div>
							<input
								type='number'
								className='form-control'
								name='price'
								value={editedProduct.price}
								onChange={handleInputChange}
							/>
						</div>

						<div className='d-flex justify-content-between align-items-center mt-3'>
							<button className='btn btn-success' onClick={handleUpdateProduct}>
								Save
							</button>
							<button className='btn btn-secondary' onClick={handleEditToggle}>
								Cancel
							</button>
						</div>
					</div>
				</div>
			) : (
				<div key={product.id}>
					<div className='card'>
						<Link to={`/products/${product.id}`}>
							<img
								src={product.image}
								alt={product.name}
								className='card-img-top custom-card-img'
							/>
						</Link>
						<div className='card-body'>
							<h5 className='card-title'>{product.name}</h5>
							<p className='card-text'>{product.description}</p>
							<p className='card-text'>Rs.{product.price}</p>
							<div className='d-flex justify-content-between align-items-center mt-3'>
								<button
									className='btn btn-primary'
									onClick={() => handleAddToCart(product)}
								>
									Add to Cart
								</button>
								<button
									className='btn btn-secondary'
									onClick={handleEditToggle}
								>
									Edit
								</button>
								<button className='btn btn-danger' onClick={handleDelete}>
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default EditingUI;
