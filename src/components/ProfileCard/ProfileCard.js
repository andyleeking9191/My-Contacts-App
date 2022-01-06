import React from "react";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const coppiedTxtHandler = (event) => {
    let coppiedTxt = event.target.textContent;
    navigator.clipboard.writeText(coppiedTxt);
  };

  return (
    <div className="profile-card">
      <div className="profile__image-container">
        <img alt="profile" className="profile__image" src={props.image}></img>
      </div>
      <div className="profile__info-container">
        <p
          className="profile__name profile__text--copy"
          onClick={coppiedTxtHandler}
        >
          {props.firstName} {props.lastName}
        </p>
        <p onClick={coppiedTxtHandler} className="profile__text--copy ">
          {props.cell}
        </p>
        <p onClick={coppiedTxtHandler} className="profile__text--copy ">
          {props.email}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
