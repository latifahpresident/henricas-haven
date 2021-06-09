import { makeStyles } from '@material-ui/core/styles';
import {darkColor, white,  } from './../../global-styles/global-styles';

const useStyles = makeStyles((theme) => ({
    footer: {

        backgroundColor: `${darkColor}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "2px solid teal",
        padding: 0,
        overflow: "hidden",
        width: "100%",
        height: 50,
        "& .MuiToolbar-gutters": {
          padding: 0,
          
        },
        [theme.breakpoints.down('xs')]: {
          height: 94,
          marginTop: "1rem",
      },
    },
    menu: {
        // border: "1px solid green",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        [theme.breakpoints.down('xs')]: {
          justifyContent: "space-between",
      },
    },
  
    icon: {
        color:`${white}`,
       
    },
    a: {
        textDecoration: "none",
        color:`${white}`,
        // border: "1px solid green",
        display: "flex",
        alignItems: "center",
        width: "11%",
        justifyContent: "space-between",
        fontStyle: "normal",
        [theme.breakpoints.down('sm')]: {
          fontSize: "1rem",
          // border: "1px solid orange",
          width: "35%",
          flexDirection: "column",
      },
        [theme.breakpoints.down('xs')]: {
          fontSize: ".8rem",
          // border: "1px solid white",
      },
    },
    address: {
      width: "25%",
      [theme.breakpoints.down('xs')]: {
        width: "30%"
      },
    },
    span: {
      [theme.breakpoints.down('xs')]: {
        fontSize: ".8rem",
        marginTop: ".5rem"
      },
    }
  }));

  export { useStyles }