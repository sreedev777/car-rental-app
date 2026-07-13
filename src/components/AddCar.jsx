import axios from "axios";
import React, { useState } from "react";


const AddVehicle = () => {
  const [input, setInput] = useState({
    registration_number: "",
    brand: "",
    model: "",
    vehicle_type: "",
    fuel_type: "",
    transmission: "",
    seating_capacity: "",
    rent_per_day: "",
    city: "",
    availability_status: "Available",
  });

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValues = () => {
    console.log(input)
    axios.post("https://host-demo-app.onrender.com/api/add-car",input).then(
      (response)=>{
        console.log(response.data)
        alert("car details added")
      }
    ).catch()
  };

  return (
    <div>
    

      <h1 className="text-center mt-3">Vehicle Registration</h1>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row g-3">

              {/* Registration Number */}
              <div className="col-12 col-md-6">
                <label className="form-label">Registration Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="registration_number"
                  value={input.registration_number}
                  onChange={inputHandler}
                />
              </div>

              {/* Brand */}
              <div className="col-12 col-md-6">
                <label className="form-label">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  value={input.brand}
                  onChange={inputHandler}
                />
              </div>

              {/* Model */}
              <div className="col-12 col-md-6">
                <label className="form-label">Model</label>
                <input
                  type="text"
                  className="form-control"
                  name="model"
                  value={input.model}
                  onChange={inputHandler}
                />
              </div>

              {/* Vehicle Type */}
              <div className="col-12 col-md-6">
                <label className="form-label">Vehicle Type</label>
                <select
                  className="form-select"
                  name="vehicle_type"
                  value={input.vehicle_type}
                  onChange={inputHandler}
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="MUV">MUV</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>

              {/* Fuel Type */}
              <div className="col-12 col-md-6">
                <label className="form-label">Fuel Type</label>
                <select
                  className="form-select"
                  name="fuel_type"
                  value={input.fuel_type}
                  onChange={inputHandler}
                >
                  <option value="">Select Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="CNG">CNG</option>
                </select>
              </div>

              {/* Transmission */}
              <div className="col-12 col-md-6">
                <label className="form-label">Transmission</label>
                <select
                  className="form-select"
                  name="transmission"
                  value={input.transmission}
                  onChange={inputHandler}
                >
                  <option value="">Select Transmission</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
              </div>

              {/* Seating Capacity */}
              <div className="col-12 col-md-6">
                <label className="form-label">Seating Capacity</label>
                <input
                  type="number"
                  min="2"
                  max="10"
                  className="form-control"
                  name="seating_capacity"
                  value={input.seating_capacity}
                  onChange={inputHandler}
                />
              </div>

              {/* Rent Per Day */}
              <div className="col-12 col-md-6">
                <label className="form-label">Rent Per Day (₹)</label>
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  name="rent_per_day"
                  value={input.rent_per_day}
                  onChange={inputHandler}
                />
              </div>

              {/* City */}
              <div className="col-12 col-md-6">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={input.city}
                  onChange={inputHandler}
                />
              </div>

              {/* Availability Status */}
              <div className="col-12 col-md-6">
                <label className="form-label">Availability Status</label>
                <select
                  className="form-select"
                  name="availability_status"
                  value={input.availability_status}
                  onChange={inputHandler}
                >
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="col-12">
                <button
                  className="btn btn-primary"
                  onClick={readValues}
                >
                  Register Vehicle
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;