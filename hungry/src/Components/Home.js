import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './Photos/logos.png';
import order from './Photos/fast-food.png';
import tiffin from './Photos/tiffin.png';
import northIndian from './Photos/North-indian.png';
import southIndian from './Photos/South-indian.png';
import chinese from './Photos/Chinese.png';
import continental from './Photos/Continenatal.png';
import drink from './Photos/drink.png';
import iceCream from './Photos/ice-cream.png';
import nachos from './Photos/nachos.png';
import salad from './Photos/salad.png';
import dineout from './Photos/dinner.png'
import points from './Photos/points.png'
import wallet from './Photos/wallet2.png'
import cart from './Photos/cart.png'
export default function Home() {
    return <>

        <div className="search">
            <div className="image"><img src={logo} alt="Company Logo" /></div>
            <h1>Hungry??</h1>
            <p>Order Now!</p>
            <div className="search-bar">
                <form><input type="text" placeholder="Search" name="search" /></form>
                <button type="submit">Search</button>
            </div>
            <div className="menu">
                <div className="box">
                    <a href="order.html">
                        <img src={order} alt="Order" />
                        <h3>Order</h3>
                        <p></p>
                    </a>
                </div>

                <div className="box">
                    <Link to="http://localhost:3001/">
                        <img src={tiffin} alt="Mealbox" />
                        <h3>Mealbox</h3>
                        <p></p>
                    </Link>
                </div>

                <div className="box">
                    <Link to="/dineout">
                        <img src={dineout} alt="DineOut" />
                        <h3>DineOut</h3>
                        <p></p>
                    </Link>
                </div>
                <div className="box">
                    <img src={points} alt="Hunger Points" />
                    <h3>Hunger Points</h3>
                    <p></p>
                </div>
                <div className="box">
                    <Link to="/wallet">
                        <img src={wallet} alt="Wallet" />
                        <h3>Wallet</h3>
                        <p></p>
                    </Link>
                </div>
                <div className="box">
                    <Link to="/cart">
                        <img src={cart} />
                        <h3>Cart</h3>
                        <p></p>
                    </Link>
                </div>
            </div>
            <div className="Explore">
                <p>Explore</p>
                <div className="Category">
                    <div className="box">
                        <Link to="/northIndian">
                            <img src={northIndian} />
                            <h2>North Indian</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/southIndian">
                            <img src={southIndian} />
                            <h2>South Indian</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/chinese">
                            <img src={chinese} />
                            <h2>Chinese</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to='/continental'>
                            <img src={continental} />
                            <h2>Continental</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/beverages">
                            <img src={drink} />
                            <h2>Beverages</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/sweets">
                            <img src={iceCream} />
                            <h2>Sweets</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/snacks">
                            <img src={nachos} />
                            <h2>Snacks</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to='/salad'>
                            <img src={salad} />
                            <h2>Diet</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}


