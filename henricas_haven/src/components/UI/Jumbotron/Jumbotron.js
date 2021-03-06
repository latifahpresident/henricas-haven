import React from "react";
import {withRouter} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import HomeImage from "./../../../assets/images/todd-kent-178j8tJrNlc-unsplash.jpg";
import {white, accentColor} from "./../../../global-styles/global-styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundImage: 'url(' + HomeImage + ')',
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
    //   zIndex: 1,
      width: "100%",
    },
    wrapper: {
        position: "absolute",
        background: "rgb(63 132 181 / 50%)",
        zIndex: 2,
        // border: "5px solid red",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    home: {
        border: `3px solid ${accentColor}`,
        height: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: ".5rem",
        width: "100%",
        color: `${white}`,
        fontSize: "3rem",
       zIndex: 4,
    },
  }));
const Jumbotron = (props) => {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
        <Grid className={classes.wrapper}>
            <ScrollAnimation animateIn="slideInUp" >
            <Grid className={classes.home} onClick={() => props.history.push("/")}>Henrica's <br/> Haven</Grid>
            </ScrollAnimation>
        </Grid>
        </Grid>
    )
};

export default withRouter(Jumbotron);