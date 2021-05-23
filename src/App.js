import React, { Component } from 'react';
import './App.css';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Portfilio from './Portfolio';
import Pricing from './Pricing';
import Team from './Team'

class App extends Component {
    render(){
        return (
            <HashRouter>
                <div className="App">
                    <header id="nav-s">
                        <div className="bg-img" style={{backgroundImage:" url('./img/background1.jpg')"}}>
                            <div className="overlay"></div>
                        </div>
                        <nav id="nav" className="navbar nav-transparent">
                            <div className="container">
                                <div className="navbar-header">
                                    <div className="navbar-brand">
                                        <a href="index.html">
                                            <img className="logo" src="./img/logo.png" alt="logo"></img>
                                            <img className="logo-alt" src="./img/logo-alt.png" alt="logo-alt"></img>
                                        </a>
                                    </div>
                                    <div className="navbar-collapse">
                                        <span></span>
                                    </div>
                                </div>
                                <ul className="main-nav nav navbar-nav navbar-right">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                                    <li><NavLink to="/services">Services</NavLink></li>
                                    <li><NavLink to="/prices">Prices</NavLink></li>
                                    <li><NavLink to="/team">Team</NavLink></li>
                                    <li className="has-dropdown"><NavLink to="/blog">Blog</NavLink>
                                        <ul className="dropdown">
                                            <li><NavLink to="/blog-single.html">blog post</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/portfolio" component={Portfilio}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/prices" component={Pricing}/>
                        <Route path="/team" component={Team}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                    <footer id="footer" className="sm-padding bg-dark">

		<div className="container">

			<div className="row">

				<div className="col-md-12">

					<div className="footer-logo">
						<a href="index.html"><img src="img/logo-alt.png" alt="logo" /></a>
					</div>

					<ul className="footer-follow">
						<li><a href="#"><i className="fa fa-facebook"></i></a></li>
						<li><a href="#"><i className="fa fa-twitter"></i></a></li>
						<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
						<li><a href="#"><i className="fa fa-instagram"></i></a></li>
						<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
						<li><a href="#"><i className="fa fa-youtube"></i></a></li>
					</ul>
					<div className="footer-copyright">
						<p>Copyright © 2017. All Rights Reserved. Designed by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
					</div>

				</div>

			</div>

		</div>

	</footer>

                </div>
            </HashRouter>
        );
    }
}
export default App;
