import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ user }) => (
  <div >
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ borderRadius: "100%", width: "50px", height: "50px", "marginLeft": "35px"}}
      />
      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
        <Link to={"/profile/" + user.login} className="btn btn-primary">
          Open
        </Link>
      </div>
    </div>
  </div>
);
