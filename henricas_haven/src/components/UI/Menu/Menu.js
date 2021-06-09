import React from 'react';
import { useStyles } from './Menu-styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MapsHomeWorkIcon from '@material-ui/icons/HomeWorkOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const Menu = (props) => {
  const classes = useStyles(props);
  const list = (anchor) => (
    <div
      className={  clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={props.toggleMenu(false)}
      onKeyDown={props.toggleMenu(false)}
    >
      <List 
      >
        {['About Us', 'Services', 'Gallery', 'Inquiries'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <MapsHomeWorkIcon className={classes.icon} />
          </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    
    </div>
  );

  return (
    <div  >
        <React.Fragment>
          <Drawer 
          className={classes.root}
           anchor="left" open={props.open} onClose={props.toggleMenu(false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
    </div>
  );
};

export default Menu;
