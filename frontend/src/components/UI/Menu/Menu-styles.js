import { makeStyles } from '@material-ui/core/styles';
import { transparentDarkColor, } from "./../../../global-styles/global-styles"
const useStyles = makeStyles((theme) => ({
    root: {
      height: "calc(100vh - 64px)",
      backgroundColor: "#000000a3",
      "& .MuiPaper-root" : {
        backgroundColor: `${transparentDarkColor}`,
      },
    },
   
    list: {
      width: 250,
      color: "white",
      marginTop: "4rem",
    },
    fullList: {
      width: 'auto',
    },
    icon: {
      color: "white",
      zIndex: 1000,
    }
  }));

  export { useStyles };