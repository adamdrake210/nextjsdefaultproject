// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import firebase from '../../firebase/firebase';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: '#000000'
  }
}));

const firestore = firebase.firestore();

const HomepageImage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>This is the Homepage</h1>
    </div>
  );
};

export default HomepageImage;
