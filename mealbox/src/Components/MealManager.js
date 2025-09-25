import React from "react";
import axios from "axios";

const url = "/api/meals";

export const getMeals = async () => {
    const response = await axios.get(url);
    return response.data;
}

export const addmeal = async (newmeal) => {
    const response = await axios.post(url, newmeal)
}

export const deleteMeal = async (id) => {
    await axios.delete(url + '/' + id);
}