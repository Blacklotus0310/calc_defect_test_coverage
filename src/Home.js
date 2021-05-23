import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (
            <header id="home">
                        <div className="bg-img" style={{backgroundImage:" url('./img/background1.jpg')"}}>
                            <div className="overlay"></div>
                        </div>
                
                        <div className="home-wrapper">
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="home-content">
                                            <h1 className="white-text">We Are Creative Agency</h1>
                                            <p className="white-text">Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.
                                            </p>
                                            <button className="white-btn">Get Started!</button>
                                            <button className="main-btn">Learn more</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>
                </header>
            
		

        )
    }
}
export default Home;