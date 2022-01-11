import React from "react";
import "./DetailedProfile.css";

const DetailedProfile = (props) => {
  const profile = props.profileData;
  console.log(profile);

  return (
    <div className="detailed-profile">
      <button
        className="profile__btn--close"
        onClick={props.closeDetailedProfileHandler}
      >
        X
      </button>
      <div className="detailed-profile__top-info-container">
        
          <img
            alt="profile"
            className="detailed-profile__image"
            src={profile.image}
          ></img>
    

        <p className="detailed-profile__name">
          {profile.firstName} {profile.lastName}
        </p>
        <p>Cell: {profile.cell}</p>
        <p>Email: {profile.email}</p>
      </div>
      <p>
        Mailing Address: {profile.addressNum} {profile.street} {profile.city}, {profile.state} {profile.postcode}
      </p>
    </div>
  );
};

export default DetailedProfile;
