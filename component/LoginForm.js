import React from 'react'
import {loginUser} from '../lib/auth'


class LoginForm extends React.Component {
    state = {
        nameid:'',
        password:''
    }
    
    handleChange = event => {
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit = event => {
        const {nameid, password} = this.state;

        event.preventDefault();
        console.log(this.state);
        loginUser(nameid, password);
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type='text'
                    name='nameid'
                    placeholder='nameid'
                    onChange={this.handleChange} 
                    />
                </div>
                <div>
                    <input type='password'
                    name='password'
                    placeholder='password'
                    onChange={this.handleChange} 
                    />
                </div>
                <button type='submit'>submit</button>
            </form>
        )
    }
}

export default LoginForm;