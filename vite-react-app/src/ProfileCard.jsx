import PropTypes from 'prop-types';

// Using props
// function ProfileCard(props) {
//   return (
//     <div>
//       <h1>Hello, {props.name}</h1>
//       <h3>Alice age is {props.age}</h3>
//       <h4>Status: {props.isMember ? "Active member" : "Guest"}</h4>
//     </div>
//   );
// }

// Using destructing
function ProfileCard({name, age, isMember, hobbies}){
  return (
    <div>
      <h1>Hello, {name}</h1>
      <h3>{name} age is {age}</h3>
      <h4>Status: {isMember ? "Active Member" : "Guest"}</h4>
      <h4>Hobbies:</h4>
      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index}>{hobby}</li>
        })}
      </ul>
    </div>
  );

  // Validations
  ProfileCard.propTypes = {
    name: PropTypes.string,
    age:PropTypes.number,
    isMember:PropTypes.bool,
    hobbies:PropTypes.arrayOf(PropTypes.string)
  };
}

export default ProfileCard;
