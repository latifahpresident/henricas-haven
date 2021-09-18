import { makeStyles } from '@material-ui/core/styles';
import HomeImage from "./../../../assets/images/christina-wocintechchat-com-vzfgh3RAPzM-unsplash.jpg";
import { darkColor, accentColor } from "./../../../global-styles/global-styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      boxSizing: "border-box",
      padding: "42px 0 36px 0",
      width: "100%",
      position: "relative",
    //   marginBottom: "2rem",
      [theme.breakpoints.down('lg')]: {
        // border: "1px solid hotpink",
       },
      [theme.breakpoints.down('md')]: {
        // border: "1.5px solid limegreen",
       },
      [theme.breakpoints.down('sm')]: {
        // border: "2px solid teal",
       
       },
      
    },
    container: {
        display: "flex",
        alignItems: "center",
        width: "80%",
        flexDirection: "column",
        // border: "1px solid red",
        [theme.breakpoints.down('md')]: {
            width: "100%",
            // border: "1px solid silver",

        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            // border: "1px solid silver",
        },
    },
    content: {
        //  border: "2px solid brown",
        width: "100%",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,       
        // border: "1px solid blue",
        [theme.breakpoints.down('md')]: {
            padding: "0 2.625rem",
            // border: "2px solid black",
        },
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        },
    },
    wrapper: {
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        // border: "2px solid hotpink",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            width: "100%",
            margin: "0 auto",
        },
    },
    title: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        // border: "1px solid red",
        alignSelf: "flex-start",
        padding: "0 1.5rem",
        [theme.breakpoints.down('xs')]: {
            alignSelf: "center"
        },
    },
    tagline: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid teal",
        [theme.breakpoints.down('xs')]: {
            width: 350,
            justifyContent: "flex-start",
        },
    },
    line: {
        width: 30,
        border: `.2px solid ${accentColor}`,
        backgroundColor: `${accentColor}`,
        marginRight: ".5rem"
    },
    h4: {
        color: `${accentColor}`,
        lineHeight: 1.5,
        fontWeight: 500,
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 17
        },
        
      
    },
    h1: {
        fontSize: "2.75rem",
        lineHeight: 1.4,
        fontWeight: "bold",
        maxWidth: 520,
        marginBottom: "2.25rem",
        color: `${darkColor}`,
        [theme.breakpoints.down('sm')]: {
            fontSize: 35
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 28,
            alignSelf: "center"
        },
    },
    p: {
        fontSize: "1.125rem",
        marginBottom: "4rem",
        fontWeight: 400,
        color: `${darkColor}`, 
        textAlign: "justify",
        lineHeight: 1.5,
        padding: "0 1.5rem",
        marginRight: "30rem",
        // border: "1px solid red",
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
            marginRight: "0rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
            textAlign: "center"
        },
    },
    background: {
        position: "absolute",
        top: 0,
        // right: 0,
        background: "#FAFAFA",
        right: "50%",
        marginRight: -235,
        zIndex: 1,
        overflow: "hidden",
        // border: "3px solid orange",
        height: 538,
        width: 1075,
        [theme.breakpoints.down('sm')]: {
            height: 800,
        },
    },
    img: {
        // border: "1px solid hotpink",
        backgroundImage: 'url(' + HomeImage + ')',
        height: 450,
        width: "70%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
        marginRight: "3rem",
        borderRadius: 3,
        [theme.breakpoints.down('md')]: {
            marginRight: "5rem",
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            width: "94%",
            margin: "1rem auto 0 auto",
            height: 400,
        },
    },
   
  }));

  export {useStyles}