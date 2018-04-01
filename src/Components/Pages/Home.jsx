import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Css/Home.css';
import Footer from './Footer';

export default class Home extends Component {
  render(){
    return(
      <div>
      <Grid>
        <Jumbotron>
          <h2>Welcome to Code Practice Playground</h2>
          <p>This app to show how react-bootstrap works and practice react-bootstrap and react-router-dom. </p>
          <Link to='/about'>
            <Button bsStyle="primary">About ... </Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Link to="/Frank"><Image src="assets/person_profile_2.jpeg" circle className="profile-pic" /></Link>
            <Link to="/Frank"><h3>Frank</h3></Link>
            <p>Insert some dummy text in the paragraph for multiple times. </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Link to="/vanessa"><Image src="assets/person_profile_1.jpeg" circle className="profile-pic" /></Link>
            <Link to="/vanessa"><h3>Vanessa</h3></Link>
            <p>Insert some dummy text about this dummy person's story for multiple time in the paragraph.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Link to="/kathy"><Image src="assets/person_profile_4.jpeg" circle className="profile-pic" /></Link>
            <Link to="/kathy"><h3>Kathy</h3></Link>
            <p>Insert some more dummy text goes here. For Riff's dummy story goes here in the paragraph. </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Link to="/david"><Image src="assets/Mike.jpeg" circle className="profile-pic" /></Link>
            <Link to="/david"><h3>David</h3></Link>
            <p>Etiam bibendum ipsum nec tortor sagittis, eu aliquam lorem varius. Integer mattis eu est sit amet accumsan.  </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Link to="/susan"><Image src="assets/Susan.jpeg" circle className="profile-pic" /></Link>
            <Link to="/susan"><h3>Susan</h3></Link>
            <p>Ut fermentum aliquam interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean tristique consectetur nunc</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Link to="/stephine"><Image src="assets/Stephine.jpeg" circle className="profile-pic" /></Link>
            <Link to="/stephine"><h3>Stephine</h3></Link>
            <p>Duis et turpis eget neque gravida sagittis. Nunc laoreet lectus nec erat gravida pulvinar.</p>
          </Col>
        </Row>
      </Grid>
      <Footer />
      </div>
    )
  }
}
