import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Header from './components/header/Header';
import MainComponent from './components/MainComponent/MainComponent';
import CardContainer from './components/card container/CardContainer';
import Footer from './components/footer/Footer';

const App = () => {


  return ( 
    <>
      <CssBaseline />
        <Header />

        <main>
          
          <MainComponent />
          <CardContainer />

        </main>

      <Footer />

    </>
   );
}
 


export default App;