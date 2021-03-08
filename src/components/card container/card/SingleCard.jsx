import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';

import useStyles from './styles.card';

const SingleCard = ({ image }) => {

  const classes = useStyles(); 

  return ( 
    <>
      <Grid item xs={12} sm={6}>
        <Card className={classes.card}>
          <CardMedia 
            className={classes.cardMedia}
            image={image}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              Heading
            </Typography>
            <Typography gutterBottom>
              This is some text discribing the image which is i dont know where
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">view</Button>
            <Button size="small" color="primary">Edit</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
   );
}
 
export default SingleCard;