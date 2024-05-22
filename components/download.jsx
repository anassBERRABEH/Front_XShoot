import React from "react";
import logo from "../imgs/logo.jpg";
import "./download.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdFileDownload } from "react-icons/md";

function Download() {
  const location = useLocation();
  const infos = location.state || {};
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000//list_images/${infos.name}/${infos.bib}`
        );
        setImages(response.data.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div
      className="download"
      style={{ backgroundColor: "#F2F5F9", height: "100vh" }}
    >
      <div className="top_page">
        <div style={{ padding: "2rem" }}>
          <img
            src={logo}
            alt="Logo"
            className="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="center-icon">
          <h1 className="title">{infos.bib}</h1>
        </div>
        <div className="center-icon" style={{ padding: "2rem" }}>

          <a
            style={{ textDecoration: "none" }}
            href={`http://localhost:5000/download_all_images/${infos.name}/${infos.bib}`}
            target="_blank"
            rel="noopener noreferrer"
          >

            <button className="button center-icon">Download All</button>
          </a>
        </div>
      </div>
      <div className="float">
        {images.map((image, index) => (
          <div className="forImg">
            <img
              style={{ width: "200px", borderRadius: "11px", margin: "10px" }}
              key={index}
              src={`http://localhost:5000/${image}`}
              alt={`Uploaded ${image}`}
              width="100"
            />
            <a
              href={`http://localhost:5000/download_image/${infos.name}/${image
                .split("\\")
                .pop()}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="download_imge">
                <MdFileDownload style={{ color: "white" }} className="icon" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Download;
