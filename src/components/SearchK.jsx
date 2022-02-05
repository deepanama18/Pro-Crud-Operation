import React, { useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

function SearchK() {
  const [search, setSearch] = useState([]);

  const searchdata = (keyword) => {
    axios.get("http://localhost:3003/users?q=" + keyword).then((res) => {
      setSearch(res.data);
    });
  };

  return (
    <div>
      <div className="my-4">
        <h1 className="my-4" style={{ color: "blueviolet" }}>
          Search Users
        </h1>
        <div className="row">
          <div className="col-md-12 my-4">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => searchdata(e.target.value)}
            />
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {search.map((ele, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default SearchK;
