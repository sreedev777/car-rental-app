import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'


const ViewCars = () => {
     const [data,changeData]=useState([])
    const fetchData =()=>{
        axios.get("https://host-demo-app.onrender.com/api/cars").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (

    <div>
        <NavBar/>
         <div className="container mt-5">
    <h2 className="heading text-center mb-4">
        All CAR DETAILS
    </h2>

    <div className="row g-4">
        {
            data.map((value, index) => (
                <div className="col-12 col-sm-6 col-lg-4" key={index}>
                    <div className="card course-card h-100">

                        <div className="card-header text-center text-light">
                            <p>
                                <strong> Registration_number:</strong><br />
                                {value.registration_number}
                            </p>
                        </div>
                        
                        <div className="card-body text-light">

                            

                            <p>
                                <strong>Brand:</strong><br />
                                ₹ {value.brand}
                            </p>

                            <p>
                                <strong>Model:</strong><br />
                                {value.model}
                            </p>

                            <p>
                                <strong> Vehicle_Type:</strong><br />
                                {value.vehicle_type}
                            </p>
                             <p>
                                <strong> Fuel_Type:</strong><br />
                                {value.fuel_type}
                            </p>
                            <p>
                                <strong> Transmission":</strong><br />
                                {value.transmission}
                            </p>
                            <p>
                                <strong> Rent_Per_Day:</strong><br />
                                {value.rent_per_day}
                            </p>
                             <p>
                                <strong> City:</strong><br />
                                {value.city}
                            </p>
                             <p>
                                <strong>Availability_Status:</strong><br />
                                {value.availability_status}
                            </p>
                             <p>
                                <strong>Created_At:</strong><br />
                                {value.created_at}
                            </p>
                            

                        </div>

                        <div className="card-footer text-center">
                            <small className="text text-dark">
                                Car ID : {value.id}
                                
                            </small>
                        </div>

                    </div>
                </div>
            ))
        }
    </div>
</div>
    </div>
  )
}

export default ViewCars