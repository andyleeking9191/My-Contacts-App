import React from 'react';

const ProfileCard = (props)=> {

   return(
       <div className='profile-card'>
           <img src={props.image} className='profile__image' ></img>
           <p className='profile__name'>{props.name}</p>
       </div>
   );
}

export default ProfileCard;