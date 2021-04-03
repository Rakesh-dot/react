import axios from 'axios';
import {Component} from 'react';
class Login extends Component{
    state={
        email:'',
        password:''
    }
    inputHandlerr=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitUser=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:90/user/login',this.state)
        .then((response)=>{
            console.log(response)
            localStorage.setItem('token',response.data.token);
            window.location.href='/'
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <form action="action_page.php" method="post">
                <div class="container">
                    <label for="email"><b>Email</b></label>
                    <input type="text"  name="email" value={this.state.email}
                    onChange={this.inputHandlerr} />

                    <label for="psw"><b>Password</b></label>
                    <input type="password"  name="password" value={this.state.password} 
                    onChange={this.inputHandlerr}/>

                    <button onClick={this.submitUser}>Login</button>
                    <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

               
            </form>
        )
    }
}

export default Login;