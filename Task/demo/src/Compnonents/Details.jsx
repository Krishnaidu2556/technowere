import React, { useEffect, useState } from 'react'
import axios from "axios";

function Details() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetchdata();
    })

    const fetchdata = async () => {
        const res = await axios.get('http://localhost:3000/user')
        setdata(res.data)

    }
  return (
    <div>
      <div className="card-body">
        <div className="table-responsive">
          <table class="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Start</th>
                <th>End</th>
                <th>Departure</th>
                <th>Return</th>
                <th>Adults</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index, ent) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.start}</td>
                    <td>{item.end}</td>
                    <td>{item.departure}</td>
                    <td>{item.return}</td>
                    <td>{item.adults}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default Details;
