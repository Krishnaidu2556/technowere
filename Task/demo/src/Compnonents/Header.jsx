import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom/dist/umd/react-router-dom.development'


function Header() {
  return (
    <div className="background">


    <nav className=" navbar navbar-expand-lg ">
      <div className="container-fluid d-flex ">
        <a className="navbar-brand" href="#">
          <img className="logo"  src=" logo.png" alt />
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mb-sm-2 mb-2 px-3">
              <NavLink className="nav-link active" aria-current="page" to="/dashboard">
                <i className="pe-1 ri-flight-takeoff-line" />
                <b>Flights</b>
              </NavLink>
            </li>
            <li className="nav-item mb-sm-2 mb-2 px-3">
              <a
                className="nav-link active" href="hotel.html"
              >
                {" "}
                <i className="pe-1  ri-building-fill" />
                <b>Hotels</b>{" "}
              </a>
            </li>
            <li className="nav-item mb-sm-1 mb-2 px-3">
              <a
                className="nav-link active"
                aria-current="page"
                href="cabs.html"
              >
                <i className="pe-1 ri-car-fill" />
                <b>Train  </b>{" "}
              </a>
            </li>

            <li className="nav-item mb-sm-1 mb-2 px-3">
              <a
                className="nav-link active"
                aria-current="page"
                href="cabs.html"
              >
                <i className="pe-1 ri-car-fill" />
                <b>Cabs</b>{" "}
              </a>
            </li>
            <li className="nav-item mb-sm-1 mb-2 px-3">
              <a
                className="nav-link active"
                aria-current="page"
                href="bus.html"
              >
                <i className="pe-1 ri-bus-fill" />
                <b>Bus</b>
              </a>
            </li>
            <li className="nav-item mb-sm-1 mb-2 px-3">
              <a
                className="nav-link active"
                aria-current="page"
                href="bus.html"
              >
                  <i className="pe-1 ri-money-dollar-box-fill" />
                <b>Forex</b>
              </a>
            </li>

          </ul>
          <form className="d-flex">
            <div className="d-flex me-4   manage">
              <div className="icon me-2 ">
                <i className="icon ri-briefcase-4-fill" />
              </div>
              <div className="text">
                <p className="m-0">
                  <span>My Trip </span>
                  <br />
                  <b>Manage Booking</b>
                </p>
              </div>
            </div>
            <button className="btn btn-outline-success d-flex" type="submit">
              <i className="user-icon me-2 ri-user-fill" />
              <p className="loginout me-2 pt-1">
                LOGIN / SIGNUP <i className="ms-2 ri-arrow-down-s-fill" />
              </p>
            </button>
          </form>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;
