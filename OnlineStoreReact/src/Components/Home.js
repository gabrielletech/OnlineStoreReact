import React, { Component } from 'react';

class Home extends Component {
    render() {
    return (
    <div>
    <img src={this.props.image} alt="Logo" />
    <h1 className="heading1">Get Makeup And Go</h1>
    <h1 className="welcome"> Welcome, Beautiful! </h1>
    <h3>Ready for your glam fix? </h3><br></br>
    </div>)
    } 

}

export default Home;


