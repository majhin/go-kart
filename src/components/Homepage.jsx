import { Link } from "react-router-dom";

function Homepage() {
	return (
		<>
			<h1 className='display-4 my-4'>Welcome to Go-Kart!</h1>
			<p className='lead'>
				Are you ready to start your magical journey? Shop for all your supplies
				here, from Infinite Coffee Mugs and Jet-Propelled Sneakers to Hovering
				Pet Rocks and potions ingredients.
			</p>
			<p className='lead'>
				But be warned, this is no ordinary shopping experience. Our products are
				guaranteed to be faulty, our prices are outrageous, and our customer
				service is nonexistent.
			</p>
			<p className='lead'>So what are you waiting for? Get shopping!</p>
			<div className='my-4'>
				<Link to={`/products`} className='btn btn-warning btn-lg'>
					Shop Now
				</Link>
			</div>

			<div className='row'>
				<div className='col-md-4'>
					<img
						src='https://m.media-amazon.com/images/I/6148yQ1r9OL.jpg'
						alt='Broomstick'
						className='rounded img-fluid mb-3'
					/>
					<h2 className='mb-3'>Broomsticks</h2>
					<p className='lead'>
						Every witch and wizard needs a broomstick, so why not get the best?
						Our broomsticks are guaranteed to fly you faster than the speed of
						sound.
					</p>
				</div>
				<div className='col-md-4'>
					<img
						src='https://themeparkcenter.com/cdn/shop/articles/Multiple_Harry_Potter_Wands_on_Display_1200x1200.png?v=1667355242'
						alt='Wand'
						className='rounded img-fluid mb-3'
					/>
					<h2 className='mb-3'>Wands</h2>
					<p className='lead'>
						A wand is an essential tool for any witch or wizard. Our wands are
						made from the finest materials and are guaranteed to work with your
						magical powers.
					</p>
				</div>
				<div className='col-md-4'>
					<img
						src='https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/902310-the-monster-book-of-monsters-002-69b9df13b08ad87ebc79eb5c83518bfb.jpg'
						alt='Book'
						className='rounded img-fluid mb-3'
					/>
					<h2 className='mb-3'>Books</h2>
					<p className='lead'>
						No Hogwarts student can go without their textbooks. Our books are
						the most up-to-date and comprehensive on the market.
					</p>
				</div>
			</div>
		</>
	);
}

export default Homepage;
