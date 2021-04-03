import axios from 'axios';
import {Component} from 'react';

class Home extends Component{
    state={

        data:[]
    }

    componentDidMount(){
        axios.get('http://localhost:90/proteins/all',this.state.config)
        .then((response)=>{
            this.setState({
                data:response.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div class="container">
                <header class="jumbotron my-4">
                <h1 class="display-3">A Warm Welcome!</h1>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                <a href="#" class="btn btn-primary btn-lg">Call to action!</a>
                </header>

                <div class="row">
{

this.state.data.slice(0,6).map((item)=>{

return(

 
 <div class="col-lg-3">
                    <div class="card h-100">
                    <img class="card-img-top" src={"http://localhost:90/"+item.pimage} alt="" />
                    <div class="card-body">
                        <h4 class="card-title">Name: {item.ptitle}</h4>
                        <h4 class="card-title">Desc: {item.pdesc}</h4>
                        <h4 class="card-title">Category: {item.pcategory}</h4>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Add To Cart</a>
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

export default Home;