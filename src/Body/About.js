import { Component } from 'react';
import logo from '../pict/logo.PNG'
export default class About extends Component{
    render(){
        return(
            <section className="w3ls-bnrbtm py-5" id="about">
                <div className="container py-xl-5 py-lg-3">
                    <div className="title-section text-center mb-md-5 mb-4">
                    <h3 className="w3ls-title mb-3">About <span>Us</span></h3>
                    <p className="titile-para-text mx-auto"><b>Best Supplement Product Selling All Over Nepal</b></p>
                    </div>
                    <div className="row">
                    <div className="col-lg-6 pr-xl-5 mt-xl-2 mt-lg-0">
                        <h3 className="title-sub mb-4">Raka Protein Hub</h3>
                        <p className="sub-para">Raka Protein Hub is the most rewarding online proteins shopping platform led
by different supplements company through U.S and Europe with the objective of expanding and flourising
protein e-commerce industries in Nepal. This primary objective of Raka Protein Hub is to build its store
and promote different athlete in Nepal.</p>
                        <p className="sub-para pt-4 mt-4 border-top">Raka Protein Hub pledges to disintermediate the monopoly of mediators. Its
main aim is to uplift the bodybuilding sports and promote local athlete and different bodybuilding shows all over the Nepal.</p>
                    </div>
                    <div className="col-lg-6 text-center mt-lg-0 mt-4">
                        <img src={logo} alt="about" className="img-fluid" />
                    </div>
                    </div>
                </div>
            </section>



        )
    }
}
















