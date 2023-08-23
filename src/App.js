import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import router from "./router.js";
import CustomNavbar from "./components/CustomNav.jsx";
import Alert from "./components/Alert.jsx";

const App = () => {
	return (
		<>
			<Alert />
			<CustomNavbar />
			<RouterProvider router={router} />
		</>
	);
};

export default App;
