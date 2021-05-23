import React, { Component } from 'react';

class Blog extends Component {
    render(){
        return (
            <div id="blog" className="section md-padding bg-grey">

                <div className="container">

                    <div className="row">

                        <div className="section-header text-center">
                            <h2 className="title">Recents news</h2>
                        </div>

                        <div className="col-md-4">
                            <div className="blog">
                                <div className="blog-img">
                                    <img className="img-responsive" src="./img/blog1.jpg" alt="" />
                                </div>
                                <div className="blog-content">
                                    <ul className="blog-meta">
                                        <li><i className="fa fa-user"></i>John doe</li>
                                        <li><i className="fa fa-clock-o"></i>18 Oct</li>
                                        <li><i className="fa fa-comments"></i>57</li>
                                    </ul>
                                    <h3>Molestie at elementum eu facilisis sed odio</h3>
                                    <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
                                    <a href="blog-single.html">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="blog">
                                <div className="blog-img">
                                    <img className="img-responsive" src="./img/blog2.jpg" alt="" />
                                </div>
                                <div className="blog-content">
                                    <ul className="blog-meta">
                                        <li><i className="fa fa-user"></i>John doe</li>
                                        <li><i className="fa fa-clock-o"></i>18 Oct</li>
                                        <li><i className="fa fa-comments"></i>57</li>
                                    </ul>
                                    <h3>Molestie at elementum eu facilisis sed odio</h3>
                                    <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
                                    <a href="blog-single.html">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="blog">
                                <div className="blog-img">
                                    <img className="img-responsive"  src="./img/blog3.jpg" alt="" />
                                </div>
                                <div className="blog-content">
                                    <ul className="blog-meta">
                                        <li><i className="fa fa-user"></i>John doe</li>
                                        <li><i className="fa fa-clock-o"></i>18 Oct</li>
                                        <li><i className="fa fa-comments"></i>57</li>
                                    </ul>
                                    <h3>Molestie at elementum eu facilisis sed odio</h3>
                                    <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
                                    <a href="blog-single.html">Read more</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
    
}
export default Blog