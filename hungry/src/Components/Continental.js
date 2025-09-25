import React, { useEffect, useState } from "react";
import foodmenu from "./food-menu.css";
import { getFood, addFood } from "./FoodManager";
import HeadPic from "./Photos/continental.png"
export default function Continenatal() {
    const [foodItems, setFoodItems] = useState([]);
    const [mainItems, setMainItems] = useState([]);
    const [searchFood, setsearchFood] = useState("");
    const [veg, setVeg] = useState(false);
    const [cart, setCart] = useState({});
    useEffect(() => {
        fetchFood();
    }, []);

    const fetchFood = async () => {
        const data = await getFood();
        setFoodItems(data.filter((food) => food.cuisine == "Continental"));
        setMainItems(data.filter((food) => food.cuisine == "Continental"));
    };
    const searchFoodItems = async () => {
        await fetchFood();
        setFoodItems(mainItems.filter((food) => food.name == searchFood));
    }

    const changeVeg = async () => {
        setVeg(true);
        await fetchFood();
        setFoodItems(mainItems.filter((food) => food.type == "Veg"))

    }
    const changeNonVeg = async () => {
        setVeg(false);
        await fetchFood();
        setFoodItems(mainItems.filter((food) => food.type == "Non Veg"))

    }
    const handleCart = async (food) => {
        await addFood(food);

    }

    return (<div className="food-menu">
        <div className="Headbox">
            <img src={HeadPic} />
            <h3>Taste of Elegance from<br /> Around the World!</h3>
        </div>
        <div className="search-bar">
            <form onSubmit={(e) => e.preventDefault()}><input type="text" name="search" placeholder="Search North Indian Cusine" onChange={(e) => setsearchFood(e.target.value)} value={searchFood} /></form>
            <button type="submit" onClick={searchFoodItems}>Search</button>

        </div>
        <div className="optbar">
            <div className="options">
                <div className="type">Select Meal</div>
                <div className="option show">Breakfast</div>
                <div className="option show">Lunch</div>
                <div className="option show">Dinner</div>
                <div className="option show last">Snacks</div>
            </div>
            <div className="switch">
                {veg ? (<><div className="veg" onClick={() => changeVeg()} style={{ backgroundColor: "green", cursor: "pointer" }}>Veg</div>
                    <div className="nonveg" onClick={() => changeNonVeg()} style={{ backgroundColor: "white", cursor: "pointer" }}>Non Veg</div>
                </>) : (<><div className="veg" onClick={() => changeVeg()} style={{ backgroundColor: "white", cursor: "pointer" }}>Veg</div>
                    <div className="nonveg" onClick={() => changeNonVeg()} style={{ backgroundColor: "red", cursor: "pointer" }}> Non Veg</div>
                </>
                )}
            </div>


        </div>
        <div className="items">
            {foodItems.map((food) => (
                <div className="box" key={food.id}>
                    <img src={food.image} />
                    <div className="description">
                        <div className="item-name">{food.name}</div>
                        <div className="price">{food.price}</div>
                        <div className="rating"></div>
                        <div className="about">{food.description}</div>
                    </div>
                    <div>
                        <select className="choose">
                            <option value="">Choose Restaurant</option>
                            {food.restaurant.map((rest, index) => (
                                <option key={index} value={rest}>{rest}</option>
                            ))}
                        </select>
                        <div className="quantity">

                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleCart(food)}>Add To Cart</button>
                    </div>
                </div>))}
        </div>

    </div>)
}