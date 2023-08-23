import { Navbar, Nav } from "react-bootstrap"; // Import Bootstrap components
import { useSelector } from "react-redux";
import "../css/Navbar.css";

function CustomNavbar() {
	const cartItems = useSelector((state) => state.cart);
	return (
		<Navbar className='custom-navbar' expand='lg'>
			<Navbar.Brand href='/' className='ms-5 '>
				Go-kart
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/products'>Products</Nav.Link>
				</Nav>
				<Nav className='ml-auto'>
					<Nav.Link href='/create'>Add Product</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href='/cart' className='position-relative'>
						<button type='button' className='btn btn-warning position-relative'>
							Cart
							<span className='position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger'>
								{cartItems.length}
							</span>
						</button>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default CustomNavbar;
