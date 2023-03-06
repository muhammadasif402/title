import React, { Component } from 'react'

export default class Auth extends Component {
    login() {
        console.warn("state", this.state)
        // alert("Login  Called")
    }
    render() {
        return (
            <div>

                <div>
                    <input type="text"
                        onChange={(e) => (this.setState({ email: e.target.value }))}
                    /><br></br>
                    <input type="text"
                        onChange={(e) => (this.setState({ password: e.target.value }))}
                    /><br></br>
                    <button onClick={() => this.login()}> login </button>
                </div>


            </div>
        )
    }
}
