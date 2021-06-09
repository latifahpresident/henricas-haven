import React from 'react';
import { useStyles } from './Footer-styles';
import { Phone, Facebook, HomeWorkOutlined} from '@material-ui/icons';
import { Grid } from "@material-ui/core";

const Footer = props => {
    const classes = useStyles(props);
    return (
            <footer className={classes.footer}>
                <Grid className={classes.menu}>
                    <address className={`${classes.a} ${classes.address}`} ><HomeWorkOutlined className={classes.icon}/> <span className={classes.icon}/> <span className={classes.span}>6700 Alexander Bell Drive Ste 200</span></address>
                    <a className={classes.a} href="https://www.facebook.com/"><Facebook className={classes.icon}/> <span className={classes.icon}/> <span className={classes.span}>Henrica's Haven</span></a>
                    <a className={classes.a} href="tel:1-410-926-9500"><Phone className={classes.icon}/> <span className={classes.span}>410 926 9500</span></a>
                </Grid>
            </footer>
    )
};

export default Footer;