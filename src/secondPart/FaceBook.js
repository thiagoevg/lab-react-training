import profiles from '../data/berlin.json';


function FaceBook(props) {
    return ({profiles.forEach})
}


function UserId(props) {
  return (
    <div className="box">
      <img src={props.picture} className="id-image" alt="profile picture" />
      <div className="user-data">
        <span>
          <strong>First Name:</strong> {props.firstName}
        </span>
        <span>
          <strong>Last Name:</strong> {props.lastName}
        </span>
        <span>
          <strong>Genrer:</strong> {props.gender}
        </span>
        <span>
          <strong>Height:</strong> {props.height}
        </span>
        <span>
          <strong>Birth:</strong> {props.birth}
        </span>
      </div>
    </div>
  );
}

profiles.

export default FaceBook;

let ex = {
  firstName: 'Aaron',
  lastName: 'Newell',
  country: 'England',
  img: 'https://i.imgur.com/CFgX3Xx.png',
  isStudent: false,
};

class App extends React.Component {
  render() {
    const data = [
      {
        "0": "www.google.com",
        "1": "Click here and enjoy searching",
        "2": "17"
      },
    ];

    return (
      <ul>
        {data.map(item => {
          return <li>{item[0]}</li>;
        })}
      </ul>
    );
  }
}