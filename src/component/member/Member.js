import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import base_url from "../util/BaseUrl";

const Member = () => {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    nationalCode: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const loadMember = async () => {
      const result = await axios.get(`${base_url}/member`);
      setMember(result.data);
    };
    loadMember();
  }, []);

  return (
    <div className="container my-5">
      <Link className="btn btn-primary my-2" to="/members">
        Back To Members
      </Link>
      <ul className="list-group">
        <li className="list-group-item disabled">Member Id: {id}</li>
        <li className="list-group-item">First Name : {member.firstName}</li>
        <li className="list-group-item">Last Name : {member.lastName}</li>
        <li className="list-group-item">Mobile : {member.mobile}</li>
        <li className="list-group-item">
          National Code: {member.nationalCode}
        </li>
      </ul>
    </div>
  );
};

export default Member;
