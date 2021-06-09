import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, Typography, } from "@material-ui/core";
import { useStyles } from "./About-styles";

const About = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Grid className={classes.background}></Grid>
            <Grid className={classes.content}>
                <Grid className={classes.wrapper}>
                    <ScrollAnimation animateIn="slideInLeft" duration={5} className={classes.container}>
                        <Grid className={classes.title}>
                            <Grid className={classes.tagline}>
                                <div className={classes.line}></div>
                                <Typography component="h4" className={classes.h4}>Quick tagline for about section</Typography>
                            </Grid>
                            <Typography component="h1" className={classes.h1}>About Us</Typography>
                        </Grid>
                        <Typography component="p" className={classes.p}>
                            Lorem ipsum dolor sit amet, consectetur <strong>Henrica's Haven</strong>. Elit tempus dignissim leo, ut <strong>care</strong> nibh gravida finibus. Vestibulum vel tincidunt est. Maecenas ac elit sit amet metus malesuada efficitur. Ut vehicula efficitur elit ut euismod.
                        </Typography>
                        <Typography component="p" className={classes.p} style={{marginBottom: 0}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus <strong>experienced</strong>, ut lacinia nibh gravida finibus. 
                            Vestibulum vel tincidunt est. 
                        </Typography>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn="fadeIn" className={classes.img}></ScrollAnimation>
                </Grid>
            </Grid>
            
        </div>
    )
};

export default About;