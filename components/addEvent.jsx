import React from "react";
import "./addEvent.css";
import axios from "axios";
import { useState } from "react";
import logo from "../imgs/logo.jpg";
import loading from "../imgs/loading.gif";
import { useNavigate } from "react-router-dom";

function AddEvent() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [load, setLoad] = useState(false);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoad(true);
    const formData = new FormData();
    formData.append("name", name);
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/addEvent",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setLoad(false);
      navigate("/");
    } catch (error) {
      console.error("Error uploading files:", error);
      navigate("/");
    }
  };

  return (
    <div className="parent">
      <img src={logo} alt="" />

      {!load ? (
        <form onSubmit={handleSubmit}>
          <h1>Add Event</h1>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="image">Upload Image:</label>
          <input type="file" multiple onChange={handleFileChange} required />

          <button type="submit">Add Event</button>
        </form>
      ) : (
        <div>
          <h4>This may take some time ...</h4>
          <img
            src={loading}
            style={{ width: "300px", marginLeft: "calc(50% - 300px / 2)" }}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default AddEvent;
