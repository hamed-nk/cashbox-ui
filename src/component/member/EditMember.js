import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import base_url from "../util/BaseUrl";
const EditMember = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    nationalCode: "",
  });

  const { firstName, lastName, mobile, nationalCode } = member;
  const onInputChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadMember();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${base_url}/member/${id}`, member);
    navigate("/members");
  };

  const loadMember = async () => {
    const result = await axios.get(`${base_url}/member/${id}`);
    setMember(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Edit Member</h1>
        <form className="row g-3 shadow my-4 p-4" onSubmit={(e) => onSubmit(e)}>
          <div className="col-md-6">
            <label for="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <label for="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <label for="mobile" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="mobile"
              name="mobile"
              value={mobile}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <label for="nationalCode" className="form-label">
              National Code
            </label>
            <input
              type="text"
              className="form-control"
              id="nationalCode"
              placeholder="nationalCode"
              name="nationalCode"
              value={nationalCode}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-warning">
              Edit Member 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMember;
