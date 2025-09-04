import React from "react";
import "./userHeader.css";

const UserHeaderComponent = ({ customerName }) => {
  return (
    <div className="welcome-back-header">
      <div className="profile-section">
        <div className="profile-image">
          {/* <img
            src=""
            alt="Profile"
            className="profile-image"
          /> */}
          {customerName?.[0] || "-"}
        </div>
        <div className="welcome-text">
          <div className="welcome-back">Welcome</div>
          <div className="user-name">{customerName}</div>
        </div>
      </div>
    </div>
  );
};

export default UserHeaderComponent;
