import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edituser() {
  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    editusers();
  }, []);

  const editusers = () => {
    axios.get(`http://localhost:3003/users/${id}`).then((res) => {
      console.log(res.data);
      setEdituser(res.data)
    });
  };

  const navigate = useNavigate();

  const [edituser, setEdituser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = edituser;

  const addData = (e) => {
    setEdituser({ ...edituser, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
     axios
      .put(`http://localhost:3003/users/${id}`, edituser)
      .then((res) => {
        console.log(res.data);
      });
    navigate("/", { replace: true });
  };

  return (
    <div className="container">
      <div className="my-4">
        <h1 style={{ color: "violet" }}>Edituser Page</h1>

        <form className="row g-3" onSubmit={(e) => handlesubmit(e)}>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-lable">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              value={name}
              placeholder="Enter your Name"
              onChange={addData}
            />
          </div>
          <div class="col-md-6">
            <label for="formGroupExampleInput2" className="form-lable">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              name="username"
              required
              value={username}
              placeholder="Enter your UserName"
              onChange={addData}
            />
          </div>
          <div class="col-md-6">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="text"
              class="form-control"
              name="email"
              required
              value={email}
              placeholder="Enter your Email"
              onChange={addData}
            />
            <br />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-warning">
              Editusers
            </button>
          </div>
        </form>
      </div>
      ;
    </div>
  );
}

export default Edituser;
