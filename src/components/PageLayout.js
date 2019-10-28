// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  container: {
    margin: '0 auto',
    maxWidth: '900px',
    width: '100%',
  },
}));

type Props = {|
  children: Function,
|};

function PageLayout({ children }: Props) {
  const classes = useStyles();

  return <Grid className={classes.container}>{children}</Grid>;
}

export default PageLayout;
