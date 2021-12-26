import React from 'react';

const ProfileCard = (props)=> {

   return(
       <div className='profile-card'>
           <p className='profile__name'>{props.name}</p>
       </div>
   );
}

export default ProfileCard;