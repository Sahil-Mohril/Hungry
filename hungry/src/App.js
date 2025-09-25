import Login from "./Components/login";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
//import loginstyle from "./Styles/loginstyle.css";
import HomeStyle from "./Styles/HomeStyle.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NorthIndian from "./Components/NorthIndian";
import SouthIndian from "./Components/SouthIndian";
import Chinese from "./Components/Chinease";
import Contintental from "./Components/Continental"
import Cart from "./Components/Cart";
import Beverages from "./Components/Beverages";
import Dinout from './Components/Dinout'
import Sweets from './Components/Sweets'
import Snacks from "./Components/Snacks"
import Salad from "./Components/Salad"
import Wallet from "./Components/Wallet";
export default function App() {
  return <>
    <NavBar />
    {<Routes>
      {<Route path="/" element={<Home />} />}
      <Route path="/northIndian" element={<NorthIndian />} />
      <Route path="/southIndian" element={<SouthIndian />} />
      {<Route path="/chinese" element={<Chinese />} />}
      <Route path="/continental" element={<Contintental />} />
      {<Route path="/cart" element={<Cart />} />}
      {<Route path="/beverages" element={<Beverages />} />}
      {<Route path="/dineout" element={<Dinout />} />}
      {<Route path="/sweets" element={<Sweets />} />}
      {<Route path="/snacks" element={<Snacks />} />}
      {<Route path="/salad" element={<Salad />} />}
      {<Route path="/wallet" element={<Wallet />} />}
    </Routes>}
  </>
}
