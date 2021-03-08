import React, { useState, useEffect }  from 'react';
import { Grid, Container } from '@material-ui/core';

import SingleCard from './card/SingleCard';

import useStyles from './styles.cardcontainer';
import { cardCollection } from '../../data/data';


const CardContainer = () => {

  const [cardsGallery, setCardsGallery] = useState([]);
  const classes = useStyles(); 

  useEffect(() => {
    setCardsGallery(cardCollection);
  }, [cardsGallery])

  return ( 
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
        {cardsGallery.map((card) => (
          <SingleCard key={card} image={card} />
        ))}
        </Grid>
      </Container>
    </>
   );
}
 
export default CardContainer;