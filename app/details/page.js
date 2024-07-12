"use client";
import Navbar from "@/components/bootstrapclient/Navbar";
import Link from "next/link";
import { useState } from "react";

const tabs = [
  { name: "Property Details", content: PropertyDetails },
  { name: "Location Details", content: LocationDetails },
  { name: "Features & Amenities", content: FeaturesAmenities },
  { name: "Price Details", content: PriceDetails },
  { name: "Property Images", content: PropertyImages },
];

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);
  const [visitedTabs, setVisitedTabs] = useState([0]);
  const [showOverlay, setShowOverlay] = useState(false);

  const TabContent = tabs[currentTab].content;

  const handleTabClick = (index) => {
    setCurrentTab(index);
    if (!visitedTabs.includes(index)) {
      setVisitedTabs([...visitedTabs, index]);
    }
  };

  const handleNext = () => {
    if (currentTab < tabs.length - 1) {
      const nextTab = currentTab + 1;
      setCurrentTab(nextTab);
      if (!visitedTabs.includes(nextTab)) {
        setVisitedTabs([...visitedTabs, nextTab]);
      }
    } else {
      setShowOverlay(true);
    }
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  return (
    <div>
      <Navbar />
      <div className="outer">
        <div className="container inner">
          <div className="tabContainer">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={
                  visitedTabs.includes(index)
                    ? "activeTab"
                    : "tab d-none d-lg-block d-md-block"
                }
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="contentContainer">
            <TabContent />
          </div>
          <div className="botm">
            <p>Need Help? Call 9999999999</p>
            <div className="buttonContainer">
              {currentTab < tabs.length - 1 ? (
                <button className="nextButton" onClick={handleNext}>
                  Next
                </button>
              ) : (
                
                  <button className="nextButton" onClick={handleNext}>
                    SAVE & POST
                  </button>
                
              )}
            </div>
          </div>
        </div>
      </div>
      {showOverlay && (
        <div className="overlay">
          <div> </div>
          <div className="overlayContent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="black"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
              onClick={handleOverlayClose}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
            <h5 className="my-5">POST PROPERTY ON DYLAN ESTATE?</h5>
            <Link href={"/conformation"}>
            <button
              className="removebtn"
              style={{ width: "100%", padding: "0px" }}
            >
              Continue
            </button>
            </Link>
            <p>
              By continuing you agree to our Terms and Conditions & Privacy
              Policy
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function PropertyDetails() {
  const [propertyType, setPropertyType] = useState("");

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  return (
    <div className="propertyd">
      <form>
        <div className="d-flex propertyi">
          <label>
            <span style={{ color: "red" }}>*</span>Property For:
          </label>
          <div className="custom-radio row">
            <div className="col-6">
              <label>
                <input type="radio" name="propertyFor" value="Rent" /> Rent
              </label>
            </div>
            <div className="col-6">
              <label>
                <input type="radio" name="propertyFor" value="Sale" /> Sale
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label>
            <span style={{ color: "red" }}>*</span>Property Type:
          </label>
          <div className="custom-radio row">
            <div className="col-12 col-lg-3">
              <label>
                <input
                  type="radio"
                  name="propertyType"
                  value="Residential"
                  onChange={handlePropertyTypeChange}
                />{" "}
                Residential
              </label>
            </div>
            <div className="col-12 col-lg-3">
              <label>
                <input
                  type="radio"
                  name="propertyType"
                  value="Commercial"
                  onChange={handlePropertyTypeChange}
                />{" "}
                Commercial
              </label>
            </div>
            <div className="col-12 col-lg-3">
              <label>
                <input
                  type="radio"
                  name="propertyType"
                  value="Land/Plot"
                  onChange={handlePropertyTypeChange}
                />{" "}
                Land / Plot
              </label>
            </div>
          </div>
        </div>
        {propertyType === "Residential" && (
          <div>
            <div className="options">
              <button type="button">Flat / Apartment</button>
              <button type="button">House / Villa</button>
            </div>
          </div>
        )}
        {propertyType === "Commercial" && (
          <div>
            <div className="options">
              <button type="button">Office Space</button>
              <button type="button">Shop</button>
              <button type="button">Industrial Bldg.</button>
              <button type="button">Shop/Showroom</button>
              <button type="button">Restaurant /Cafe</button>
              <button type="button">Office Space</button>
            </div>
          </div>
        )}
        <div className="row mt-5">
          <div className="display col-12 col-lg-6">
            <label>
              Built-up Area <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" name="builtUpArea" placeholder="Sq. Ft." />
          </div>
          <div className="display col-12 col-lg-6">
            <label>
              Carpet Area <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" name="carpetArea" placeholder="Sq. Ft." />
          </div>
        </div>
        <div className="d-flex row mt-5 display flex-row">
          <div className="col-12 col-lg-4 d-flex flex-column">
            <label>
              Carpet Area <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" name="carpetArea" placeholder="Sq. Ft." />
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column">
            <label>
              Total Floors <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" name="carpetArea" placeholder="Sq. Ft." />
          </div>{" "}
          <div className="col-12 col-lg-4 d-flex flex-column">
            <label>
              Property Facing<span style={{ color: "red" }}>*</span>
            </label>
            <select id="directions">
              <option value="north">North</option>
              <option value="north">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>
          </div>
        </div>
        <div className="mt-5 d-flex flex-column">
          <label>
            Property Age<span style={{ color: "red" }}>*</span>
          </label>
          <div className="options mt-2">
            <div className="row">
              <div className="col-12 col-lg-4">
                <button type="button">Less than 1 Year</button>
              </div>
              <div className="col-12 col-lg-4">
                <button type="button">1- 3 Years</button>
              </div>
              <div className="col-12 col-lg-4">
                <button type="button">3- 5 Years</button>
              </div>
              <div className="col-12 col-lg-4">
                <button type="button">5 - 10 Years</button>
              </div>

              <div className="col-12 col-lg-4">
                <button type="button">Greater than 10 Years</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function LocationDetails() {
  return (
    <div>
      <div className="container propertyd">
        <div className="row ">
          <div className="col-12 col-lg-6 col-md-6 d-flex flex-column">
            <label>
              Building/ Society Name<span style={{ color: "red" }}>*</span>
            </label>
            <select id="directions">
              <option value="" disabled selected>
                Enter Apartment Name
              </option>
              <option value="north">apartment 1</option>
              <option value="East">apartment 2</option>
              <option value="West">apartment 3</option>
            </select>
          </div>

          <div className="col-12 col-lg-6 col-md-6 d-flex flex-column">
            <label>
              Locality / Area<span style={{ color: "red" }}>*</span>
            </label>
            <select id="directions" placeholder="Enter Apartment Name">
              <option value="" disabled selected>
                Eg : sheetal nagar
              </option>
              <option value="north">Name 1</option>
              <option value="East">Name 2</option>
              <option value="West">Name 3</option>
            </select>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12 col-lg-6 col-md-6 d-flex flex-column">
            <label>
              Landmark / Street Name<span style={{ color: "red" }}>*</span>
            </label>
            <select id="directions">
              <option value="" disabled selected>
                Prominent Landmark
              </option>
              <option value="north">apartment 1</option>
              <option value="East">apartment 2</option>
              <option value="West">apartment 3</option>
            </select>
          </div>

          <div className="col-12 col-lg-6 col-md-6 d-flex flex-column">
            <label>
              City<span style={{ color: "red" }}>*</span>
            </label>
            <select id="directions" placeholder="Enter Apartment Name">
              <option value="" disabled selected>
                {" "}
                Mumbai, Maharashtra
              </option>
              <option value="north">Name 1</option>
              <option value="East">Name 2</option>
              <option value="West">Name 3</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="col-12">
            <div className="map">
              <div className="inpd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                  className="loca"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <input
                  type="text"
                  placeholder="Search your society or nearest landmark (google api is paid cannot add search functionality now)"
                ></input>
              </div>{" "}
              <iframe
                style={{ width: "100%" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15229.373039323951!2d78.52583024060517!3d17.395306924423842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720668776184!5m2!1sen!2sin"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesAmenities() {
  return (
    <div className="propertyd">
      <h2 style={{ fontSize: "18px", fontWeight: "bold" }} className="mb-5">
        General Features
      </h2>
      <form>
        <div className="d-flex propertyi mt-5">
          <label style={{ fontWeight: "bold", fontSize: "18px" }}>
            <span style={{ color: "red" }}>*</span>Non- Veg:
          </label>
          <div className="custom-radio row">
            <div className="col-6">
              <label>
                <input type="radio" name="propertyFor" value="Rent" /> Allowed
              </label>
            </div>
            <div className="col-6">
              <label>
                <input type="radio" name="propertyFor" value="Sale" /> Not
                allowed
              </label>
            </div>
          </div>
        </div>

        <div className="d-flex propertyi mt-5">
          <label
            className="mt-5"
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            <span style={{ color: "red" }}>*</span>Pets Allowed
          </label>
          <div className="custom-radio row">
            <div className="col-6">
              <label>
                <input type="radio" name="propertyFor" value="Rent" /> Yes
              </label>
            </div>
            <div className="col-6">
              <label>
                <input type="radio" name="propertyFor" value="Sale" /> No
              </label>
            </div>
          </div>
        </div>

        <div className="d-flex propertyi mt-5">
          <div className="d-flex propertyi mt-5">
            <label style={{ fontWeight: "bold", fontSize: "18px" }}>
              <span style={{ color: "red" }}>*</span>Electricity
            </label>
            <div className="custom-radio row">
              <div className="col-6">
                <label>
                  <input type="radio" name="propertyFor" value="Rent" /> Rare/No
                  Powercut
                </label>
              </div>
              <div className="col-6">
                <label>
                  <input type="radio" name="propertyFor" value="Sale" />{" "}
                  Frequent Powercut
                </label>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label style={{ fontWeight: "bold" }} className="mt-5">
              <span style={{ color: "red", fontWeight: "bold" }}>*</span>Water
              Supply
            </label>
            <div className="custom-radio row">
              <div className="col-12 col-lg-3">
                <label>
                  <input type="radio" name="propertyType" value="Residential" />{" "}
                  Municipal Corporation (BMC)
                </label>
              </div>
              <div className="col-12 col-lg-3">
                <label>
                  <input type="radio" name="propertyType" value="Commercial" />{" "}
                  Borewell
                </label>
              </div>
              <div className="col-12 col-lg-3">
                <label>
                  <input type="radio" name="propertyType" value="Land/Plot" />{" "}
                  Both
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ width: "100%" }} className="my-5"></hr>
        <div className="container">
          <label style={{ fontWeight: "bold", fontSize: "18px" }}>
            {" "}
            <span style={{ color: "red" }}>*</span>Furnishing
          </label>
          <div className="row">
            <div className="col-12 col-lg-4 col-md-4">
              <div className="cntr">
                <input type="checkbox" id="cbx1" className="hidden-xs-up" />
                <label htmlFor="cbx1" className="cbx"></label>
                <label htmlFor="cbx1" className="lbl">
                  Fully Furnished
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-4">
              <div className="cntr">
                <input type="checkbox" id="cbx2" className="hidden-xs-up" />
                <label htmlFor="cbx2" className="cbx"></label>
                <label htmlFor="cbx2" className="lbl">
                  Semi Furnished
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-4">
              <div className="cntr">
                <input type="checkbox" id="cbx3" className="hidden-xs-up" />
                <label htmlFor="cbx3" className="cbx"></label>
                <label htmlFor="cbx3" className="lbl">
                  Non Furnished
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ width: "100%" }} className="my-5"></hr>
        <div className="container">
          <label
            style={{ fontWeight: "bold", fontSize: "18px" }}
            className="mb-5"
          >
            {" "}
            <span style={{ color: "red" }}>*</span>Additional Features
          </label>
          <div className="row">
            <div className="col-12 col-lg-4 col-md-4">
              <div className="cntr">
                <input type="checkbox" id="cbx1-1" className="hidden-xs-up" />
                <label htmlFor="cbx1-1" className="cbx"></label>
                <label htmlFor="cbx1-1" className="lbl">
                  Air Conditioning
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-4">
              <div className="cntr">
                <input type="checkbox" id="cbx2-1" className="hidden-xs-up" />
                <label htmlFor="cbx2-1" className="cbx"></label>
                <label htmlFor="cbx2-1" className="lbl">
                  Refrigerator
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-4">
              <div className="cntr">
                <input type="checkbox" id="cbx3-1" className="hidden-xs-up" />
                <label htmlFor="cbx3-1" className="cbx"></label>
                <label htmlFor="cbx3-1" className="lbl">
                  Ceiling Fans
                </label>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-lg-4 col-md-4">
              <div className="cntr">
                <input type="checkbox" id="cbx1-2" className="hidden-xs-up" />
                <label htmlFor="cbx1-2" className="cbx"></label>
                <label htmlFor="cbx1-2" className="lbl">
                  Washing machine
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-4">
              <div className="cntr">
                <input type="checkbox" id="cbx2-2" className="hidden-xs-up" />
                <label htmlFor="cbx2-2" className="cbx"></label>
                <label htmlFor="cbx2-2" className="lbl">
                  Microwave
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-4">
              <div className="cntr">
                <input type="checkbox" id="cbx3-2" className="hidden-xs-up" />
                <label htmlFor="cbx3-2" className="cbx"></label>
                <label htmlFor="cbx3-2" className="lbl">
                  Oven
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="cotainer">
          <label className="my-5" style={{ fontWeight: "bold" }}>
            SOCIETY AMENITIES
          </label>
          <div className="row ">
            <div className="col-3  ds d-flex justify-content-center align-items-center">
              <svg
                width="66"
                height="64"
                viewBox="0 0 36 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5021_3598)">
                  <path
                    d="M6.19092 20.3213L23.8499 33.1501"
                    stroke="#7A7A7A"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10.3721 19.5063L28.7413 33.0054"
                    stroke="#7A7A7A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.00003 29.5233C1.00003 24.0984 5.39776 19.7007 10.8226 19.7007H25.1774C30.6022 19.7007 35 24.0984 35 29.5233V33.0007H1.00003V29.5233Z"
                    stroke="#7A7A7A"
                    strokeWidth="2.00007"
                  />
                  <path
                    d="M23.1743 25.0288H25.4048"
                    stroke="#7A7A7A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.7622 16.0562H18.8997"
                    stroke="#7A7A7A"
                    strokeLinecap="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.0002 20.4002C23.7555 20.4002 28.4212 16.2141 28.4212 11.0502C28.4212 5.88633 23.7555 1.7002 18.0002 1.7002C12.2448 1.7002 7.5791 5.88633 7.5791 11.0502C7.5791 16.2141 12.2448 20.4002 18.0002 20.4002ZM18.0002 18.7002C21.6627 18.7002 24.6317 16.0363 24.6317 12.7502C24.6317 9.4641 21.6627 6.80019 18.0002 6.80019C14.3376 6.80019 11.3686 9.4641 11.3686 12.7502C11.3686 16.0363 14.3376 18.7002 18.0002 18.7002Z"
                    fill="#7A7A7A"
                  />
                  <path
                    d="M28.1293 10.2002H7.37637L5.3999 7.60297V5.59603L17.9999 1.7002L30.5999 5.59603V7.60297L28.1293 10.2002Z"
                    fill="white"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                  />
                  <mask id="path-8-inside-1_5021_3598" fill="white">
                    <ellipse
                      cx="15.1578"
                      cy="12.7504"
                      rx="0.947368"
                      ry="0.85"
                    />
                  </mask>
                  <ellipse
                    cx="15.1578"
                    cy="12.7504"
                    rx="0.947368"
                    ry="0.85"
                    fill="#7A7A7A"
                  />
                  <path
                    d="M14.994 12.7504C14.994 12.6366 15.0479 12.5583 15.0857 12.5244C15.1216 12.4922 15.1502 12.4892 15.1578 12.4892V14.7115C16.1783 14.7115 17.2163 13.9438 17.2163 12.7504H14.994ZM15.1578 12.4892C15.1654 12.4892 15.1941 12.4922 15.23 12.5244C15.2678 12.5583 15.3216 12.6366 15.3216 12.7504H13.0993C13.0993 13.9438 14.1373 14.7115 15.1578 14.7115V12.4892ZM15.3216 12.7504C15.3216 12.8642 15.2678 12.9425 15.23 12.9764C15.1941 13.0086 15.1654 13.0115 15.1578 13.0115V10.7892C14.1373 10.7892 13.0993 11.557 13.0993 12.7504H15.3216ZM15.1578 13.0115C15.1502 13.0115 15.1216 13.0086 15.0857 12.9764C15.0479 12.9425 14.994 12.8642 14.994 12.7504H17.2163C17.2163 11.557 16.1783 10.7892 15.1578 10.7892V13.0115Z"
                    fill="#7A7A7A"
                    mask="url(#path-8-inside-1_5021_3598)"
                  />
                  <mask id="path-10-inside-2_5021_3598" fill="white">
                    <ellipse
                      cx="20.8419"
                      cy="12.7504"
                      rx="0.947368"
                      ry="0.85"
                    />
                  </mask>
                  <ellipse
                    cx="20.8419"
                    cy="12.7504"
                    rx="0.947368"
                    ry="0.85"
                    fill="#7A7A7A"
                  />
                  <path
                    d="M20.6781 12.7504C20.6781 12.6366 20.7319 12.5583 20.7697 12.5244C20.8056 12.4922 20.8343 12.4892 20.8419 12.4892V14.7115C21.8624 14.7115 22.9004 13.9438 22.9004 12.7504H20.6781ZM20.8419 12.4892C20.8495 12.4892 20.8782 12.4922 20.9141 12.5244C20.9519 12.5583 21.0057 12.6366 21.0057 12.7504H18.7834C18.7834 13.9438 19.8214 14.7115 20.8419 14.7115V12.4892ZM21.0057 12.7504C21.0057 12.8642 20.9519 12.9425 20.9141 12.9764C20.8782 13.0086 20.8495 13.0115 20.8419 13.0115V10.7892C19.8214 10.7892 18.7834 11.557 18.7834 12.7504H21.0057ZM20.8419 13.0115C20.8343 13.0115 20.8056 13.0086 20.7697 12.9764C20.7319 12.9425 20.6781 12.8642 20.6781 12.7504H22.9004C22.9004 11.557 21.8624 10.7892 20.8419 10.7892V13.0115Z"
                    fill="#7A7A7A"
                    mask="url(#path-10-inside-2_5021_3598)"
                  />
                  <path
                    d="M18.0001 3.40039L18.7073 5.1624H20.9959L19.1444 6.25138L19.8516 8.01338L18.0001 6.9244L16.1486 8.01338L16.8558 6.25138L15.0043 5.1624H17.2929L18.0001 3.40039Z"
                    fill="#7A7A7A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5021_3598">
                    <rect width="36" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <label style={{ color: "#7A7A7A" }}>24/7 Security</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>

            <div className="col-3 ds d-flex justify-content-center align-items-center">
              <svg
                width="36"
                height="34"
                viewBox="0 0 36 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5021_3619)">
                  <path
                    d="M26.5056 19.9487H32.4577C32.737 19.9489 33.0115 20.0194 33.2554 20.1536C33.4992 20.2878 33.7043 20.4813 33.851 20.7156C33.9978 20.9499 34.0814 21.2174 34.094 21.4925C34.1066 21.7677 34.0476 22.0415 33.9228 22.2879L30.5895 28.8655C30.4631 29.1148 30.2735 29.3276 30.0392 29.4832C29.8048 29.6389 29.5336 29.7321 29.252 29.7539C28.9703 29.7757 28.6877 29.7253 28.4316 29.6076C28.1755 29.4899 27.9546 29.3089 27.7904 29.0821L24.3096 24.281"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.0888 15.1852C27.4772 15.377 27.7726 15.713 27.9099 16.1195C28.0473 16.526 28.0154 16.9696 27.8214 17.353L22.7312 27.3932C22.6349 27.5832 22.5017 27.7525 22.339 27.8916C22.1764 28.0307 21.9876 28.1369 21.7833 28.204C21.5791 28.2711 21.3635 28.2978 21.1488 28.2827C20.934 28.2676 20.7244 28.2109 20.5319 28.1158L4.97148 20.4341C3.84125 19.8725 2.98255 18.8922 2.58328 17.7076C2.18401 16.5231 2.27669 15.2307 2.84103 14.1134L5.10258 9.60329C5.38446 9.04918 5.77423 8.55526 6.24964 8.14976C6.72506 7.74425 7.27679 7.4351 7.87335 7.23995C8.4699 7.0448 9.09958 6.96748 9.72643 7.01241C10.3533 7.05734 10.965 7.22363 11.5267 7.5018L27.0888 15.1852Z"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.3335 31.2645H8.49541C9.10624 31.2687 9.70611 31.1044 10.2273 30.7902C10.7486 30.476 11.1704 30.0244 11.4453 29.4863L13.8051 24.7983"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.3335 34.4974V28.0312"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.542 12.75H10.5562"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5021_3619">
                    <rect
                      width="35"
                      height="34"
                      fill="white"
                      transform="translate(0.333496)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <label style={{ color: "#7A7A7A" }}>CCTV camera</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>

            <div className=" col-3 ds d-flex justify-content-center align-items-center">
              <svg
                width="31"
                height="34"
                viewBox="0 0 31 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.712251 0.585786C0.126465 1.17157 0.126465 2.11438 0.126465 4V30C0.126465 31.8856 0.126465 32.8284 0.712251 33.4142C1.29804 34 2.24085 34 4.12646 34H26.2065C28.0921 34 29.0349 34 29.6207 33.4142C30.2065 32.8284 30.2065 31.8856 30.2065 30V4C30.2065 2.11438 30.2065 1.17157 29.6207 0.585786C29.0349 0 28.0921 0 26.2065 0H4.12646C2.24085 0 1.29804 0 0.712251 0.585786ZM28.3718 1.83825H1.89209V32.1626H28.3718V1.83825Z"
                  fill="#7A7A7A"
                />
                <path
                  d="M15.1665 11.0498V32.0931"
                  stroke="#7A7A7A"
                  strokeWidth="1.8"
                />
                <path
                  d="M9.71125 4.3864C10.1064 3.96444 10.776 3.96444 11.1711 4.3864L12.4465 5.7484C13.0447 6.38721 12.5918 7.43193 11.7166 7.43193H9.16574C8.29057 7.43193 7.83761 6.38721 8.43582 5.7484L9.71125 4.3864Z"
                  fill="#7A7A7A"
                />
                <path
                  d="M18.7347 7.07747C19.1298 7.49943 19.7994 7.49943 20.1945 7.07747L21.47 5.71546C22.0682 5.07666 21.6152 4.03193 20.74 4.03193L18.1892 4.03193C17.314 4.03193 16.8611 5.07666 17.4593 5.71546L18.7347 7.07747Z"
                  fill="#7A7A7A"
                />
              </svg>

              <label style={{ color: "#7A7A7A" }}>Lift</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>

            <div className="col-12 ds col-lg-3 d-flex justify-content-center align-items-center">
              <svg
                width="34"
                height="31"
                viewBox="0 0 34 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.3368 6.98059L28.9368 10.7004L26.3868 3.81876C26.1463 3.11448 25.7164 2.50646 25.1538 2.07483C24.5912 1.6432 23.9222 1.40823 23.235 1.40088H10.9168C10.2241 1.38348 9.54301 1.59806 8.96483 2.01589C8.38664 2.43372 7.93896 3.03485 7.68172 3.73878L5.13682 10.7004L1.73682 6.98059"
                  stroke="#7A7A7A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.53662 18.1401H8.55362"
                  stroke="#7A7A7A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5366 18.1401H25.5536"
                  stroke="#7A7A7A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.9368 10.7012H5.13682C3.25905 10.7012 1.73682 12.3666 1.73682 14.421V21.8606C1.73682 23.915 3.25905 25.5804 5.13682 25.5804H28.9368C30.8146 25.5804 32.3368 23.915 32.3368 21.8606V14.421C32.3368 12.3666 30.8146 10.7012 28.9368 10.7012Z"
                  stroke="#7A7A7A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.13672 25.5801V29.2999"
                  stroke="#7A7A7A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.937 25.5801V29.2999"
                  stroke="#7A7A7A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <label style={{ color: "#7A7A7A" }}>Reserved Parking</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>
          </div>
          <div className="row  mt-5">
            <div className="col-3  ds d-flex justify-content-center align-items-center">
              <svg
                width="66"
                height="64"
                viewBox="0 0 36 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5021_3598)">
                  <path
                    d="M6.19092 20.3213L23.8499 33.1501"
                    stroke="#7A7A7A"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10.3721 19.5063L28.7413 33.0054"
                    stroke="#7A7A7A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.00003 29.5233C1.00003 24.0984 5.39776 19.7007 10.8226 19.7007H25.1774C30.6022 19.7007 35 24.0984 35 29.5233V33.0007H1.00003V29.5233Z"
                    stroke="#7A7A7A"
                    strokeWidth="2.00007"
                  />
                  <path
                    d="M23.1743 25.0288H25.4048"
                    stroke="#7A7A7A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.7622 16.0562H18.8997"
                    stroke="#7A7A7A"
                    strokeLinecap="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.0002 20.4002C23.7555 20.4002 28.4212 16.2141 28.4212 11.0502C28.4212 5.88633 23.7555 1.7002 18.0002 1.7002C12.2448 1.7002 7.5791 5.88633 7.5791 11.0502C7.5791 16.2141 12.2448 20.4002 18.0002 20.4002ZM18.0002 18.7002C21.6627 18.7002 24.6317 16.0363 24.6317 12.7502C24.6317 9.4641 21.6627 6.80019 18.0002 6.80019C14.3376 6.80019 11.3686 9.4641 11.3686 12.7502C11.3686 16.0363 14.3376 18.7002 18.0002 18.7002Z"
                    fill="#7A7A7A"
                  />
                  <path
                    d="M28.1293 10.2002H7.37637L5.3999 7.60297V5.59603L17.9999 1.7002L30.5999 5.59603V7.60297L28.1293 10.2002Z"
                    fill="white"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                  />
                  <mask id="path-8-inside-1_5021_3598" fill="white">
                    <ellipse
                      cx="15.1578"
                      cy="12.7504"
                      rx="0.947368"
                      ry="0.85"
                    />
                  </mask>
                  <ellipse
                    cx="15.1578"
                    cy="12.7504"
                    rx="0.947368"
                    ry="0.85"
                    fill="#7A7A7A"
                  />
                  <path
                    d="M14.994 12.7504C14.994 12.6366 15.0479 12.5583 15.0857 12.5244C15.1216 12.4922 15.1502 12.4892 15.1578 12.4892V14.7115C16.1783 14.7115 17.2163 13.9438 17.2163 12.7504H14.994ZM15.1578 12.4892C15.1654 12.4892 15.1941 12.4922 15.23 12.5244C15.2678 12.5583 15.3216 12.6366 15.3216 12.7504H13.0993C13.0993 13.9438 14.1373 14.7115 15.1578 14.7115V12.4892ZM15.3216 12.7504C15.3216 12.8642 15.2678 12.9425 15.23 12.9764C15.1941 13.0086 15.1654 13.0115 15.1578 13.0115V10.7892C14.1373 10.7892 13.0993 11.557 13.0993 12.7504H15.3216ZM15.1578 13.0115C15.1502 13.0115 15.1216 13.0086 15.0857 12.9764C15.0479 12.9425 14.994 12.8642 14.994 12.7504H17.2163C17.2163 11.557 16.1783 10.7892 15.1578 10.7892V13.0115Z"
                    fill="#7A7A7A"
                    mask="url(#path-8-inside-1_5021_3598)"
                  />
                  <mask id="path-10-inside-2_5021_3598" fill="white">
                    <ellipse
                      cx="20.8419"
                      cy="12.7504"
                      rx="0.947368"
                      ry="0.85"
                    />
                  </mask>
                  <ellipse
                    cx="20.8419"
                    cy="12.7504"
                    rx="0.947368"
                    ry="0.85"
                    fill="#7A7A7A"
                  />
                  <path
                    d="M20.6781 12.7504C20.6781 12.6366 20.7319 12.5583 20.7697 12.5244C20.8056 12.4922 20.8343 12.4892 20.8419 12.4892V14.7115C21.8624 14.7115 22.9004 13.9438 22.9004 12.7504H20.6781ZM20.8419 12.4892C20.8495 12.4892 20.8782 12.4922 20.9141 12.5244C20.9519 12.5583 21.0057 12.6366 21.0057 12.7504H18.7834C18.7834 13.9438 19.8214 14.7115 20.8419 14.7115V12.4892ZM21.0057 12.7504C21.0057 12.8642 20.9519 12.9425 20.9141 12.9764C20.8782 13.0086 20.8495 13.0115 20.8419 13.0115V10.7892C19.8214 10.7892 18.7834 11.557 18.7834 12.7504H21.0057ZM20.8419 13.0115C20.8343 13.0115 20.8056 13.0086 20.7697 12.9764C20.7319 12.9425 20.6781 12.8642 20.6781 12.7504H22.9004C22.9004 11.557 21.8624 10.7892 20.8419 10.7892V13.0115Z"
                    fill="#7A7A7A"
                    mask="url(#path-10-inside-2_5021_3598)"
                  />
                  <path
                    d="M18.0001 3.40039L18.7073 5.1624H20.9959L19.1444 6.25138L19.8516 8.01338L18.0001 6.9244L16.1486 8.01338L16.8558 6.25138L15.0043 5.1624H17.2929L18.0001 3.40039Z"
                    fill="#7A7A7A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5021_3598">
                    <rect width="36" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <label style={{ color: "#7A7A7A" }}>24/7 Security</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>

            <div className="col-3 ds d-flex justify-content-center align-items-center">
              <svg
                width="36"
                height="34"
                viewBox="0 0 36 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5021_3619)">
                  <path
                    d="M26.5056 19.9487H32.4577C32.737 19.9489 33.0115 20.0194 33.2554 20.1536C33.4992 20.2878 33.7043 20.4813 33.851 20.7156C33.9978 20.9499 34.0814 21.2174 34.094 21.4925C34.1066 21.7677 34.0476 22.0415 33.9228 22.2879L30.5895 28.8655C30.4631 29.1148 30.2735 29.3276 30.0392 29.4832C29.8048 29.6389 29.5336 29.7321 29.252 29.7539C28.9703 29.7757 28.6877 29.7253 28.4316 29.6076C28.1755 29.4899 27.9546 29.3089 27.7904 29.0821L24.3096 24.281"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.0888 15.1852C27.4772 15.377 27.7726 15.713 27.9099 16.1195C28.0473 16.526 28.0154 16.9696 27.8214 17.353L22.7312 27.3932C22.6349 27.5832 22.5017 27.7525 22.339 27.8916C22.1764 28.0307 21.9876 28.1369 21.7833 28.204C21.5791 28.2711 21.3635 28.2978 21.1488 28.2827C20.934 28.2676 20.7244 28.2109 20.5319 28.1158L4.97148 20.4341C3.84125 19.8725 2.98255 18.8922 2.58328 17.7076C2.18401 16.5231 2.27669 15.2307 2.84103 14.1134L5.10258 9.60329C5.38446 9.04918 5.77423 8.55526 6.24964 8.14976C6.72506 7.74425 7.27679 7.4351 7.87335 7.23995C8.4699 7.0448 9.09958 6.96748 9.72643 7.01241C10.3533 7.05734 10.965 7.22363 11.5267 7.5018L27.0888 15.1852Z"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.3335 31.2645H8.49541C9.10624 31.2687 9.70611 31.1044 10.2273 30.7902C10.7486 30.476 11.1704 30.0244 11.4453 29.4863L13.8051 24.7983"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.3335 34.4974V28.0312"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.542 12.75H10.5562"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5021_3619">
                    <rect
                      width="35"
                      height="34"
                      fill="white"
                      transform="translate(0.333496)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <label style={{ color: "#7A7A7A" }}>CCTV camera</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>

            <div className=" col-3 ds d-flex justify-content-center align-items-center">
              <svg
                width="31"
                height="34"
                viewBox="0 0 31 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.712251 0.585786C0.126465 1.17157 0.126465 2.11438 0.126465 4V30C0.126465 31.8856 0.126465 32.8284 0.712251 33.4142C1.29804 34 2.24085 34 4.12646 34H26.2065C28.0921 34 29.0349 34 29.6207 33.4142C30.2065 32.8284 30.2065 31.8856 30.2065 30V4C30.2065 2.11438 30.2065 1.17157 29.6207 0.585786C29.0349 0 28.0921 0 26.2065 0H4.12646C2.24085 0 1.29804 0 0.712251 0.585786ZM28.3718 1.83825H1.89209V32.1626H28.3718V1.83825Z"
                  fill="#7A7A7A"
                />
                <path
                  d="M15.1665 11.0498V32.0931"
                  stroke="#7A7A7A"
                  strokeWidth={1.8}
                />
                <path
                  d="M9.71125 4.3864C10.1064 3.96444 10.776 3.96444 11.1711 4.3864L12.4465 5.7484C13.0447 6.38721 12.5918 7.43193 11.7166 7.43193H9.16574C8.29057 7.43193 7.83761 6.38721 8.43582 5.7484L9.71125 4.3864Z"
                  fill="#7A7A7A"
                />
                <path
                  d="M18.7347 7.07747C19.1298 7.49943 19.7994 7.49943 20.1945 7.07747L21.47 5.71546C22.0682 5.07666 21.6152 4.03193 20.74 4.03193L18.1892 4.03193C17.314 4.03193 16.8611 5.07666 17.4593 5.71546L18.7347 7.07747Z"
                  fill="#7A7A7A"
                />
              </svg>

              <label style={{ color: "#7A7A7A" }}>Lift</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>

            <div className="col-12 ds col-lg-3 d-flex justify-content-center align-items-center">
              <svg
                width="34"
                height="31"
                viewBox="0 0 34 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.3368 6.98059L28.9368 10.7004L26.3868 3.81876C26.1463 3.11448 25.7164 2.50646 25.1538 2.07483C24.5912 1.6432 23.9222 1.40823 23.235 1.40088H10.9168C10.2241 1.38348 9.54301 1.59806 8.96483 2.01589C8.38664 2.43372 7.93896 3.03485 7.68172 3.73878L5.13682 10.7004L1.73682 6.98059"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.53662 18.1401H8.55362"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5366 18.1401H25.5536"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.9368 10.7012H5.13682C3.25905 10.7012 1.73682 12.3666 1.73682 14.421V21.8606C1.73682 23.915 3.25905 25.5804 5.13682 25.5804H28.9368C30.8146 25.5804 32.3368 23.915 32.3368 21.8606V14.421C32.3368 12.3666 30.8146 10.7012 28.9368 10.7012Z"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.13672 25.5801V29.2999"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.937 25.5801V29.2999"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <label style={{ color: "#7A7A7A" }}>Reserved Parking</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>
          </div>
          <div className="row my-5 ">
            <div className="col-3  ds d-flex justify-content-center align-items-center">
              <svg
                width="66"
                height="64"
                viewBox="0 0 36 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5021_3598)">
                  <path
                    d="M6.19092 20.3213L23.8499 33.1501"
                    stroke="#7A7A7A"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10.3721 19.5063L28.7413 33.0054"
                    stroke="#7A7A7A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.00003 29.5233C1.00003 24.0984 5.39776 19.7007 10.8226 19.7007H25.1774C30.6022 19.7007 35 24.0984 35 29.5233V33.0007H1.00003V29.5233Z"
                    stroke="#7A7A7A"
                    strokeWidth="2.00007"
                  />
                  <path
                    d="M23.1743 25.0288H25.4048"
                    stroke="#7A7A7A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.7622 16.0562H18.8997"
                    stroke="#7A7A7A"
                    strokeLinecap="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.0002 20.4002C23.7555 20.4002 28.4212 16.2141 28.4212 11.0502C28.4212 5.88633 23.7555 1.7002 18.0002 1.7002C12.2448 1.7002 7.5791 5.88633 7.5791 11.0502C7.5791 16.2141 12.2448 20.4002 18.0002 20.4002ZM18.0002 18.7002C21.6627 18.7002 24.6317 16.0363 24.6317 12.7502C24.6317 9.4641 21.6627 6.80019 18.0002 6.80019C14.3376 6.80019 11.3686 9.4641 11.3686 12.7502C11.3686 16.0363 14.3376 18.7002 18.0002 18.7002Z"
                    fill="#7A7A7A"
                  />
                  <path
                    d="M28.1293 10.2002H7.37637L5.3999 7.60297V5.59603L17.9999 1.7002L30.5999 5.59603V7.60297L28.1293 10.2002Z"
                    fill="white"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                  />
                  <mask id="path-8-inside-1_5021_3598" fill="white">
                    <ellipse
                      cx="15.1578"
                      cy="12.7504"
                      rx="0.947368"
                      ry="0.85"
                    />
                  </mask>
                  <ellipse
                    cx="15.1578"
                    cy="12.7504"
                    rx="0.947368"
                    ry="0.85"
                    fill="#7A7A7A"
                  />
                  <path
                    d="M14.994 12.7504C14.994 12.6366 15.0479 12.5583 15.0857 12.5244C15.1216 12.4922 15.1502 12.4892 15.1578 12.4892V14.7115C16.1783 14.7115 17.2163 13.9438 17.2163 12.7504H14.994ZM15.1578 12.4892C15.1654 12.4892 15.1941 12.4922 15.23 12.5244C15.2678 12.5583 15.3216 12.6366 15.3216 12.7504H13.0993C13.0993 13.9438 14.1373 14.7115 15.1578 14.7115V12.4892ZM15.3216 12.7504C15.3216 12.8642 15.2678 12.9425 15.23 12.9764C15.1941 13.0086 15.1654 13.0115 15.1578 13.0115V10.7892C14.1373 10.7892 13.0993 11.557 13.0993 12.7504H15.3216ZM15.1578 13.0115C15.1502 13.0115 15.1216 13.0086 15.0857 12.9764C15.0479 12.9425 14.994 12.8642 14.994 12.7504H17.2163C17.2163 11.557 16.1783 10.7892 15.1578 10.7892V13.0115Z"
                    fill="#7A7A7A"
                    mask="url(#path-8-inside-1_5021_3598)"
                  />
                  <mask id="path-10-inside-2_5021_3598" fill="white">
                    <ellipse
                      cx="20.8419"
                      cy="12.7504"
                      rx="0.947368"
                      ry="0.85"
                    />
                  </mask>
                  <ellipse
                    cx="20.8419"
                    cy="12.7504"
                    rx="0.947368"
                    ry="0.85"
                    fill="#7A7A7A"
                  />
                  <path
                    d="M20.6781 12.7504C20.6781 12.6366 20.7319 12.5583 20.7697 12.5244C20.8056 12.4922 20.8343 12.4892 20.8419 12.4892V14.7115C21.8624 14.7115 22.9004 13.9438 22.9004 12.7504H20.6781ZM20.8419 12.4892C20.8495 12.4892 20.8782 12.4922 20.9141 12.5244C20.9519 12.5583 21.0057 12.6366 21.0057 12.7504H18.7834C18.7834 13.9438 19.8214 14.7115 20.8419 14.7115V12.4892ZM21.0057 12.7504C21.0057 12.8642 20.9519 12.9425 20.9141 12.9764C20.8782 13.0086 20.8495 13.0115 20.8419 13.0115V10.7892C19.8214 10.7892 18.7834 11.557 18.7834 12.7504H21.0057ZM20.8419 13.0115C20.8343 13.0115 20.8056 13.0086 20.7697 12.9764C20.7319 12.9425 20.6781 12.8642 20.6781 12.7504H22.9004C22.9004 11.557 21.8624 10.7892 20.8419 10.7892V13.0115Z"
                    fill="#7A7A7A"
                    mask="url(#path-10-inside-2_5021_3598)"
                  />
                  <path
                    d="M18.0001 3.40039L18.7073 5.1624H20.9959L19.1444 6.25138L19.8516 8.01338L18.0001 6.9244L16.1486 8.01338L16.8558 6.25138L15.0043 5.1624H17.2929L18.0001 3.40039Z"
                    fill="#7A7A7A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5021_3598">
                    <rect width="36" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <label style={{ color: "#7A7A7A" }}>24/7 Security</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>

            <div className="col-3 ds d-flex justify-content-center align-items-center">
              <svg
                width="36"
                height="34"
                viewBox="0 0 36 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5021_3619)">
                  <path
                    d="M26.5056 19.9487H32.4577C32.737 19.9489 33.0115 20.0194 33.2554 20.1536C33.4992 20.2878 33.7043 20.4813 33.851 20.7156C33.9978 20.9499 34.0814 21.2174 34.094 21.4925C34.1066 21.7677 34.0476 22.0415 33.9228 22.2879L30.5895 28.8655C30.4631 29.1148 30.2735 29.3276 30.0392 29.4832C29.8048 29.6389 29.5336 29.7321 29.252 29.7539C28.9703 29.7757 28.6877 29.7253 28.4316 29.6076C28.1755 29.4899 27.9546 29.3089 27.7904 29.0821L24.3096 24.281"
                    stroke="#7A7A7A"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.0888 15.1852C27.4772 15.377 27.7726 15.713 27.9099 16.1195C28.0473 16.526 28.0154 16.9696 27.8214 17.353L22.7312 27.3932C22.6349 27.5832 22.5017 27.7525 22.339 27.8916C22.1764 28.0307 21.9876 28.1369 21.7833 28.204C21.5791 28.2711 21.3635 28.2978 21.1488 28.2827C20.934 28.2676 20.7244 28.2109 20.5319 28.1158L4.97148 20.4341C3.84125 19.8725 2.98255 18.8922 2.58328 17.7076C2.18401 16.5231 2.27669 15.2307 2.84103 14.1134L5.10258 9.60329C5.38446 9.04918 5.77423 8.55526 6.24964 8.14976C6.72506 7.74425 7.27679 7.4351 7.87335 7.23995C8.4699 7.0448 9.09958 6.96748 9.72643 7.01241C10.3533 7.05734 10.965 7.22363 11.5267 7.5018L27.0888 15.1852Z"
                    stroke="#7A7A7A"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.3335 31.2645H8.49541C9.10624 31.2687 9.70611 31.1044 10.2273 30.7902C10.7486 30.476 11.1704 30.0244 11.4453 29.4863L13.8051 24.7983"
                    stroke="#7A7A7A"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.3335 34.4974V28.0312"
                    stroke="#7A7A7A"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.542 12.75H10.5562"
                    stroke="#7A7A7A"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5021_3619">
                    <rect
                      width="35"
                      height="34"
                      fill="white"
                      transform="translate(0.333496)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <label style={{ color: "#7A7A7A" }}>CCTV camera</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>

            <div className=" col-3 ds d-flex justify-content-center align-items-center">
              <svg
                width="31"
                height="34"
                viewBox="0 0 31 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.712251 0.585786C0.126465 1.17157 0.126465 2.11438 0.126465 4V30C0.126465 31.8856 0.126465 32.8284 0.712251 33.4142C1.29804 34 2.24085 34 4.12646 34H26.2065C28.0921 34 29.0349 34 29.6207 33.4142C30.2065 32.8284 30.2065 31.8856 30.2065 30V4C30.2065 2.11438 30.2065 1.17157 29.6207 0.585786C29.0349 0 28.0921 0 26.2065 0H4.12646C2.24085 0 1.29804 0 0.712251 0.585786ZM28.3718 1.83825H1.89209V32.1626H28.3718V1.83825Z"
                  fill="#7A7A7A"
                />
                <path
                  d="M15.1665 11.0498V32.0931"
                  stroke="#7A7A7A"
                  strokeWidth={1.8}
                />
                <path
                  d="M9.71125 4.3864C10.1064 3.96444 10.776 3.96444 11.1711 4.3864L12.4465 5.7484C13.0447 6.38721 12.5918 7.43193 11.7166 7.43193H9.16574C8.29057 7.43193 7.83761 6.38721 8.43582 5.7484L9.71125 4.3864Z"
                  fill="#7A7A7A"
                />
                <path
                  d="M18.7347 7.07747C19.1298 7.49943 19.7994 7.49943 20.1945 7.07747L21.47 5.71546C22.0682 5.07666 21.6152 4.03193 20.74 4.03193L18.1892 4.03193C17.314 4.03193 16.8611 5.07666 17.4593 5.71546L18.7347 7.07747Z"
                  fill="#7A7A7A"
                />
              </svg>
              <label style={{ color: "#7A7A7A" }}>Lift</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>

            <div className="col-12 ds col-lg-3 d-flex justify-content-center align-items-center">
              <svg
                width="34"
                height="31"
                viewBox="0 0 34 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.3368 6.98059L28.9368 10.7004L26.3868 3.81876C26.1463 3.11448 25.7164 2.50646 25.1538 2.07483C24.5912 1.6432 23.9222 1.40823 23.235 1.40088H10.9168C10.2241 1.38348 9.54301 1.59806 8.96483 2.01589C8.38664 2.43372 7.93896 3.03485 7.68172 3.73878L5.13682 10.7004L1.73682 6.98059"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.53662 18.1401H8.55362"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5366 18.1401H25.5536"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.9368 10.7012H5.13682C3.25905 10.7012 1.73682 12.3666 1.73682 14.421V21.8606C1.73682 23.915 3.25905 25.5804 5.13682 25.5804H28.9368C30.8146 25.5804 32.3368 23.915 32.3368 21.8606V14.421C32.3368 12.3666 30.8146 10.7012 28.9368 10.7012Z"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.13672 25.5801V29.2999"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.937 25.5801V29.2999"
                  stroke="#7A7A7A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <label style={{ color: "#7A7A7A" }}>Reserved Parking</label>
              <input
                className="inps"
                type="checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>
          </div>
        </div>
        <hr></hr>
      </form>
    </div>
  );
}

function PriceDetails() {
  return (
    <div className="propertyd display">
      <div className="row ">
        <div className="col-12 col-lg-6 d-flex flex-column">
          <label>
            Rent <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" placeholder="₹                   / Month" />
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column">
          <label>
            Security<span style={{ color: "red" }}>*</span>
          </label>

          <input type="text" placeholder="₹            / Month" />
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12 col-lg-6 d-flex flex-column">
          <label>
            Maintenance <span style={{ color: "red" }}>*</span>
          </label>
          <select id="directions" style={{ width: "100%" }}>
            <option value="north">Included In Rent</option>
            <option value="north">Extra Maintainance</option>
          </select>{" "}
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column">
          <label>
            Maintenance <span style={{ color: "red" }}>*</span>
          </label>

          <div className="row">
            <div className="col-6">
              <input
                type="text"
                style={{ width: "100%" }}
                placeholder="₹            / Month"
              />
            </div>

            <div className="col-6">
              <select id="directions" style={{ width: "100%" }}>
                <option value="north">Monthly</option>
                <option value="north">yearly</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-colum det">
        <label style={{ fontWeight: "bold" }}>
          Additional Pricing details to convey to agent?
        </label>
        <textarea
          style={{ padding: "10px" }}
          name="message"
          rows="10"
          cols="30"
          placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us. "
        />{" "}
      </div>
    </div>
  );
}

function PropertyImages() {
  const [photos, setPhotos] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setPhotos((prevPhotos) => [...prevPhotos, ...files]);
  };

  const handleRemovePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  return (
    <div className="propertyd">
      <h5>Add Photos / videos to attract more tenants!</h5>
      <p className="my-5">
        Add Photos of living room, bedroom, bathroom, floor, doors, kitchen,
        balcony, location map, neighborhood, etc.
      </p>
      <div className="photo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          class="bi bi-camera"
          viewBox="0 0 16 16"
        >
          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
        </svg>
        <input
          type="file"
          id="fl"
          multiple
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <label htmlFor="fl"> + Add Photos Now</label>
      </div>
      <div className="photo-preview">
        {photos.length > 0 &&
          photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img
                src={URL.createObjectURL(photo)}
                alt={`Photo ${index + 1}`}
                className="img-fluid"
              />
              <button
                className="removebtn"
                onClick={() => handleRemovePhoto(index)}
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
