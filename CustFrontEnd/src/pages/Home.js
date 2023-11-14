import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    //const result = await axios.get("http://localhost:8080/users");
    const result = await axios.get("http://127.0.0.1:5000/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:5000/userdelete/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">CUSTOMER_NUM</th>
              <th scope="col">CUSTOMER_NAME</th>
              <th scope="col">STREET</th>
              <th scope="col">CITY</th>
              <th scope="col">STATE</th>
              <th scope="col">ZIP</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>

                <td>{user.customer_num}</td>
                <td>{user.customer_name}</td>
                <td>{user.street}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.zips}</td>
           
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewcustomer/${user.customer_number}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editcustomer/${id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
