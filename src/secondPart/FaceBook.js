import React from 'react';
// import { data } from '../data/berlin.json';

function FaceBook() {
  return <div>{profiles.map((profile) => UserId(profile))}</div>;
}

function UserId(profile) {
  return (
    <div className="box">
      <img src={profile.img} className="facebook-image" alt="profile picture" />
      <div className="user-data">
        <span>
          <strong>First Name:</strong> {profile.firstName}
        </span>
        <span>
          <strong>Last Name:</strong> {profile.lastName}
        </span>
        <span>
          <strong>Country:</strong> {profile.country}
        </span>
        <span>
          <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
        </span>
      </div>
    </div>
  );
}

export default FaceBook;

//Roubei pq não consegui importar os dados do jeito certo xD
const profiles = [
  {
    firstName: 'Aaron',
    lastName: 'Newell',
    country: 'England',
    img: 'https://i.imgur.com/CFgX3Xx.png',
    isStudent: false,
  },
  {
    firstName: 'Alec',
    lastName: 'Budd',
    country: 'USA',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550165485/Ironclass/IH_Jan1950.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Alexander',
    lastName: 'Burdett',
    country: 'England',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550166990/Ironclass/alexander.jpeg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Amelia',
    lastName: 'Chorng Ua',
    country: 'Malaysia',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550168765/Ironclass/IH_Jan1952.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'André',
    lastName: 'Sebastian',
    country: 'Germany',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550164358/Ironclass/IH_Jan1928.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Axel',
    lastName: 'Dahlin',
    country: 'Sweden',
    img: 'https://i.imgur.com/V8bB1SMb.jpg',
    isStudent: false,
  },
  {
    firstName: 'Emmanuel',
    lastName: 'Iyere',
    country: 'Nigeria',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550166409/Ironclass/IH_Jan1933.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Federico',
    lastName: 'Cassettai',
    country: 'Italy',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550165453/Ironclass/IH_Jan1942.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Felix',
    lastName: 'Grosser',
    country: 'Germany',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550167284/Ironclass/IH_Jan1939.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Franziska',
    lastName: 'Bath',
    country: 'Germany',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550165033/Ironclass/IH_Jan1934.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Jamie',
    lastName: 'Egan',
    country: 'Scotland',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550167356/Ironclass/IH_Jan1947.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Jennifer',
    lastName: 'Roberts',
    country: 'England',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550167383/Ironclass/IH_Jan1943.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Julia',
    lastName: 'Miller',
    country: 'Kazakhstan',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550165074/Ironclass/IH_Jan1937.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Ksenia',
    lastName: 'Danniker',
    country: 'Russia',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550165850/Ironclass/IH_Jan1945.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Laura',
    lastName: 'Puyol Rigol',
    country: 'Catalonia',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550165798/Ironclass/IH_Jan1946.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Malte',
    lastName: 'Felmy',
    country: 'Germany',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550164955/Ironclass/IH_Jan1932.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Marvin',
    lastName: 'Artioli',
    country: 'Italy',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550167631/Ironclass/IH_Jan1953.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Matt',
    lastName: 'Harrison',
    country: 'USA',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550166114/Ironclass/IH_Jan1949.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Maxence',
    lastName: 'Bouret',
    country: 'France',
    img: 'https://i.imgur.com/8P2xl9sb.jpg',
    isStudent: false,
  },
  {
    firstName: 'Min',
    lastName: 'Sheng',
    country: 'Malaysia',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550167221/Ironclass/IH_Jan1951.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Moritz',
    lastName: 'Opitz',
    country: 'Germany',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550167694/Ironclass/IH_Jan1941.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: "Na'aman",
    lastName: 'Hirschfeld',
    country: 'Israel',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550166075/Ironclass/IH_Jan1936.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Pedro',
    lastName: 'Arantes',
    country: 'Brazil',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550167744/Ironclass/IH_Jan1929.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Petter',
    lastName: 'Astedt',
    country: 'Sweden',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550167875/Ironclass/IH_Jan1948.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Ruby',
    lastName: 'Lai',
    country: 'Taiwan',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550167904/Ironclass/IH_Jan1944.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Sinan',
    lastName: 'Taylan',
    country: 'Turkey',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550167937/Ironclass/IH_Jan1940.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Svenja',
    lastName: 'Weiler',
    country: 'Germany',
    img:
      'http://res.cloudinary.com/djyjdargg/image/upload/v1550167977/Ironclass/IH_Jan1938.jpg.jpg',
    isStudent: true,
  },
  {
    firstName: 'Thor',
    lastName: 'Flesjo',
    country: 'Norway',
    img: 'https://i.imgur.com/O5x4RPrb.jpg',
    isStudent: false,
  },
];
