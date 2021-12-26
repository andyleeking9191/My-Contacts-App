import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';

const CardContainer = () => {

    let [profileList, setProfileList] = useState([]);

      async function fetchProfiles() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const profiles = await response.json();
      setProfileList(profiles)
      console.log(profiles)
  }
  
  useEffect(() => {
    fetchProfiles()
  } ,[])


    return(
        <div className='card-container'>
            {profileList.map(profile => (
                <ProfileCard name={profile.name} key={profile.name}/>
            ))}
        </div>
    )
}

export default CardContainer;