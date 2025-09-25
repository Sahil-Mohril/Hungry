import React, { useEffect, useState } from "react";
// import foodmenu from "./food-menu.css";
import { getFood } from "./FoodManager";
import HeadPic from "./Photos/Chinese.png"
export default function NorthIndian() {
    const [foodItems, setFoodItems] = useState([]);
    const [searchFood, setsearchFood] = useState("");
    useEffect(() => {
        fetchFood();
    }, []);

    const fetchFood = async () => {
        const data = await getFood();
        setFoodItems(data.filter((food) => food.cuisine == "Chinese"));
    };
    const searchFoodItems = async () => {
        await fetchFood();
        setFoodItems(foodItems.filter((food) => food.name == searchFood));
    }
    return (<div className="food-menu">
        <div className="Headbox">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-R4y4s7Q2xAD5Is0sPThZy_pYjEXJOcf1Q&s" />
            <h3>Taste of<br />Chinese</h3>
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
                <div className="veg">Veg</div>
                <div className="nonveg">Non Veg</div>
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
                        <form><input type='text' placeholder="choose Restaurant" /></form>
                        <div className="quantity">

                        </div>
                    </div>
                    <div>
                        <button>Add To Cart</button>
                    </div>
                </div>))}
        </div>

    </div>)
}