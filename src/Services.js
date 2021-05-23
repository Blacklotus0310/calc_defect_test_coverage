import React, { Component } from 'react';

class Services extends Component{
    render(){
        return(
            <div>
                <div id="service" className="section md-padding">

                    <div className="container">

                        <div className="row">

                            <div className="section-header text-center">
                                <h2 className="title">What we offer</h2>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-diamond"></i>
                                    <h3>App Development</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-rocket"></i>
                                    <h3>Graphic Design</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-cogs"></i>
                                    <h3>Creative Idea</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-diamond"></i>
                                    <h3>Marketing</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-pencil"></i>
                                    <h3>Awesome Support</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-flask"></i>
                                    <h3>Brand Design</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    </div>
                    <div id="features" className="section md-padding bg-grey">

                        <div className="container">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="section-header">
                                        <h2 className="title">Why Choose Us</h2>
                                    </div>
                                    <p>Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris. Ultrices sagittis orci a scelerisque purus.</p>
                                    <div className="feature">
                                        <i className="fa fa-check"></i>
                                        <p>Quis varius quam quisque id diam vel quam elementum.</p>
                                    </div>
                                    <div className="feature">
                                        <i className="fa fa-check"></i>
                                        <p>Mauris augue neque gravida in fermentum.</p>
                                    </div>
                                    <div className="feature">
                                        <i className="fa fa-check"></i>
                                        <p>Orci phasellus egestas tellus rutrum.</p>
                                    </div>
                                    <div className="feature">
                                        <i className="fa fa-check"></i>
                                        <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div id="about-slider" className="owl-carousel owl-theme">
                                        <img className="img-responsive" src="./img/about1.jpg" alt="" />
                                        <img className="img-responsive" src="./img/about2.jpg" alt="" />
                                        <img className="img-responsive" src="./img/about1.jpg" alt="" />
                                        <img className="img-responsive" src="./img/about2.jpg" alt="" />
                                    </div>
                                </div>

                            </div>

                        </div>

                        </div>
                        <div id="numbers" className="section sm-padding">

                            <div className="bg-img" style={{backgroundImage: "url('./img/background2.jpg')"}}>
                                <div className="overlay"></div>
                            </div>

                            <div className="container">

                                <div className="row">

                                    <div className="col-sm-3 col-xs-6">
                                        <div className="number">
                                            <i className="fa fa-users"></i>
                                            <h3 className="white-text"><span className="counter">451</span></h3>
                                            <span className="white-text">Happy clients</span>
                                        </div>
                                    </div>

                                    <div className="col-sm-3 col-xs-6">
                                        <div className="number">
                                            <i className="fa fa-trophy"></i>
                                            <h3 className="white-text"><span className="counter">12</span></h3>
                                            <span className="white-text">Awards won</span>
                                        </div>
                                    </div>

                                    <div className="col-sm-3 col-xs-6">
                                        <div className="number">
                                            <i className="fa fa-coffee"></i>
                                            <h3 className="white-text"><span className="counter">154</span>K</h3>
                                            <span className="white-text">Cups of Coffee</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-xs-6">
                                        <div className="number">
                                            <i className="fa fa-file"></i>
                                            <h3 className="white-text"><span className="counter">45</span></h3>
                                            <span className="white-text">Projects completed</span>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
            </div>
            
        )
    }
}
export default Services;