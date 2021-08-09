import React, {Component} from 'react'
import axios from 'axios'

class Login extends Component {

    state = {
        password: '',
        phone: '',
        email: ''
    }
    
    passwordChange = event => {
        this.setState({ password: event.target.value });
    }
    numberChange = event => {
        this.setState({ phone: event.target.value });
    }

    signIn = () => {
        axios.post(`http://localhost:3001/auth/sign-in`, 
        {phone: this.state.phone,
        password: this.state.password})
            .then(response => {this.setState({email: response.data.email})
        })
    }
    

    render () {
        return (
            <>
                <input type='phone' onChange={this.numberChange}/>
                <input type='text' onChange={this.passwordChange}/>
                <button type='button' onClick={this.signIn}>Touch</button>
                <p>{this.state.email}</p>
            </>
        )
    }
}

export default Login