import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse'

import Header from './components/Header';
import SideMenu from './components/Side-menu';
import Home from './screens/Home';
import Products from './screens/Products';

import './App.css';
import { getCategories } from './apiServices';
import { safePah } from './utils';
import ProductsCat from './screens/Products/productsCat';




function App() {

  const [categories, setCategories] = useState({});
  const [showSideBar, setShowSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

      setShowSidebar(false);
      setIsMobile(true);
    }

    getCategories().then(response => {
      const categories = safePah([], ['data', 'categories'], response);
      setCategories(categories);
    })
  }, [])

  const handleShowSideMenu = bool => () => {
    if (!isMobile) return;
    setShowSidebar(bool)
  };

  return (
    <div className='app'>
      <Router>

        <Header
          showSideBar={showSideBar}
          isMobile={isMobile}
          handleShowSideMenu={handleShowSideMenu}
        />
        <Row style={{ marginRight: 0, }}>
          <Col lg={2} style={{ paddingRight: 0 }}>
            {
              showSideBar && (
                <SideMenu
                  handleShowSideMenu={handleShowSideMenu}
                  categories={categories} />
              )
            }
          </Col>
          <Col lg={10} style={{ paddingRight: 0 }}>


            <Route exact path="/" component={Home} />
            <Route exact path="/produse" component={Products} />
            <Route exact path="/produse/:category" component={ProductsCat} />


          </Col>
        </Row>
      </Router>

    </div>
  );
}

export default App;
