import { Component } from "react";
import {Container,Row,Col} from 'react-bootstrap'
import Home from './Home';
import Register from './Register';
import Login from './Login';
import {Route} from 'react-router-dom';
import Item from './Item'
import AddItem from './AddItem'
import UpdateItem from './UpdateItem'
import Cart from "./Cart";
import admin from './admin'
import About from "./About";
class Body extends Component{
    render(){
        return(
         
                <div>
                    
                        <Route path='/' exact component={Home} />
                        <Route path='/register' component={Register} />  
                        <Route path='/login' component={Login} /> 
                        <Route path='/Item' component={Item} /> 
                        <Route path='/AddItem' component={AddItem} /> 
                        <Route path='/UpdateItem/:id' component={UpdateItem} /> 
                        <Route path='/Cart' component={Cart} /> 
                        <Route path='/admin' component={admin} /> 
                        <Route path='/About' component={About} /> 

                    
                </div>
         
        )
    }
}
export default Body;