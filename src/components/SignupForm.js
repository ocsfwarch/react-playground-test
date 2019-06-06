import React, { Component } from 'react'

export class SignupForm extends Component {
  render() {
    return (
    <div>
        <form name="signup" action="/signup">
            <div>
            <label for="username">Username</label>
            <input type="text" name="username" required />
            </div>

            <div>
            <label for="password">Password</label>
            <input type="password" name="password" />
            </div>

            <input type="submit" />
        </form>      
    </div>
    )
  }
}

export default SignupForm
