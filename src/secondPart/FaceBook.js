import React from 'react';
import profiles from '../data/berlin.json';

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
