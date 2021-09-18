import { makeStyles } from '@material-ui/core/styles';
import {darkColor, white} from "./../../../global-styles/global-styles";

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
      
      [theme.breakpoints.up('md')]: {
          display: "none",
         },

        
    }, 
    btn_reg: {
      color: `${white}`,
      // border: "1px solid green",
      background: `${darkColor}`,
      height: 60,
      width: 195.88,
      fontWeight: 400,
      borderRadius: 2,
      fontSize: "1rem",
      "&:hover": {
        background: `${darkColor}`,
      }
    }
   
  }));

  export { useStyles }