import React, { useState } from "react";
import { Hotel } from "../../type/Hotel";
import { useNavigate } from "react-router-dom";
import "./addHotel.css";

const AddHotel: React.FC = () => {
  const [hotel, setHotel] = useState<Hotel>({
    hotelId: 0,
    hotelName: "",
    hotelAddress: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: name === "hotelId" ? parseInt(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic (optional)
  };

  return (
    <div className="add-hotel-wrapper">
      <div className="add-hotel-container">

        <div className="back-button" onClick={() => navigate('/')}>
          ← Back
        </div>

        <h2>Hotel Details</h2>
        <form onSubmit={handleSubmit}>
          <label>Hotel ID</label>
          <input
            type="number"
            name="hotelId"
            value={hotel.hotelId}
            onChange={handleChange}
            required
          />

          <label>Hotel Name</label>
          <input
            type="text"
            name="hotelName"
            value={hotel.hotelName}
            onChange={handleChange}
            required
          />

          <label>Hotel Address</label>
          <input
            type="text"
            name="hotelAddress"
            value={hotel.hotelAddress}
            onChange={handleChange}
            required
          />

          <button type="submit">Save Hotel</button>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
