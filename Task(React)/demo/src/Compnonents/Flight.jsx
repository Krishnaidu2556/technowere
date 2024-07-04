import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

function Flight() {
  const redirect = useNavigate();
  const [data, setdata] = useState([]);

    useEffect(() => {
        fetchdata();
    })

    const fetchdata = async () => {
        const res = await axios.get('http://localhost:3000/user')
        setdata(res.data)

    }

  const [formvalue, setFormValue] = useState({
    id: "",
    start: "",
    end: "",
    departure: "",
    return: "",
    adults: "",
  });

  const onchange = (e) => {
    setFormValue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/user", formvalue);
    console.log(res);
    if (res.status === 201) {
      setFormValue({
        ...formvalue,
        start: "",
        end: "",
        departure: "",
        return: "",
        adults: "",
      });
      console.log("res");
    }
  };

  return (
    <div>
      <div className="flight" style={{ position: "relative" }}>
        <div className="container">
          <p className="main-name col-12 p-sm-0 pt-lg-3 pb-lg-3 pt-0 pb-2">
            Domestic and International Flights
          </p>
          <div className="details col-12">
            <form action="#">
              <div className=" mb-5  mb-sm-3 flex  ">
                <span className="pe-3 ">
                  <input
                    type="radio"
                    id="One-way"
                    name="trip"
                    value="One-way"
                  />
                  <label htmlFor="One-way" className="radio px-2">
                    One-way
                  </label>
                </span>
                <span className="pe-3 ">
                  <input
                    type="radio"
                    id="Round-trip"
                    name="trip"
                    value="Round-trip"
                  />
                  <label htmlFor="Round-trip" className="radio px-2">
                    Round-trip
                  </label>
                </span>
                <span className="pe-3 ">
                  <input
                    type="radio"
                    id="Multi-city"
                    name="trip"
                    value="Multi-city"
                  />
                  <label htmlFor="Multi-city" className="radio px-2">
                    Multi-city
                  </label>
                </span>
              </div>
              <div className="sub-details mb-5 justify-content-between mb-sm-3">
                <div className="row">
                  <div className="from-to d-flex col-lg-5 col-sm-12 ps-sm-0 mb-sm-3 mb-3 p-0 me-lg-3">
                    <div className="form col-6">
                      <label className="city-start">From</label>
                      <input
                        type="text"
                        className="city-input"
                        placeholder="Enter city or airport"
                        id="start"
                        name="start"
                        onChange={onchange}
                        value={formvalue.start}
                        list="countries"
                      />
                      <datalist id="countries">
                        <option value="Andhra Pradesh"></option>
                        <option value="Arunachal Pradesh"></option>
                        <option value="Assam"></option>
                        <option value="Bihar"></option>
                        <option value="Chhattisgarh"></option>
                        <option value="Goa"></option>
                        <option value="Gujarat"></option>
                        <option value="Haryana"></option>
                        <option value="Himachal Pradesh"></option>
                        <option value="Jharkhand"></option>
                        <option value="Karnataka"></option>
                        <option value="Kerala"></option>
                        <option value="Madhya Pradesh"></option>
                        <option value="Maharashtra"></option>
                        <option value="Manipur"></option>
                        <option value="Meghalaya"></option>
                        <option value="Mizoram"></option>
                        <option value="Nagaland"></option>
                        <option value="Odisha"></option>
                        <option value="Punjab"></option>
                        <option value="Rajasthan"></option>
                        <option value="Sikkim"></option>
                        <option value="Tamil Nadu"></option>
                        <option value="Telangana"></option>
                        <option value="Tripura"></option>
                        <option value="Uttar Pradesh"></option>
                        <option value="Uttarakhand"></option>
                        <option value="West Bengal"></option>
                        <option value="Andaman and Nicobar Islands"></option>
                        <option value="Chandigarh"></option>
                        <option value="Dadra and Nagar Haveli and Daman and Diu"></option>
                        <option value="Lakshadweep"></option>
                        <option value="Delhi"></option>
                        <option value="Puducherry"></option>
                        <option value="Ladakh"></option>
                        <option value="Jammu and Kashmir"></option>
                      </datalist>
                    </div>
                    <div className="form">
                      <img
                        className="trip-icon"
                        src="https://gos3.ibcdn.com/reverse-arrow-1668596930.png"
                      />
                    </div>
                    <div className="form col-6">
                      <label className="city-start">From</label>
                      <input
                        type="text"
                        className="city-input"
                        placeholder="Enter city or airport"
                        id="end"
                        name="end"
                        onChange={onchange}
                        value={formvalue.end}
                        list="countries"
                      />
                      <datalist id="countries">
                        <option value="Andhra Pradesh"></option>
                        <option value="Arunachal Pradesh"></option>
                        <option value="Assam"></option>
                        <option value="Bihar"></option>
                        <option value="Chhattisgarh"></option>
                        <option value="Goa"></option>
                        <option value="Gujarat"></option>
                        <option value="Haryana"></option>
                        <option value="Himachal Pradesh"></option>
                        <option value="Jharkhand"></option>
                        <option value="Karnataka"></option>
                        <option value="Kerala"></option>
                        <option value="Madhya Pradesh"></option>
                        <option value="Maharashtra"></option>
                        <option value="Manipur"></option>
                        <option value="Meghalaya"></option>
                        <option value="Mizoram"></option>
                        <option value="Nagaland"></option>
                        <option value="Odisha"></option>
                        <option value="Punjab"></option>
                        <option value="Rajasthan"></option>
                        <option value="Sikkim"></option>
                        <option value="Tamil Nadu"></option>
                        <option value="Telangana"></option>
                        <option value="Tripura"></option>
                        <option value="Uttar Pradesh"></option>
                        <option value="Uttarakhand"></option>
                        <option value="West Bengal"></option>
                        <option value="Andaman and Nicobar Islands"></option>
                        <option value="Chandigarh"></option>
                        <option value="Dadra and Nagar Haveli and Daman and Diu"></option>
                        <option value="Lakshadweep"></option>
                        <option value="Delhi"></option>
                        <option value="Puducherry"></option>
                        <option value="Ladakh"></option>
                        <option value="Jammu and Kashmir"></option>
                      </datalist>
                    </div>
                  </div>
                  <div className="departur me-3 col-lg-2 col-sm-3 pe-sm-0 ps-sm-0 mb-sm-3 mb-3">
                    <label className="departure-start">Departure</label>
                    <input
                      className="city-input"
                      type="date"
                      id="departure"
                      name="departure"
                      onChange={onchange}
                      value={formvalue.departure}
                    />
                  </div>
                  <div className="departur me-3 col-lg-2 col-sm-4 mb-sm-3 mb-3 p-0">
                    <label className="departure-start">Return</label>
                    <input
                      className="departure-input p-o"
                      type="date"
                      id="end"
                      name="end"
                      onChange={onchange}
                      value={formvalue.end}
                    />
                  </div>
                  <div className="adult col-lg-2 col-sm-4 mb-sm-3">
                    <label className="departure-start">
                      Travellers and Class
                    </label>
                    <select
                      className="option"
                      id="adults"
                      name="adults"
                      onChange={onchange}
                      value={formvalue.adults}
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                    </select>
                    <br />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="type">
                  <div className="row">
                    <div className="col-lg-8 col-sm-12 p-0">
                      <ul className="fare-type d-flex flex-wrap">
                        <li className="me-2 col-sm-">
                          <p
                            className="name"
                            style={{
                              border: "1px solid transparent",
                              borderRadius: 10,
                              backgroundColor: "rgb(231 231 231)",
                              fontSize: 14,
                              padding: "8px 6px",
                              marginBottom: "0%",
                            }}
                          >
                            Select A Fare Type
                          </p>
                        </li>
                        <li className="l" style={{ padding: "8px 6px" }}>
                          <input
                            type="radio"
                            id="regular"
                            name="fareType"
                            value="regular"
                            style={{ verticalAlign: "middle" }}
                          />
                          <label htmlFor="regular" style={{ fontSize: 14 }}>
                            Regular
                          </label>
                        </li>
                        <li className="l" style={{ padding: "8px 6px" }}>
                          <input
                            type="radio"
                            id="armedForces"
                            name="fareType"
                            value="armedForces"
                            style={{ verticalAlign: "middle" }}
                          />
                          <label htmlFor="armedForces" style={{ fontSize: 14 }}>
                            Armed Forces
                          </label>
                        </li>
                        <li className="l" style={{ padding: "8px 6px" }}>
                          <input
                            type="radio"
                            id="seniorCitizen"
                            name="fareType"
                            value="seniorCitizen"
                            style={{ verticalAlign: "middle" }}
                          />
                          <label
                            htmlFor="seniorCitizen"
                            style={{ fontSize: 14 }}
                          >
                            Senior Citizen
                          </label>
                        </li>
                        <li className="l" style={{ padding: "8px 6px" }}>
                          <input
                            type="radio"
                            id="student"
                            name="fareType"
                            value="student"
                            style={{ verticalAlign: "middle" }}
                          />
                          <label htmlFor="student" style={{ fontSize: 14 }}>
                            Student
                          </label>
                        </li>
                        <li className="l" style={{ padding: "8px 6px" }}>
                          <input
                            type="radio"
                            id="doctorNurse"
                            name="fareType"
                            value="doctorNurse"
                            style={{ verticalAlign: "middle" }}
                          />
                          <label htmlFor="doctorNurse" style={{ fontSize: 14 }}>
                            Doctor & Nurses
                          </label>
                        </li>
                        <li className="me-4 l" style={{ padding: "8px 6px" }}>
                          <input
                            type="radio"
                            id="extraSeat"
                            name="fareType"
                            value="extraSeat"
                            style={{ verticalAlign: "middle" }}
                          />
                          <label htmlFor="extraSeat" style={{ fontSize: 14 }}>
                            Extra Seat
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="col-lg-4 col-sm-12 mb-3 Trending"
                      style={{ paddingLeft: "0%", paddingRight: "0%" }}
                    >
                      <ul
                        className="d-flex justify-content-between"
                        style={{ listStyle: "none", padding: "0%" }}
                      >
                        <li className="1 me-2">
                          <p style={{ fontSize: 12, marginBottom: 0 }}>
                            Trending
                            <br /> Search
                          </p>
                        </li>
                        <li className="l" style={{ padding: "8px 12px" }}>
                          <input
                            type="radio"
                            id="bangaloreMumbai"
                            name="trendingSearch"
                            value="bangaloreMumbai"
                            style={{ verticalAlign: "middle" }}
                          />
                          <label
                            htmlFor="bangaloreMumbai"
                            style={{ fontSize: 14 }}
                          >
                            Bengaluru{" "}
                            <i
                              className="ri-arrow-right-line ms-1 me-1"
                              style={{ fontSize: 10, fontWeight: "bold" }}
                            />{" "}
                            Mumbai
                          </label>
                        </li>
                        <li className="l" style={{ padding: "8px 12px" }}>
                          <input
                            type="radio"
                            id="delhiGoa"
                            name="trendingSearch"
                            value="delhiGoa"
                            style={{ verticalAlign: "middle" }}
                          />
                          <label htmlFor="delhiGoa" style={{ fontSize: 14 }}>
                            Delhi{" "}
                            <i
                              className="ri-arrow-right-line ms-1 me-1"
                              style={{ fontSize: 10, fontWeight: "bold" }}
                            />{" "}
                            Goa
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="search"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      type="submit"
                      onClick={onsubmit}
                      style={{
                        border: "1px solid transparent",
                        padding: "10px 20px",
                        borderRadius: 10,
                        backgroundColor: "#007bff",
                        color: "white",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      SEARCH FLIGHTS
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" mt-5 col-12">
        <h1 className="output-heading">Flight Details</h1>
        {data.map((item, index) => (
          <div class="container mt-3 mb-3">
            <div class="card">
              <div class="card-body pb-0">
                <div className=" d-flex">
                  <img className="flight-icon me-2" src="download.png" alt="" />
                  <p className="flight-name mb-0">Vistara</p>
                </div>
                <div className=" d-flex ">
                  <div className="col-2 ">
                  <p className="start-flight-name mb-0">
                      <span style={{ fontWeight: "600" }}>AMD </span>
                      {item.start},india
                    </p>
                    <p className="start-flight-time mt-2 mb-0 ">17:35</p>
                    <p className="start-flight-details mt-2">
                      Layover - Bengaluru 20h 55m
                    </p>
                  </div>
                  <div className="col-3">
                    <p className="BLR-name mb-0"> - BLR -</p>
                    <p className="BLR-time mt-2 mb-0 ">{item.departure}</p>
                </div>
                <div className="col-2">
                    <p className="end-flight-name mb-0"> {item.end}, India</p>
                    <p className="end-flight-time mt-2 mb-0 ">24h 45m</p>
                </div>
                <div className="col-2 text-end">
                    <p className="price-name mb-0 mt-5 pt-"> </p>
                    <p className="price-cost mt-1 mb-0 ">$12,963</p>
                    <p className="price-details mt-2 mb-0 ">Use GIRUSH to get Rs500 </p>
                </div>
                  <div className="col-3 text-center mt-5">
                    <button type="submit" className="btn btn-success" onClick={() => redirect(`/dashboard/${item._id}`)}>Edit Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flight;
