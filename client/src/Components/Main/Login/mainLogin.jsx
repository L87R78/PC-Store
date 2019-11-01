import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

class MainLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="bg_login">
                <div className="login_box">
                    <br />

                    <h3>Login</h3>
                    <div className="create_account">
                        <span>New to PC-Store? </span>
                        <button className="btn_createAccount" to="#"> Create your PC-Store account now</button>
                    </div>

                    <form >
                        <TextField
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"
                            label="Email"
                        />
                        <TextField type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            label="Password"
                        />
                    </form>
                    <Link to="#">Forgotten Password?</Link>
                    <br />
                    <button className="btn_login">Login</button>
                </div>
            </div>
        )
    }
}
export default MainLogin
