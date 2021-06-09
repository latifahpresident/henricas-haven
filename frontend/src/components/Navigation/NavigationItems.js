import React from 'react';
import {Link, withRouter} from "react-router-dom";
import { useStyles } from './Navigation-styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuDrawer from './../UI/Menu/Menu';
import IconButton from './../UI/Button/Button';
import Button from '@material-ui/core/Button';
import { Menu, } from '@material-ui/icons';
import { Grid } from "@material-ui/core";

const Nav = props => {
    const classes = useStyles(props);
    const { toggleMenu, open } = props;
    return (
        <React.Fragment>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton className="menuButton"  aria-label="menu" color="inherit" onClick={toggleMenu(true)} buttonStyle="iconButton">
                    <Menu className={classes.iconColor}/>
                </IconButton>
               
                <Grid className={classes.linkContainer}>
                    <Button className={classes.link} component={Link} to="/aboutus" color="inherit">About Us</Button>
                    <Button className={classes.link} component={Link} to="/servies" color="inherit">Services</Button>
                    <Grid className={classes.home} onClick={() => props.history.push("/")}>Henrica's Haven</Grid>
                    <Button className={classes.link} component={Link} to="/gallery" color="inherit">Gallery</Button>
                    <Button className={classes.link} component={Link} to="/inquiries" color="inherit">Inquiries</Button>
                </Grid>
                <Grid className={classes.homeBtn} onClick={() => props.history.push("/")}>Henrica's haven</Grid>
            </Toolbar>
        </AppBar>
        <MenuDrawer toggleMenu={toggleMenu} open={open}/>
        
    </React.Fragment>
    )
};

export default withRouter(Nav);