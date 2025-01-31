import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Cart from "./components/cart";

function ShoppingCart() {
    const cartItems = useSelector((state) => state.book.cartItems);
    const cartTotalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <div className="mt-20">
                <img
                    src="/assets/bookstore.jpg"
                    alt="bookstore"
                    style={{ width: '100%', height: '50vh' }}
                />
            </div>
            <div className="left-0 top-0 w-full absolute bg-slate-300 h-20 flex items-center sm:px-8 justify-between">
                <div className="flex items-center">
                    <Link to="/home" className="flex items-center">
                        <span className="text-black text-2xl sm:text-4xl font-pacifico">Book Haven</span>
                        <img
                            src="/assets/book-icon.png"
                            alt="book icon"
                            style={{ width: '75px', height: '75px' }}
                            className="ml-4"
                        />
                    </Link>
                </div>
                <div className="flex items-center ml-auto">
                    <img
                        src="/assets/wishlist.png"
                        alt="wishlist"
                        style={{ width: '40px', height: '40px' }}
                    />
                </div>
            </div>
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center">
                    <span className="text-5xl font-serif border-b-2 border-gray-300 pb-2">Cart</span>
                </div>
                <span className="font-serif text-black pt-6">Total Quantity: {cartTotalQuantity}</span>
            </div>
            <Cart />
        </>
    );
}

export default ShoppingCart;