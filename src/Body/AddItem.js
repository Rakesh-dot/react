import React,{ Component } from "react";
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
class Item extends Component{
state={

ptitle:'',
pdesc:'',
pprice:'',
pimage:null,
config:{
    headers:{"authorization":`Bearer ${localStorage.getItem('token')}`}
}

}

changeHandler =(e)=>{

this.setState({

    [e.target.name]:e.target.value
})

}

fileHandler =(e)=>{

    this.setState({
        pimage:e.target.files[0]
    })
}


insertFile =(e)=>{
    e.preventDefault()
const data = new FormData()
data.append('ptitle',this.state.ptitle)
data.append('pdesc',this.state.pdesc)

data.append('pimage',this.state.pimage)

data.append('pprice',this.state.pprice)

axios.post('http://localhost:90/proteins/insert',data,this.state.config).then((response)=>{



})


}

    render(){
        return(
            <div class="row ">
                <div class="col-lg-7 mx-auto">
                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <form id="contact-form" role="form">
                                    <div class="controls">
                                    <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Image</label> <input onChange={this.fileHandler}  type="file" name="pimage" class="form-control btn btn-danger" placeholder="Add image" required="required" data-error="Description is required." /> </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_name">Product Name *</label> <input onChange={this.changeHandler}  name="ptitle" class="form-control" placeholder="Please enter your product name *" required="required" data-error="Firstname is required." /> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Price of product *</label> <input onChange={this.changeHandler} name="pprice" class="form-control" placeholder="Please enter the price of product"  /> </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Product Description *</label> <input  onChange={this.changeHandler} name="pdesc" class="form-control" placeholder="Please enter the product description *" required="required" data-error="Description is required." /> </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div class="row">
                                    <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " onClick ={this.insertFile}value="Add Product" /> </div>
                                </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        
        )
    }
}

export default Item;