import { Navbar, Nav } from "react-bootstrap"; // Import Bootstrap components
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

//BootStrap Navbar with Link elements instead of hrefs for better routing
function CustomNavbar() {
	const cartItems = useSelector((state) => state.cart);
	return (
		<Navbar className='custom-navbar' expand='lg'>
			<Link to='/' className='navbar-brand ms-5'>
				Go-kart
			</Link>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Link to='/' className='nav-link'>
						Home
					</Link>
					<Link to='/products' className='nav-link'>
						Products
					</Link>
				</Nav>
				<Nav className='ml-auto'>
					<Link to='/create' className='nav-link'>
						Add Product
					</Link>
				</Nav>
				<Nav>
					<Link to='/cart' className='position-relative nav-link'>
						<button type='button' className='btn btn-warning position-relative'>
							Cart
							<span className='position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger'>
								{cartItems.length}
							</span>
						</button>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default CustomNavbar;
