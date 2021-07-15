import React from 'react';
import NavigationBar from './components/NavigationBar';
//import FrontImage from './components/FrontImage';

import Home from './components/Home';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CabañasList from './components/CabañasList';


export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavigationBar user={user} updateUser={updateUser} /> */}
        <NavigationBar />

        <Switch>
          <Route exact path="/">
            {/* <PubsList type="publicaciones" /> */}
            <Home />
          </Route>

          <Route exact path="/cabañas">
            <CabañasList />
          </Route>

          {/*  <Route path="/mispublicaciones">
            <PubsList type="mispublicaciones" />
          </Route>

          <Route path="/favoritos">
            <PubsList type="favoritos" />
          </Route>

          <Route path="/detail/:id">
            <PubDetail />
          </Route> */}

          {/* <NotFound /> */}
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

