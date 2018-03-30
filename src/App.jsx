import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import News from './Components/Pages/News';
import Frank from './Components/Staffs/Frank';
import Vanessa from './Components/Staffs/Vanessa';
import Kathy from './Components/Staffs/Kathy';
import David from './Components/Staffs/David';
import Susan from './Components/Staffs/Susan';
import Stephine from './Components/Staffs/Stephine';
import CustomNavbar from './Components/Navbar/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <CustomNavbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/frank" component={Frank} />
            <Route path="/vanessa" component={Vanessa} />
            <Route path="/kathy" component={Kathy} />
            <Route path="/david" component={David} />
            <Route path="/susan" component={Susan} />
            <Route path="/stephine" component={Stephine} />
            <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}
export default App;
