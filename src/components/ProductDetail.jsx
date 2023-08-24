import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { showAlert } from "../reducers/alertReducer";
import { addToCart } from "../reducers/cartReducer";

function ProductDetail() {
	const allProducts = useSelector((state) => state.products.data);
	const { productId } = useParams();
	const dispatch = useDispatch();

	const product = allProducts.find(
		(item) => item.id === parseInt(productId, 10)
	);

	//handler to add product to cart and show corresponding alert
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
		<div className='container mt-5'>
			{product && (
				<div className='card w-100'>
					<div className='d-flex'>
						<img
							className='card-img-top w-25 '
							src={product.image}
							alt={product.name}
						/>
						<div className='card-body'>
							<button
								className='btn btn-primary'
								onClick={() => handleAddToCart(product)}
							>
								Add to Cart
							</button>
						</div>
					</div>
					<div className='card-body'>
						<h5 className='card-title'>{product.name}</h5>
						<p className='card-text'>{product.description}</p>
						<p className='card-text'>Rs.{product.price}</p>
					</div>

					{product.specifications ? (
						<ul className='list-group list-group-flush'>
							{Object.keys(product.specifications).map((key) => (
								<li className='list-group-item' key={key}>
									<strong>{key}:</strong> {product.specifications[key]}
								</li>
							))}
						</ul>
					) : (
						""
					)}
				</div>
			)}
		</div>
	);
}

export default ProductDetail;
