import React from "react";
import "./event.css";
import image1 from "../imgs/image1.jpg";
import image2 from "../imgs/image2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/events");
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const navigate = useNavigate();

  const handleClick = (event) => {
    console.log(event.date);
    navigate("/search", { state: event });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {events.map((event, index) => (
            <div key={index} className="column">
              <div className="box" onClick={() => handleClick(event)}>
                <img id="ims" src={image1} alt={`Image ${index + 1}`} />
                <h2>{event.name}</h2>
                <p>{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Event;
