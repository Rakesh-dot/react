import React,{ Component } from "react";
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
class Item extends Component{
    state={
        items:[],
        config:{
            headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
        }
    }
    componentDidMount(){
        axios.get('http://localhost:90/proteins/all',this.state.config)
        .then((response)=>{
            this.setState({
                items:response.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    deleteMyItem=(proId)=>{
        axios.delete('http://localhost:90/proteins/delete/'+proId, this.state.config)
        .then((response)=>{
            console.log(response)
            window.location.href='/item'
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

addToCart =(pid)=>{

axios.post('http://localhost:90/booking/'+pid,this.state,this.state.config).then((response)=>{

alert("Bookings Done")
})


}
    render(){
        const type = localStorage.getItem('type')
        return(
            <div className="container" >
                <div className="row" >
                {
                    this.state.items.map((product)=>{
                        return(
                           

                            <div class="col-lg-4" style={{marginTop:"50px"}}>
                                <div class="card h-80">
                                <img class="card-img-top" src={"http://localhost:90/"+product.pimage} alt="" style={{height:"300px",width:"200px",marginLeft:"auto",marginRight:"auto"}}/>
                                <div class="card-body">
                                    <p>Name: {product.ptitle}</p>
                                    <p>Price:Nrs: {product.pprice}</p>
                                    <p>Description: {product.pdesc}</p>
                                    <p><button onClick={this.addToCart.bind(this,product._id)}>Add To Cart</button></p>
                                    {type==="Admin"?(<>
                                        <p><button onClick={this.deleteMyItem.bind(this,product._id)}>Delete</button></p>
                                    <p><button><Link to={'/updateItem/'+product._id}>Update</Link></button></p>
                                   
                                    </>):(<></>)


                                    }
                                    
                                </div>
                                </div>
                            </div>
                            
                        )
                    })
                }
                
            </div>
            </div>
        )
    }
}

export default Item;