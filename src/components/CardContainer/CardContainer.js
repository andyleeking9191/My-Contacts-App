import ProfileCard from '../ProfileCard/ProfileCard';
import './CardContainer.css';

const CardContainer = (props) => {

    const profileList = props.listOfProfiles;

    return(
        <div className='card-container'>
            {profileList.map((profile) => (
                <ProfileCard
                    key={profile.login.uuid} 
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