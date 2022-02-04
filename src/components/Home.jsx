import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    adduser();
  }, []);

  const adduser = () => {
    axios.get("http://localhost:3003/users").then((res) => {
      console.log(res.data);
      setHome(res.data);
    });
  };

  const deletedata = (id) => {
    axios.delete(`http://localhost:3003/users/${id}`);
    adduser();
  };

  return (
    <div className="my-4">
      <h1 className="my-4" style={{ color: "blueviolet" }}>
        Home Page
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {home.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.username}</td>
              <td>{ele.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletedata(ele.id)}
                >
                  Delete
                </button>
              
                <Link to={`/edituser/${ele.id}`} className="btn btn-primary">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
