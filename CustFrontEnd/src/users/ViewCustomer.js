import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function ViewCustomer() {
  const [user, setUser] = useState({
    customer_num:"",
    customer_name: "",
    street: "",
    city: "",
    state: "",
    zips: "",
   

  });

  const { customer_num } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:5000/userdetails/${user.customer_num}`);
  
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Customer Details</h2>

          <div className="card">
            <div className="list-group-item">
                 
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>Customer ID:</b>
                  {user.customer_num}
                </li>
                <li className="list-group-item">
                  <b>CustomerNumber:</b>
                  {user.customer_num}
                </li>
                <li className="list-group-item">
                  <b>CustomerName:</b>
                  {user.customer_name}
                </li>
                <li className="list-group-item">
                  <b>Street:</b>
                  {user.street}
                </li>
                <li className="list-group-item">
                  <b>City:</b>
                  {user.city}
                </li>
                <li className="list-group-item">
                  <b>State:</b>
                  {user.state}
                </li>
                <li className="list-group-item">
                  <b>Zip:</b>
                  {user.zips}
                </li>
              
              
               
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
