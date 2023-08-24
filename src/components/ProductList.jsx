import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts, toggleSortByPrice } from "../reducers/productReducer";
import "../css/Card.css";
import EditingUI from "./EditingUI";

const ProductList = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.data);
	const sortByPrice = useSelector((state) => state.products.sortByPrice);

	//decides based on sortByPrice to sort product list or not
	const sortedProducts = sortByPrice
		? [...products].sort((a, b) => a.price - b.price)
		: products;

	//handler to toggle the sort button and state
	const handleSortToggle = () => {
		dispatch(toggleSortByPrice());
	};

	//standart useEffect, re-runs if dispatch is called
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div>
			<h1>Product List</h1>
			<div className='d-flex justify-content-between align-items-center mb-3'>
				{!sortByPrice ? (
					<button className='btn btn-primary' onClick={handleSortToggle}>
						Sort by Price
					</button>
				) : (
					<button className='btn btn-danger' onClick={handleSortToggle}>
						Sort by Price (X)
					</button>
				)}
			</div>
			<div className='row'>
				{sortedProducts.map((product) => (
					<div key={product.id} className='col-md-4 mb-3'>
						<EditingUI product={product} />
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList;
