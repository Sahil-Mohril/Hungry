import React from "react";
import "./food-menu.css";

export default function Wallet() {
    return (
        <div className="wallet">
            <h2>Wallet</h2>
            <div className="wallet-content">
                <p>Current Balance:</p>
                <div className="amount">₹4,000</div>
                <button className="add-money">Add Money</button>
            </div>
        </div>
    );
}
