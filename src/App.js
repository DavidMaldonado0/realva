import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Aboutus from './pages/aboutus/aboutus.component';
import Contact from './pages/contact/contact.component';

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Switch>
      <Route exact path="/" component={Header}/>
      <Route exact path="/aboutus" component={Aboutus}/>
      <Route exact path="/contact" component={Contact}/>
      </Switch>

      <Footer></Footer>
    </div>
  );
}

export default App;
