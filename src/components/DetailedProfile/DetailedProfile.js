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
        <div className="detailed-profile__top-info-text">
        <p>
          {profile.firstName} {profile.lastName}
        </p>
        <p>{profile.cell}</p>
        <p>{profile.email}</p>
        </div>
      </div>
      <p>
        {profile.addressNum} {profile.street}
      </p>
      <p>
        {profile.city}, {profile.state} {profile.postcode}
      </p>
    </div>
  );
};

export default DetailedProfile;
