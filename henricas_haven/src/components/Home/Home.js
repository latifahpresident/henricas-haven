import React from "react";
import CallToActionBtn from "./../UI/Button/Button"
import { Typography, } from "@material-ui/core";
import { useStyles } from "./Home-styles";
import About from "./About/About";
import Services from "./Services/Services";

const Home = (props) => {
    const classes = useStyles(props);

    return (
        <article className={classes.root}>
            <header className={classes.header}>
                <Typography component="h1" className={classes.h1}>Henrica's Haven</Typography>
                <Typography component="h4" className={classes.h4}>Business Management Consulting Services</Typography>
                <CallToActionBtn className="btn_reg"  ariaLabel="call now" color="inherit" onClick={() => props.history.push("/")} buttonStyle="button">
                    Call Now
                </CallToActionBtn>
            </header>
            <div className={classes.imgWrapper}> </div>
            <About/>
            <Services/>
        </article>
    )
};

export default Home;