import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=" h-[95vh] overflow-scroll">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP Address</th>
            <th>Airport Code</th>
            <th>Date</th>
            <th>Mobile</th>
            <th>Area</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.email}</td>
              <td>{person.gender}</td>
              <td>{person.ip_address}</td>
              <td>{person.airport_code}</td>
              <td>{person.time}</td>
              <td>{person.mobile}</td>
              <td>{person.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
