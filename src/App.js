import { HashRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CustomNavbar from "./components/CustomNav.jsx";
import Alert from "./components/Alert.jsx";
import Homepage from "./components/Homepage";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import CreateProduct from "./components/CreateProduct.jsx";
import ProductDetail from "./components/ProductDetail.jsx";

const App = () => {
	return (
		<>
			<Alert />
			<HashRouter basename='/'>
				<CustomNavbar />
				<Routes>
					<Route path='/' Component={Homepage} />
					<Route path='/products' Component={ProductList} />
					<Route path='/cart' Component={Cart} />
					<Route path='/create' Component={CreateProduct} />
					<Route path='/products/:productId' Component={ProductDetail} />
				</Routes>
			</HashRouter>
		</>
	);
};

export default App;
