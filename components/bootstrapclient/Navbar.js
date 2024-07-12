import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1720751450/60d70fbc-b15b-4c46-9614-00cd3094df55.png" height={"50px"}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  PROPERTIES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MY DASHBOARD/ACTIVITY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  LIST YOUR PROPERTY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">CONTACT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">MORE</a>
              </li>
            </ul>
            <div className="translate">
              <a className="nav-link d-none d-lg
              -block">|</a>

              <a className="nav-link ">
              <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8L11 14"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 14L10 8L12 5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 5H14"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 2H8"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L17 12L12 22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 18H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
              </a>

              <a className="nav-link ">
              <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 11.375C12.9162 11.375 14.875 9.41625 14.875 7C14.875 4.58375 12.9162 2.625 10.5 2.625C8.08375 2.625 6.125 4.58375 6.125 7C6.125 9.41625 8.08375 11.375 10.5 11.375Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 18.375C17.5 16.5185 16.7625 14.738 15.4497 13.4253C14.137 12.1125 12.3565 11.375 10.5 11.375C8.64348 11.375 6.86301 12.1125 5.55025 13.4253C4.2375 14.738 3.5 16.5185 3.5 18.375"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
