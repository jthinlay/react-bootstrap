import React, {Component} from 'react';
import {Row, Col, Nav, NavItem, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Css/Footer.css';

export default class Footer extends Component{
  render(){
    return(

          <Row className="navitem">
            <Col xs={12} md={8}>
              <Navbar default collapseOnSelect>
                <Nav>
                  <NavItem> <Link to="/">Home</Link></NavItem>
                  <NavItem> <Link to="/about">About</Link></NavItem>
                  <NavItem> <Link to="/news">News</Link></NavItem>
                </Nav>
               </Navbar>

            </Col>
              <p>Copyright Reserved 2018</p>
          </Row>

    )
  }
}
