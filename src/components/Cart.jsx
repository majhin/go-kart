import { useSelector, useDispatch } from "react-redux";

import { removeFromCart } from "../reducers/cartReducer";

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart);

	const handleRemoveFromCart = (productId) => {
		dispatch(removeFromCart(productId));
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
						<h6 className='d-inline-block '>
							&nbsp; &nbsp; &nbsp; {item.name} - Rs.{item.price}
						</h6>
					</p>
				</div>
			))}
		</div>
	);
};

export default Cart;
