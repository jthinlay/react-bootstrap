import React, {Component} from 'react';
import {Navbar, Nav, NavItem, DropdownButton, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Image} from 'react-bootstrap';
import './CustomNavbar.css';

export default class CustomNavbar extends Component{
  render(){
    return(
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><strong>Tsarong</strong></Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/" >
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about" >
             About
            </NavItem>
            <NavItem evnetKey={3} componentClass={Link} href="/news" to="/news" >
              News
            </NavItem>
            <DropdownButton bsStyle="info" className="dropdown" title='Primary'>
              <MenuItem eventKey='1'><Link to="/about">About</Link></MenuItem>
              <MenuItem eventKey='2'><Link to="/news">News</Link></MenuItem>
              <MenuItem eventKey='3' active={true}><Link to="/">Active Home</Link></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey='4'>Separated link</MenuItem>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
