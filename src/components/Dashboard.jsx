import React from "react";
import "./Dashboard.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
const parkingData = [
  { name: "Express Avenue Mall Parking", address: "Express Avenue Mall, Whites Road, Chennai", distance: "2.5 km", totalSlots: 50, availableSlots: 20 },
  { name: "Marina Beach Parking", address: "Kamarajar Promenade, Marina Beach, Chennai", distance: "3.2 km", totalSlots: 60, availableSlots: 35 },
  { name: "Egmore Railway Station Parking", address: "Railway Station, Whenners Road, Chennai", distance: "4.0 km", totalSlots: 80, availableSlots: 50 },
  { name: "Thirumangalam Metro Station Parking", address: "L Block, Kurinji Colony, Anna Nagar, Chennai", distance: "5.1 km", totalSlots: 40, availableSlots: 15 },
  { name: "CMBT Koyambedu Bus Stand Parking", address: "Koyambedu, Chennai, Tamil Nadu", distance: "6.8 km", totalSlots: 100, availableSlots: 60 },
  { name: "Velachery Railway Station South Entry Parking", address: "Velachery Main Road, Subramaniam Colony, Velachery, Chennai", distance: "7.3 km", totalSlots: 70, availableSlots: 30 },
  { name: "Express Avenue Mall Parking", address: "Express Avenue Mall, Whites Road, Chennai", distance: "2.5 km", totalSlots: 50, availableSlots: 20 },
  { name: "Marina Beach Parking", address: "Kamarajar Promenade, Marina Beach, Chennai", distance: "3.2 km", totalSlots: 60, availableSlots: 35 },
  { name: "Egmore Railway Station Parking", address: "Railway Station, Whenners Road, Chennai", distance: "4.0 km", totalSlots: 80, availableSlots: 50 },
  { name: "Thirumangalam Metro Station Parking", address: "L Block, Kurinji Colony, Anna Nagar, Chennai", distance: "5.1 km", totalSlots: 40, availableSlots: 15 },
  { name: "CMBT Koyambedu Bus Stand Parking", address: "Koyambedu, Chennai, Tamil Nadu", distance: "6.8 km", totalSlots: 100, availableSlots: 60 },
  { name: "Velachery Railway Station South Entry Parking", address: "Velachery Main Road, Subramaniam Colony, Velachery, Chennai", distance: "7.3 km", totalSlots: 70, availableSlots: 30 }
];

const Dashboard = () => {
  const navigate = useNavigate();


  return (
    <div className="dashboard">
      <h1 className="title">Find  Your  Nearest  Parking</h1>
      <div className="grid-container">
        {parkingData.map((parking, index) => (
          <div className="card" key={index}>
            <h2 style={{ color: "black" }}>{parking.name}</h2>

            <p><strong>Address:</strong> {parking.address}</p>
            <p><strong>Distance:</strong> {parking.distance}</p>
            <p><strong>Available Slots:</strong> {parking.availableSlots} / {parking.totalSlots}</p>
            <button onClick={() => navigate("/smart-parking")}>Book Now</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
