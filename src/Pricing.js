import React, {Component} from 'react';

class Pricing extends Component{
    render(){
        return(
            <div>
                <div id="pricing" className="section md-padding">

                    <div className="container">

                        <div className="row">

                            <div className="section-header text-center">
                                <h2 className="title">Pricing Table</h2>
                            </div>

                            <div className="col-sm-4">
                                <div className="pricing">
                                    <div className="price-head">
                                        <span className="price-title">Basic plan</span>
                                        <div className="price">
                                            <h3>$9<span className="duration">/ month</span></h3>
                                        </div>
                                    </div>
                                    <ul className="price-content">
                                        <li>
                                            <p>1GB Disk Space</p>
                                        </li>
                                        <li>
                                            <p>100 Email Account</p>
                                        </li>
                                        <li>
                                            <p>24/24 Support</p>
                                        </li>
                                    </ul>
                                    <div className="price-btn">
                                        <button className="outline-btn">Purchase now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pricing">
                                    <div className="price-head">
                                        <span className="price-title">Silver plan</span>
                                        <div className="price">
                                            <h3>$19<span className="duration">/ month</span></h3>
                                        </div>
                                    </div>
                                    <ul className="price-content">
                                        <li>
                                            <p>1GB Disk Space</p>
                                        </li>
                                        <li>
                                            <p>100 Email Account</p>
                                        </li>
                                        <li>
                                            <p>24/24 Support</p>
                                        </li>
                                    </ul>
                                    <div className="price-btn">
                                        <button className="outline-btn">Purchase now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pricing">
                                    <div className="price-head">
                                        <span className="price-title">Gold plan</span>
                                        <div className="price">
                                            <h3>$39<span className="duration">/ month</span></h3>
                                        </div>
                                    </div>
                                    <ul className="price-content">
                                        <li>
                                            <p>1GB Disk Space</p>
                                        </li>
                                        <li>
                                            <p>100 Email Account</p>
                                        </li>
                                        <li>
                                            <p>24/24 Support</p>
                                        </li>
                                    </ul>
                                    <div className="price-btn">
                                        <button className="outline-btn">Purchase now</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    </div>


                    <div id="testimonial" className="section md-padding">

                    <div className="bg-img" style={{backgroundImage: "url('./img/background3.jpg')"}}>
                        <div className="overlay"></div>
                    </div>

                    <div className="container">

                        <div className="row">

                            <div className="col-md-10 col-md-offset-1">
                                <div id="testimonial-slider" className="owl-carousel owl-theme">

                                    <div className="testimonial">
                                        <div className="testimonial-meta">
                                            <img src="./img/perso1.jpg" alt="" />
                                            <h3 className="white-text">John Doe</h3>
                                            <span>Web Designer</span>
                                        </div>
                                        <p className="white-text">Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.</p>
                                    </div>

                                    <div className="testimonial">
                                        <div className="testimonial-meta">
                                            <img src="./img/perso2.jpg" alt="" />
                                            <h3 className="white-text">John Doe</h3>
                                            <span>Web Designer</span>
                                        </div>
                                        <p className="white-text">Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    </div>
            </div>
        )
    }
}
export default Pricing;