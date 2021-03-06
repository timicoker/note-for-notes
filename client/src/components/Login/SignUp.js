import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    email: '',
    username: '',
    password: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div className="login-outer-container">
        <div className="login-inner-container">
          <h1 className="heading">SignUp</h1>
          <form>
            <div>
              <label htmlFor="username"></label>
              <input
                className="login-user"
                type="text"
                id="username"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                className="login-user"
                type="text"
                id="email"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input
                className="login-pass"
                type="text"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <button
              className="button"
              type="submit"
              onClick={this.handleSubmit}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
