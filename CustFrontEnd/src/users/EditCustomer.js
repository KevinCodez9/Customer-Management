import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCustomer() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    customer_num: "",
    customer_name: "",
    street: "",
    city: "",
    state: "",
    zips: ""

  });


 

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:5000/userupdate/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
  
  
 
   const result = await axios.get("http://127.0.0.1:5000/userdetails/"+id);
   
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Customer</h2>



          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                CustomerNum
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter customer number"
                name="customer_num"
                value={name}
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
                placeholder="Enter customername"
                name="customer_name"
                value={name}
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
                placeholder="Enter street"
                name="street"
                value={name}
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
                placeholder="Enter City"
                name="city"
                value={name}
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
                placeholder="Enter State"
                name="state"
                value={name}
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
                placeholder="Enter Zips"
                name="zips"
                value={name}
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
