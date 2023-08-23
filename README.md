# Ecommerce React App

This project is a frontend implementation of an ecommerce website using React and Redux. The app interacts with a dummy ecommerce API service provided by [my-json-server.typicode.com](https://my-json-server.typicode.com/) to simulate the backend functionalities. It allows users to browse products, add them to the cart, edit products, and manage their shopping cart.

## Table of Contents

- [Functionality](#functionality)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Functionality

### Navbar

- Displays the count of items in the cart.
- Provides relevant navigation links.

### All Products Page

- Lists products fetched from the API.
- Allows inline editing of each product.
- Provides a delete button for each product.
- Implements a sort button to sort products by price.
- Allows adding products to the cart.

### Create Page

- Enables adding new products to the database (dummy request since DB can't be updated) stores in local Storage.

### Product Detail Page

- Displays detailed information about a selected product.
- Provides a button to add the product to the cart.

### Cart Page

- Lists all the items in the user's cart.
- Handles success and error alerts.

## Installation

1. Clone the repository: `git clone https://github.com/majhin/go-kart.git`
2. Navigate to the project directory: `cd go-kart`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your web browser and navigate to `http://localhost:3000` to use the app.

## Technologies Used

- React: Frontend JavaScript library for building user interfaces.
- Redux: State management library for managing global application state.
- React Router: Library for implementing routing in a React application.
- Axios: Promise-based HTTP client for making API requests.
- Bootstrap: CSS framework for styling the app.
- React-Bootstrap: Integration of Bootstrap with React components.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
