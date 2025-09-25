import React, { useEffect, useState } from "react";
import { getFood, addFood, getCart, deleteCart } from "./FoodManager";
import "./cart.css";
export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [final, setFinal] = useState(0);
    useEffect(() => { fetchFood() }, [])

    const fetchFood = async () => {
        const data = await getCart();
        setCartItems(data);
        //console.log(cartItems);
        let amount = 0;
        data.map((item) => amount = amount + item.price);
        console.log(amount);
        setDiscount(0.1 * amount)
        setTotal(amount);
        setFinal(amount - (0.1 * amount));

    }

    const handledelete = async (id) => {
        await deleteCart(id);
        fetchFood();
    }

    return (
        <div className="cartpage">
            <div className="cart">
                <h2>Cart</h2>
                {cartItems.map((item) => (<div className="cart-items">
                    <div className="cart-item">
                        <img src={item.image} />
                        <div className="cart-item-info">
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                        </div>
                        <button onClick={() => handledelete(item.id)}>Delete</button>
                    </div>
                </div>))}


            </div>
            <div className="total-box">
                <h3>Bill Summary</h3>
                <div className="total-item">
                    <span>Total Amount:</span>
                    <span>{total}</span>
                </div>
                <div className="total-item">
                    <span>Discount:</span>
                    <span>{discount}</span>
                </div>
                <div className="total-item" style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                    <span>Final Amount:</span>
                    <span>{final}</span>
                </div>
                <button className="order-button">Order</button>
            </div>

        </div>)
}