import React from "react";
import "./DetailedProfile.css";

const DetailedProfile = (props) => {
  return (
    <div className="detailed-profile">
      <p>This will be the detailed profile</p>
      <button className="profile__btn" onClick={props.closeDetailedProfileHandler}>
        Close detailed view
      </button>
    </div>
  );
};

export default DetailedProfile;
