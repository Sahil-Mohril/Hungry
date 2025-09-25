import React, { useEffect, useState } from "react";
import foodcss from "./food-menu.css";
import { getRest } from "./FoodManager";
export default function BookingStatus() {
    const [rest, setRest] = useState([]);
    useEffect(() => { fetchRest() }, []);

    const fetchRest = async () => {
        const data = await getRest();
        setRest(data);
    }

    return (<>
        <div className="food-menu">
            <div className="Headbox">
                <img src="dine.jpg" />
                <h3>Your Table Awaits<br />Book Now and Dine in Style!</h3>
            </div>
            <div className="Statusbox">
                <img src="" />

                <div className="Restraunt">
                    <h1>Your Booking</h1><br />
                    <h2>Restraunt</h2>
                    <div className="address">
                        <img src="location.png" />Address
                    </div>
                    <div className="Order">Order: item1, item2, item3</div>
                </div>
                <div className="date">14th January 2025</div>
                <div className="time">12:00 PM</div>
                <div className="members">5 members</div>
                <button className="edit-button">Edit</button>


            </div>
            <div className="search-bar">
                <form><input type="text" name="search" placeholder="Search for Restraunts" /></form>
                <button type="submit">Search</button>
            </div>
            <div className="editbox"></div>
            <div className="items2">
                {rest.map((rest) => (<div className="box2">
                    <img src={rest.image} />
                    <div className="abc">
                        <h2>{rest.name}</h2>
                        <p>{rest.address}</p>
                        <p>{rest.description}</p>
                    </div>
                </div>))}






            </div>
        </div></>

    );
};


// import React, { useEffect, useState } from "react";
// import foodcss from "./food-menu.css";
// import { getRest } from "./FoodManager";

// export default function BookingStatus() {
//     const [rest, setRest] = useState([]);
//     const [showPopup, setShowPopup] = useState(false);
//     const [bookingDetails, setBookingDetails] = useState({
//         restaurant: "",
//         date: "",
//         time: "",
//         members: ""
//     });

//     useEffect(() => { fetchRest() }, []);

//     const fetchRest = async () => {
//         const data = await getRest();
//         setRest(data);
//     };

//     const handleInputChange = (e) => {
//         setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Booking Details:", bookingDetails);
//         setShowPopup(false);
//     };

//     return (
//         <>
//             <div className="food-menu">
//                 <div className="Headbox">
//                     <img src="dine.jpg" alt="Dine" />
//                     <h3>Your Table Awaits<br />Book Now and Dine in Style!</h3>
//                 </div>
//                 <div className="Statusbox">
//                     <div className="Restraunt">
//                         <h1>Your Booking</h1>
//                         <h2>Restaurant</h2>
//                         <div className="address">
//                             <img src="location.png" alt="Location" />Address
//                         </div>
//                         <div className="Order">Order: item1, item2, item3</div>
//                     </div>
//                     <div className="date">{bookingDetails.date || "Select Date"}</div>
//                     <div className="time">{bookingDetails.time || "Select Time"}</div>
//                     <div className="members">{bookingDetails.members || "Select Members"} members</div>
//                     <button className="edit-button" onClick={() => setShowPopup(true)}>Edit</button>
//                 </div>
//                 <div className="search-bar">
//                     <form><input type="text" name="search" placeholder="Search for Restaurants" /></form>
//                     <button type="submit">Search</button>
//                 </div>
//                 <div className="items2">
//                     {rest.map((restItem) => (
//                         <div className="box2" key={restItem.id}>
//                             <img src={restItem.image} alt={restItem.name} />
//                             <div className="abc">
//                                 <h2>{restItem.name}</h2>
//                                 <p>{restItem.address}</p>
//                                 <p>{restItem.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {showPopup && (
//                 <div className="popup-overlay">
//                     <div className="popup-content">
//                         <h2>Edit Booking</h2>
//                         <form onSubmit={handleSubmit}>
//                             <label>Restaurant:</label>
//                             <select name="restaurant" value={bookingDetails.restaurant} onChange={handleInputChange}>
//                                 <option value="">Select</option>
//                                 {rest.map((r) => (
//                                     <option key={r.id} value={r.name}>{r.name}</option>
//                                 ))}
//                             </select>
//                             <label>Date:</label>
//                             <input type="date" name="date" value={bookingDetails.date} onChange={handleInputChange} />
//                             <label>Time:</label>
//                             <input type="time" name="time" value={bookingDetails.time} onChange={handleInputChange} />
//                             <label>Members:</label>
//                             <input type="number" name="members" value={bookingDetails.members} onChange={handleInputChange} min="1" />
//                             <button type="submit">Save</button>
//                             <button type="button" onClick={() => setShowPopup(false)}>Cancel</button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }