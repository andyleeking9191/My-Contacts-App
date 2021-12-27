import React from 'react';

const ProfileCard = (props)=> {

   return(
       <div className='profile-card'>
           <div className='profile__image-container'>
               <img className='profile__image' src={props.image}  ></img>
            </div>
        <div className='profile__info-container'>
           <p className='profile__name'>{props.firstName} {props.lastName}</p>
           <p>{props.addressNum} {props.street}</p>
           <p>{props.city}, {props.state} {props.postcode}</p>
        </div>
           
       </div>
   );
}

export default ProfileCard;