import React from "react";
import Jumbotron from "./../UI/Jumbotron/Jumbotron";
import About from "./About/About";

const Home = () => {
    return (
        <React.Fragment>
            <Jumbotron />
            <About/>
        </React.Fragment>
    )
};

export default Home;