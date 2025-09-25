import axios from "axios";

// const url = "http://localhost:5000/foods";
// const urlcart = "http://localhost:5000/Cart";
// const urlrest = "http://localhost:5000/Restaurant";
const url = "api/foods";
const urlcart = "api/Cart";
const urlrest = "api/Restaurant";

export const getFood = async () => {
    const response = await axios.get(url);
    return response.data;
};
export const getCart = async () => {
    const response = await axios.get(urlcart);
    return response.data;
}
export const addFood = async (food) => {
    const response = await axios.post(urlcart, food);
    return response.data;
}
export const deleteCart = async (id) => {
    console.log("Here");
    const response = await axios.delete(urlcart + '/' + id);
}
export const getRest = async () => {
    const response = await axios.get(urlrest);
    return response.data;
}
