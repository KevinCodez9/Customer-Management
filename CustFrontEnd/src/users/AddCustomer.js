import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCustomer() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    customer_num: "",
    customer_name: "",
    street: "",
    city: "",
    state: "",
    zips: "",
  });

  //const { name, username, email } = user;
  const { customer_num, customer_name, street,city,state,zips} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //await axios.post("http://localhost:8080/user", user);
    await axios.post("http://127.0.0.1:5000/newuser", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Customer_Num
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter number"
                name="customer_num"
                value={customer_num}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                CustomerName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter customer name"
                name="customer_name"
                //value={username}
                value={customer_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Street
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your street"
                name="street"
                value={street}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                City
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your city"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                State
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your state"
                name="state"
                value={state}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Zips
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Zips"
                name="zips"
                value={zips}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
