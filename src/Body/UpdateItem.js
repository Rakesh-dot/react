import axios from "axios";
import React,{ Component } from "react";

class UpdateItem extends Component{
    state={
        ptitle:"",
        pdesc:"",
        pprice:"",
        Id:this.props.match.params.id,
        config:{
            headers:{"authorization":`Bearer ${localStorage.getItem('token')}`}
        }
    }
 
    componentDidMount(){
        axios.get('http://localhost:90/proteins/single/'+this.state.Id)
        .then((response)=>{
            this.setState({
                ptitle:response.data.ptitle,
                pdesc:response.data.pdesc,
                pprice:response.data.pprice
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    updatePro = (e)=>{
        e.preventDefault()
        axios.put("http://localhost:90/proteins/update", this.state,this.state.config)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
        alert("Update Done")
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
                                                <div class="form-group"> <label for="form_name">Product Name *</label> <input onChange={this.changeHandler} value ={this.state.ptitle}  name="ptitle" class="form-control" placeholder="Please enter your product name *" required="required" data-error="Firstname is required." /> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Price of product *</label> <input onChange={this.changeHandler} value ={this.state.pprice} name="pprice" class="form-control" placeholder="Please enter the price of product"  /> </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Product Description *</label> <input  onChange={this.changeHandler} value ={this.state.pdesc} name="pdesc" class="form-control" placeholder="Please enter the product description *" required="required" data-error="Description is required." /> </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div class="row">
                                    <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " onClick ={this.updatePro}value="Update Product" /> </div>
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

export default UpdateItem