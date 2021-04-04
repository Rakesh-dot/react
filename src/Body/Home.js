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
                </header>

                <div class="row">
{

this.state.data.slice(0,6).map((item)=>{

return(

 
    <div class="col-lg-3">
                    <div class="card h-100">
                    <img class="card-img-top" src={"http://localhost:90/"+item.pimage} style={{height:"300px",width:"200px",marginLeft:"auto",marginRight:"auto"}}/>
                    <div class="card-body">
                        <p class="card-title">Name: {item.ptitle}</p>
                        <p class="card-title">Desc: {item.pdesc}</p>
                        <p class="card-title">Category: {item.pcategory}</p>
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