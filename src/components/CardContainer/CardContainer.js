import React, { useState, useEffect } from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import './CardContainer.css';

const CardContainer = () => {

    let [profileList, setProfileList] = useState([]);

    async function fetchProfiles() {
        const url = 'https://randomuser.me/api/?results=20&nat=US&inc=name,picture,location,cell,email'
        try{
            const response = await fetch(url);
            const profiles = await response.json();
            setProfileList(profiles.results);
            console.log(profiles)
        } catch(error) {
            console.log(error)
        }
        
    }
    
  
  useEffect(() => {
    fetchProfiles()
  } ,[])


    return(
        <div className='card-container'>
            {profileList.map((profile) => (
                <ProfileCard 
                    firstName={profile.name.first} 
                    lastName={profile.name.last}
                    cell={profile.cell}
                    email={profile.email}
                    addressNum={profile.location.street.number}
                    street={profile.location.street.name} 
                    image={profile.picture.large}
                    city={profile.location.city}
                    state={profile.location.state}
                    postcode={profile.location.postcode}
                />
            ))}
        </div>
    )
}

export default CardContainer;