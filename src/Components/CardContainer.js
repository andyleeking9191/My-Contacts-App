import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';

const CardContainer = () => {

    let [profileList, setProfileList] = useState([]);

    async function fetchProfiles() {
        const response = await fetch('https://randomuser.me/api/?results=10&inc=name,picture');
        const profiles = await response.json();
        setProfileList(profiles.results);
        console.log(profiles.results)
    }
    
  
  useEffect(() => {
    fetchProfiles()
  } ,[])


    return(
        <div className='card-container'>
            {profileList.map((profile, index) => (
                <ProfileCard name={profile.name.first} image={profile.picture.thumbnail}/>
            ))}
        </div>
    )
}

export default CardContainer;