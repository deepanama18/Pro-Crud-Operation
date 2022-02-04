import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Adduser() {
  const navigate = useNavigate();

  const [adduser, setAdduser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const addData = (e) => {
    setAdduser({ ...adduser, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const userdata = axios.post("http://localhost:3003/users", adduser);
    setAdduser(userdata);
    navigate("/", { replace: true });
  };

  return (
    <div className="my-4">
      <h1 style={{ color: "violet" }}>Adduser Page</h1>
      <div className="container">
        <form className="row" onSubmit={(e) => handlesubmit(e)}>
          <div class="col-md-6">
            <label for="formGroupExampleInput">Name</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Enter your Name"
              required
              name="name"
              onChange={addData}
            />
          </div>
          <div class="col-md-6">
            <label for="formGroupExampleInput2">Username</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter your UserName"
              required
              name="username"
              onChange={addData}
            />
          </div>
          <div class="col-md-6">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Email"
              required
              name="email"
              onChange={addData}
            />
            <br />
          </div>
          <div className="col-12">
            <button className="btn btn-success">Addusers</button>
          </div>
        </form>
      </div>
      ;
    </div>
  );
}

export default Adduser;
