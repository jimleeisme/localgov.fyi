import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import {navigateTo} from 'gatsby-link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Search from './Search/index';
import withRoot from '../withRoot';

const styles = theme => ({
  header: {
    background: theme.palette.common.white,
    color: theme.palette.primary['700'],
    boxShadow: `0 0 10px 5px ${theme.palette.primary["A200"]}`
  },
  flex: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  title:{
    paddingTop: theme.spacing.unit*2,
    paddingLeft: theme.spacing.unit*2
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class HeaderWithSearch extends Component {
  render() {
    const { classes} = this.props;

    return (
      <AppBar position="static" className={classes.header}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3} style={{'cursor': 'pointer'}} onClick={() => navigateTo('/') }>
            <Typography variant="display1" color="inherit" component="h1" className={classes.title}>
              Localgov.fyi
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Search inHeader={true}/>
          </Grid>
          <Grid item sm={3}/>
        </Grid>
      </AppBar>
    );
  }
}

export default withRoot(withStyles(styles)(HeaderWithSearch));
