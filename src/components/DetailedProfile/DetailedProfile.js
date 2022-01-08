import React from "react";
import "./DetailedProfile.css";

const DetailedProfile = (props) => {

  console.log(props.profileData)

  return (
    <div className="detailed-profile">
      <p>{props.profileData.firstName}</p>
      <button className="profile__btn" onClick={props.closeDetailedProfileHandler}>
        Close detailed view
      </button>
    </div>
  );
};

export default DetailedProfile;
