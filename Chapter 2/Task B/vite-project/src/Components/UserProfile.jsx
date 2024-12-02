import PropTypes from "prop-types";import './UserProfile.css'
const UserProfile = (props) => {
    return (
    <div>
        <img src={props.avatar} alt="avatar" />
        <h2>Name : {props.name}</h2>
        <h3>Bio : {props.bio}</h3>
    </div>
    )
}

UserProfile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    avatar: PropTypes.img
}

export default UserProfile
