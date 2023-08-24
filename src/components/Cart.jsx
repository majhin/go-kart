import { useSelector, useDispatch } from "react-redux";

import { showAlert } from "../reducers/alertReducer";
import { removeFromCart } from "../reducers/cartReducer";

const Cart = () => {
	const dispatch = useDispatch();
	const allProducts = useSelector((state) => state.products.data);
	const allCartItemIDs = useSelector((state) => state.cart);

	//function to populate cartItems since cart only stores product IDs
	function populateCartItems(allCartItemIDs, allProducts) {
		const cartItems = allProducts.filter((product) =>
			allCartItemIDs.includes(product.id)
		);
		return cartItems;
	}
	const cartItems = populateCartItems(allCartItemIDs, allProducts);

	//Removes Item from cart and shows the corresponding Alert
	const handleRemoveFromCart = (productId) => {
		dispatch(removeFromCart(productId));
		dispatch(
			showAlert({
				type: "Success",
				message: "Product Removed from Cart",
			})
		);
	};

	return (
		<div className='list-group'>
			<h1>Cart</h1>
			{cartItems.map((item) => (
				<div key={item.id}>
					<p className='list-group-item list-group-item-action'>
						<button
							className='btn btn-danger'
							style={{
								"--bs-btn-padding-y": ".25rem",
								"--bs-btn-padding-x": ".5rem",
								"--bs-btn-font-size": ".75rem",
							}}
							onClick={() => handleRemoveFromCart(item.id)}
						>
							X
						</button>
						<strong className='d-inline-block '>
							&nbsp; &nbsp; &nbsp; {item.name} - Rs.{item.price}
						</strong>
					</p>
				</div>
			))}
		</div>
	);
};

export default Cart;
