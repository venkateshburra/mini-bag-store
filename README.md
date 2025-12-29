# Mini Bag Store  
**Full Stack E-Commerce Assignment**

This is a full-stack e-commerce application built as part of the technical assignment.

---

## Tech Stack Used

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB

---

## How to Run the Project

### 1. Backend Setup

Open terminal and go to backend folder:

cd backend  
npm install  

Create a .env file using the example:

PORT=3000  
MONGO_URI=your_mongodb_connection_string  
  
Start backend server:

npm run dev  

Backend runs on:

http://localhost:3000  

---

### 2. Frontend Setup

Open a new terminal and go to frontend folder:

cd frontend  
npm install  
npm run dev  

Frontend runs on:

http://localhost:5173  

---

## 🔗 Backend API Endpoints (Simple Explanation)

### Products

GET /products  
Used to fetch all bag products  
Used on the Home (Shop) page  

GET /products/:id  
Used to fetch single product details  
Used on Product Details page  

---

### Cart

POST /cart  
Adds a product to the cart  
Called when user clicks "Add to Cart"  

GET /cart  
Fetches all cart items  

DELETE /cart/:id  
Removes a product from cart  
Used when clicking "Remove" in Cart page  

---

### Checkout

POST /checkout  
Saves order details:  
- Name  
- Email  
- Address  
- Products  
- Total price  

Clears cart after successful order  

---

## 🔄 Application Flow

1. User views products on Home page  
2. User opens Product Details page  
3. User adds product to cart  
4. Cart page shows added products  
5. User removes products if needed  
6. User proceeds to checkout  
7. Order is placed and cart is cleared  
8. Order success popup is shown  

---

