import {Component, state, submitUser, changeHandle} from "react";
import axios from 'axios';

class Register extends Component{
    state={
        username:"",
        email:"",
        password:"",
        psw_repeat:""
        
    }
    changeHandle=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitUser=(e) =>{
        e.preventDefault();  //it prevents from form to refreshed
        axios.post('http://localhost:90/register', this.state)
        .then((response)=>{
            console.log(response)
            window.location.href='/login'
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        
        return(
            <form action="action_page.php" >
                <div class="container" style={{width:"700px"}}>
                    <h1>Register</h1>
                    <hr/>

                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" id="username" required 
                    value={ this.state.username} onChange={this.changeHandle} />

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required 
                    value={ this.state.email} onChange={this.changeHandle} />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" required 
                    value={ this.state.password} onChange={this.changeHandle} />

                    <label for="psw_repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw_repeat" id="psw_repeat" required 
                    value={ this.state.psw_repeat} onChange={this.changeHandle} />
                    <hr/>

                    <button onClick={this.submitUser} type="submit" class="registerbtn">Register</button>

                    <div class="container signin">
                    <p>Already have an account? <a href="/login">Sign in</a>.</p>
                </div>
                </div>

                


            </form>
        )
    }
}
//
export default Register;