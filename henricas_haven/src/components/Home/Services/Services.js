import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, Typography, } from "@material-ui/core";
import { useStyles } from "./Services-styles";

const Services = (props) => {
    const classes = useStyles(props);

    return (
        <section className={classes.root}>
            <Grid className={classes.background}></Grid>
            <Grid className={classes.content}>
                <Grid className={classes.wrapper}>
                <ScrollAnimation  animateIn="fadeIn" className={classes.img}></ScrollAnimation>

                    <ScrollAnimation animateIn="slideInLeft" duration={5} className={classes.container}>
                        <Grid className={classes.title}>
                            {/* <Grid className={classes.tagline}>
                                <div className={classes.line}></div>
                                <Typography component="h4" className={classes.h4}>Quick tagline for about section</Typography>
                            </Grid> */}
                            <Typography component="h1" className={classes.h1}>What We Offer</Typography>
                        </Grid>
                        {/* <Grid className={classes.ul}>
                            <p className={classes.p}>Fiscal Responsibility</p>
                            <p>Business Consulting</p>
                            <p>Building Wealth</p>
                            <p>Business Building</p>
                        </Grid> */}
                        <Typography component="p" className={classes.p}>
                            Fiscal Responsibility
                         </Typography>
                        <Typography component="p" className={classes.p} >
                            Business Consulting
                        </Typography>
                        <Typography component="p" className={classes.p}>
                            Building Wealth
                         </Typography>
                         <Typography component="p" className={classes.p}>
                            Business Building
                         </Typography>
                    </ScrollAnimation>
                </Grid>
            </Grid>
            
        </section>
    )
};

export default Services;