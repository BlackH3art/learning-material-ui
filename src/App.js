import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import useStyles from './styles.app';

const App = () => {

  const classes = useStyles();

  const cards = [1, 2, 3, 4, 5, 6]


  return ( 
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Menu className={classes.icon} />
          <Typography variant="h6">
            Some text
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container className={classes.container} maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Where is my text
            </Typography>
            <Typography variant="subtitle" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Typography>

            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Click me!
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Don't click me!
                  </Button>
                </Grid>
              </Grid>
            </div>

          </Container>
        </div>
        
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid key={card} item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia 
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
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
          ))}
          </Grid>
        </Container>

      </main>

      <footer className={classes.footer}>
        <Typography variant="h5" align="center" gutterBottom> Some text</Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">Something else here</Typography>
      </footer>  

    </>
   );
}
 


export default App;