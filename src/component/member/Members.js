import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import base_url from "../util/BaseUrl";

const Members = () => {
  const [members, setmember] = useState([]);
  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    const result = await axios.get(`${base_url}/member`);
    setmember(result.data.reverse());
  };
  const deleteMember = async (id) => {
    await axios.delete(`${base_url}/member/${id}`);
    loadMembers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          <div className="col">
            <h1>Members</h1>
          </div>
          <div className="col d-flex flex-row-reverse">
            <Link className="btn btn-outline-primary" to="/member/add">
              Add Member
            </Link>
          </div>
        </div>
        <table className="table border shadow my-4">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">National Code</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={member.id}>
                <th scope="row">{index + 1}</th>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.mobile}</td>
                <td>{member.nationalCode}</td>
                <td>
                  <Link className="btn btn-primary" 
                  to={`/member/${member.id}`}>
                    View
                    
                  </Link>
                  <Link
                    className="btn btn-outline-primary m-2"
                    to={`/member/edit/${member.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    to=""
                    onClick={() => deleteMember(member.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
