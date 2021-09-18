import { makeStyles } from '@material-ui/core/styles';
import { darkColor, accentColor } from "./../../global-styles/global-styles";
import HomeImage from "./../../assets/images/christina-wocintechchat-com-vzfgh3RAPzM-unsplash.jpg";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      boxSizing: "border-box",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    //   border: "1px solid black",
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
    header: {
        display: "flex",
        alignItems: "center",
        width: "80%",
        flexDirection: "column",
        // border: "1px solid red",
        margin: "5rem 0",
        [theme.breakpoints.down('md')]: {
            width: "100%",
            // border: "1px solid silver",

        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            // border: "1px solid silver",
            
        },
    },
  
    // wrapper: {
    //     display: "flex",
    //     alignItems: "stretch",
    //     justifyContent: "space-between",
    //     // border: "2px solid hotpink",
    //     [theme.breakpoints.down('sm')]: {
    //         flexDirection: "column",
    //         width: "100%",
    //         margin: "0 auto",
    //     },
    // },

    h4: {
        color: `${accentColor}`,
        lineHeight: 1.5,
        fontWeight: 500,
        fontSize: 20,
        marginBottom: "1.8rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: 17
        },
        
      
    },
    h1: {
        fontSize: "3.5rem",
        lineHeight: 1.4,
        fontWeight: 700,
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
        marginBottom: "1rem",
        fontWeight: 400,
        color: `${darkColor}`, 
        textAlign: "justify",
        lineHeight: 1.5,
        padding: "0 1.5rem",
        // border: "1px solid red",
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        },
    },
   
    // imgWrapper: {
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    // },
    imgWrapper: {
        // border: "1px solid hotpink",
        backgroundImage: 'url(' + HomeImage + ')',
        height: 675,
        maxWidth: 1080,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginBottom: "5rem",
        // position: "relative",
        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
        // marginRight: "3rem",
        // borderRadius: 3,
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