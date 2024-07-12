"use client"
import Navbar from "@/components/bootstrapclient/Navbar";
import Link from "next/link";
import React from "react";
import { useState,useEffect } from "react";
import Preloader from "@/components/preloader/Preloader";
const page = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); 
  
      return () => clearTimeout(timer); 
    }, []);
  
    if (loading) {
      return <Preloader />;
    }
  return (
    <div className="preview">
      <Navbar />
      <div className="contents p-3">
        <Link href={"/conformation"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19L5 12L12 5"
              stroke="black"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 12H5"
              stroke="black"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h5>
                1 BHK Flat / Apartment For Rent in Gokul Village Chs 2 (545
                Sq.ft.){" "}
              </h5>
              <p className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  style={{ marginRight: "5px" }}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                Gokul village chs 2 Shanti Park, near st. Xaviours High school
              </p>
              <img
                src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1720750538/6d1c19e8-1969-4b2c-88a7-df7b144b0ccb.png"
                className="img-fluid"
              ></img>
            </div>
            <div className="col-12 col-lg-4">
              <img
                className="img-fluid"
                src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1720750628/cc3b88bb-d3cc-4d76-b966-a53620b09081.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="container p-5">
          <img
            src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1720750208/3505881c-bb90-4161-8584-4412ce35cc5e.png"
            className="img-fluid"
          ></img>
        </div>
        <div className="container p-5">
          <img
            src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1720750435/086159d7-0169-43b8-8720-5dc12b8b4b00.png"
            className="img-fluid"
          ></img>
        </div>
        <div className="container p-5">
          <h5>Description</h5>
          <p>
            Spread over 510 sqft. this home is an ideal place to live in. Access
            to bus station & medical stores is very easy & convenient from this
            house. If you are a frequent traveller, then you'll be happy to note
            that train station is less than 10 minutes from this house. With PVR
            Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch
            your favourite movies running & never worry about missing a show
            because of traffic. Never miss out on lifestyle as Rassaz Mall......
          </p>
          <Link href={"#"}>Show more</Link>
        </div>
        <div className="container">
        
        <img src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1720750818/8c5d44ba-697a-4604-938c-ebc208d94418.png" className="img-fluid"></img>
        </div>
        
      </div>
      <div className="conta">
        <img src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1720750895/c3e2b47b-bfc9-4247-91e6-65eebba8c08e.png" className="img-fluid"></img>
        </div>
    </div>
  );
};

export default page;
