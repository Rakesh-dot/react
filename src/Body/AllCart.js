import { Component } from 'react';
import axios from 'axios';
export default class AllCart extends Component{
    state={

        data:[],config:{
            headers:{"authorization":`Bearer ${localStorage.getItem('token')}`}
        },total:0
    }
    componentDidMount =()=>{
    
        axios.get('http://localhost:90/booking/sho').then((response)=>{
    
    console.log(response.data.data)
    this.setState({data:response.data.data,total:response.data.total})
    
    
    
        })
    }
    delete =(pid)=>{
        axios.delete('http://localhost:90/delete/'+pid).then((response)=>{
        console.log(response.data.data)
        window.location.href='/cart'
    })
    }
    
    plus =(data)=>{
    const quantity = document.querySelector(`.qty${data._id}`)
    let qty = parseInt(quantity.innerHTML)
    qty+=1
    axios.put('http://localhost:90/updateBooking/'+data._id,{Qty:qty},this.state.config).then((response)=>{
    
    alert('Updated')
    
    
    })
    }
    
    minus =(data)=>{
      const quantity = document.querySelector(`.qty${data._id}`)
      let qty = parseInt(quantity.innerHTML)
      qty-=1
      axios.put('http://localhost:90/updateBooking/'+data._id,{Qty:qty},this.state.config).then((response)=>{
      
      alert('Updated')
      
      
      })
      }
    render(){
        return(
            
            <>
            <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
            <div className="container bootstrap snippets bootdey">
              <div className="col-md-12 col-sm-8 content">
                <div className="row">
                  <div className="col-md-12">
                    <ol className="breadcrumb">
                      <li><a href="#">My</a></li>
                      <li className="active">Cart</li>
                    </ol>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="panel panel-info panel-shadow">
                      
                      <div className="panel-body"> 
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            <tbody>

                                {this.state.data.map((data,i)=>{
                                    return(
                                        <tr>
                                        <td><img src={"http://localhost:90/"+data.ProductId.pimage} className="img-cart" style={{height:"300px",width:"200px",marginLeft:"auto",marginRight:"auto"}}/></td>
                                        <td><strong>Product {i+1}</strong><p>{data.ProductId.pname}</p></td>
                                        <td>
                                          
                                          
                                            <p className={"qty"+data._id} >{data.Qty}</p>
                                            <button rel="tooltip" className="btn btn-default" onClick={this.plus.bind(this,data)} style={{backgroundColor:"red",width:"30px"}}>+</button>
                                            <button  className="btn btn-default"  onClick={this.minus.bind(this,data)} style={{backgroundColor:"red",width:"30px",marginLeft:"10px"}}>-</button>
                                            <p><button  className="btn btn-primary" onClick={this.delete.bind(this,data._id)} style={{width:"100px", marginTop:"20px"}}><i className="fa fa-trash-o" /></button> </p>
                                            
                                         
                                        </td>
                                        <td>${data.ProductId.pprice}</td>
                                        <td>${parseInt(data.Qty) * parseInt(data.ProductId.pprice) }</td>
                                      </tr>
                                      
                                        
                                    )
                                })}
                            
                              <tr>
                                <td colSpan={6}>&nbsp;</td>
                              </tr>

                             
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="btn btn-success"><span className="glyphicon glyphicon-arrow-left" />&nbsp;Continue Shopping</a>
                    <a href="#" className="btn btn-primary pull-right">Next<span className="glyphicon glyphicon-chevron-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </>
          


        )
    }
}
















