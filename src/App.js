import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {Component} from 'react';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Tabledata from './components/Tabledata.js';
import { Routes, Route, } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add/:id" element={<Home />} />
            <Route path="/tabledata" element={<Tabledata />} />
          </Routes>
        </div>
    );
  }
}

export default App;

