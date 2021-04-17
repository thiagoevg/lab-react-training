import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    nationality: '',
    greeting: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let newGreeting = '';
    switch (this.state.nationality) {
      case 'french':
        newGreeting = 'Bonjour';
        break;
      case 'german':
        newGreeting = 'Hallo';
        break;
      case 'english':
        newGreeting = 'Hello';
        break;
    }
    this.setState({ greeting: newGreeting });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <form>
          {/* Email input */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          {/* Password input */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          {/* Nationality input */}
          <label htmlFor="select nationality" className="form-label">
            Nationality
          </label>
          <br />
          <select
            className="form-control"
            name="nationality"
            onChange={this.handleChange}
            value={this.state.nationality}
          >
            <option defaultValue="selected">Select your nationality</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Sign up
          </button>
        </form>
        <br />
        <h1>{this.state.greeting}</h1>
        <br />
        <p>
          {' '}
          {this.state.greeting
            ? `Your email adress is: ${this.state.email}`
            : ''}
        </p>
      </div>
    );
  }
}

export default SignupPage;
