# 🛒 EzCart

**EzCart** is a full-featured e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It supports user authentication, product management, cart functionality, and order processing.

## 🚀 Features

- User authentication (Register / Login / Logout)
- Admin dashboard for product & order management
- Product listing with search, filters, and categories
- Shopping cart with quantity management
- Order checkout and order history
- Responsive and user-friendly UI

## 🛠️ Tech Stack

### Frontend:
- React.js
- Redux Toolkit (for state management)
- Axios
- Tailwind CSS / Bootstrap (UI styling)

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT) for auth
- Multer (for image uploads)

## 📦 Project Structure

```

EzCart/
├── client/         # React frontend
├── server/         # Express backend
├── .env
├── README.md
└── package.json

````

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ezcart.git
cd ezcart
````

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file in `/server` with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

### 3. Set Up the Frontend

```bash
cd ../client
npm install
npm start
```

## 🧪 Test Credentials

### User:

* Email: `user@example.com`
* Password: `123456`

### Admin:

* Email: `jeevathepath@gmail.com`
* Password: `admin123`

*(Optional: Seed test users/products using a script)*

## 📷 Screenshots

*(Include screenshots/gifs of homepage, cart, product detail, admin panel, etc.)*

## ✨ Future Improvements

* Stripe/PayPal payment integration
* Product reviews & ratings
* Real-time order tracking
* Wishlist functionality
* PWA support for mobile

## 🧑‍💻 Author

**JEEVAKARAN S.**
GitHub: [@jeevada](https://github.com/jeevada)

## 📄 License

This project is licensed under the MIT License.
