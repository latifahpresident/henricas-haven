import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, Typography, } from "@material-ui/core";
import { useStyles } from "./About-styles";

const About = (props) => {
    const classes = useStyles(props);

    return (
        <section className={classes.root}>
            <Grid className={classes.background}></Grid>
            <Grid className={classes.content}>
                <Grid className={classes.wrapper}>
                    <ScrollAnimation animateIn="slideInLeft" duration={5} className={classes.container}>
                        <Grid className={classes.title}>
                            {/* <Grid className={classes.tagline}>
                                <div className={classes.line}></div>
                                <Typography component="h4" className={classes.h4}>Quick tagline for about section</Typography>
                            </Grid> */}
                            <Typography component="h1" className={classes.h1}>What We Do</Typography>
                        </Grid>
                        <Typography component="p" className={classes.p}>
                            We focus on proven solutions that are created uniquely for each  client. As a rule, our consulting process is divided into four phases. These phases cover a variety of tasks and diligently lead our clients to success and resolution. 
                         </Typography>
                        <Typography component="p" className={classes.p} style={{marginBottom: 0}}>
                            Inviting someone from the outside to help you navigate challenges within your business or family, is a difficult choice. 
                            You want to make sure you are asking the right person who can bring the right assistance. 
                            You want somebody who is utilizing proven techniques that will deliver lasting results versus guessing at solutions and hoping for the best. 
                        </Typography>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn="fadeIn" className={classes.img}></ScrollAnimation>
                </Grid>
            </Grid>
            
        </section>
    )
};

export default About;