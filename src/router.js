import { createHashRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CreateProduct from "./components/CreateProduct";
import ProductDetail from "./components/ProductDetail";

const routes = [
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/products",
		element: <ProductList />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
	{
		path: "/create",
		element: <CreateProduct />,
	},
	{
		path: "/products/:productId",
		element: <ProductDetail />,
	},
];
const router = createHashRouter(routes, {
	basename: "/go-kart",
});

export default router;
