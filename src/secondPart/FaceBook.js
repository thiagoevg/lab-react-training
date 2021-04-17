import React from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends React.Component {
  state = {
    selectedCountry: '',
  };

  uniqueCountries = () => {
    let auxArr = profiles.map((profile) => profile.country);
    let uniqueCountries = [...new Set(auxArr)];
    uniqueCountries.unshift('All');
    return uniqueCountries;
  };
  handleClick = (event) => {
    this.setState({ selectedCountry: event.target.value });
  };

  render() {
    return (
      <div>
        <div>
          {this.uniqueCountries().map((country) => {
            return (
              <button
                className="fb-btn"
                key={country}
                onClick={this.handleClick}
                style={{
                  backgroundColor:
                    this.state.selectedCountry === country ? '#a3d2e2' : '',
                }}
                value={country}
              >
                {country}
              </button>
            );
          })}
        </div>
        <div>
          {profiles.map((profile, idx) => {
            return (
              <div
                className="box"
                style={{
                  backgroundColor:
                    this.state.selectedCountry === profile.country
                      ? '#a3d2e2'
                      : '',
                }}
                key={idx}
              >
                <img
                  src={profile.img}
                  className="facebook-image"
                  alt="profile picture"
                />
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
                    <strong>Type:</strong>{' '}
                    {profile.isStudent ? 'Student' : 'Teacher'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FaceBook;
