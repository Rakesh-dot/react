import {Component} from 'react';
import {Link, Route} from 'react-router-dom';
class Header extends Component{

    logout =()=>{

        localStorage.clear()
        window.location.href='/login'
    }
    render(){

        const token = localStorage.getItem('token')
        const type = localStorage.getItem('type')
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"><span>RakaProtein Hub</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">


                            {!token?
                            (<>
                            <li class="nav-item active">
                            <Link to="/login"><a class="nav-link" href="#">LogIn</a>
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/register"><a class="nav-link" href="#">Register</a>
                            </Link>
                        </li>
                            </>)



                            :(<>
                            <li class="nav-item active">
                            <Link to="/" ><a class="nav-link" >Home</a>
                            <span class="sr-only">(current)</span>
                            </Link>
                            </li>
                        
                            
                        <li class="nav-item active">
                            <Link to="/Item"><a class="nav-link" href="#">Product</a>
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/about"><a class="nav-link" href="#">About</a>
                            </Link>
                        </li>

                        {type==="Admin"?(<>
                        
                           
                        <li class="nav-item active">
                            <Link to="/admin"><a class="nav-link" href="#">Admin Panel</a>
                            </Link>
                        </li>
                        </>):(<></>)



                        }
                       
                       
                        <li class="nav-item active" style={{marginLeft:"30px"}}>
                            <Link to="/cart"><a class="nav-link" href="#"><i class="bi bi-cart" ></i></a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </Link>
                        </li>  
                        <li class="nav-item active">
                            <button class="nav-link" onClick={this.logout} style={{marginLeft:"30px"}}>LogOut</button>
                            
                        </li>
                            
                            </>)


                            }
                        
                        
                        </ul>
                    </div>               
                </div>
            </nav>

            

            
            
        )
    }
}

export default Header
