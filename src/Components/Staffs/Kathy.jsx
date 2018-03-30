import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import Footer from '../Pages/Footer';


export default class Kathy extends Component{
  render(){
    return(
      <div>
        <Image src="assets/header_image_2.jpg" className="header-image" />
        <Grid>
          <Row>
            <Col xs={12} sm={8} >
              <Image src="assets/person_profile_4.jpeg" className="about-profile-pic" rounded />
              <h3>Kathy</h3>
              <p>Etiam bibendum ipsum nec tortor sagittis, eu aliquam lorem varius. Integer mattis eu est sit amet accumsan. Donec malesuada cursus metus quis sodales. Donec porttitor lectus metus, eu volutpat libero euismod facilisis. Etiam at pulvinar felis. Aenean nec euismod mi. Phasellus gravida dignissim varius. Sed tincidunt interdum lectus sit amet porta. Sed ut velit porta, malesuada odio non, finibus urna. Donec sed quam sed lectus condimentum dictum sit amet non est. Nullam convallis tristique erat vel aliquam. </p>
              <p>Ut fermentum aliquam interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean tristique consectetur nunc, a aliquam magna accumsan vestibulum. Morbi accumsan hendrerit quam ut dictum. Fusce suscipit at leo vel sagittis. Donec faucibus nisi felis, non maximus eros elementum sollicitudin. Curabitur tristique augue felis, ac tristique massa dignissim vel. Praesent vehicula libero eu magna eleifend pharetra. Nullam quam mauris, semper et purus eget, volutpat aliquet erat. Donec lobortis volutpat mattis. Vivamus iaculis, augue eu mollis pharetra, lacus massa cursus nisl, nec molestie erat libero quis dolor. </p>
            </Col>
            <Col xs={6} sm={4} className="sidebar-section">

              <Image src="assets/header_image_2.jpg" rounded />
              <p>Etiam rhoncus varius massa, sed feugiat lorem commodo vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam volutpat eros ligula. Integer volutpat ultrices nibh, eget luctus metus elementum in. Duis et turpis eget neque gravida sagittis. Nunc laoreet lectus nec erat gravida pulvinar. Sed laoreet libero eu arcu egestas congue. Proin non sodales felis.</p>
              <Image src="assets/header_image_test.jpg" rounded />
              <p>Etiam rhoncus varius massa, sed feugiat lorem commodo vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam volutpat eros ligula. Integer volutpat ultrices nibh, eget luctus metus elementum in. Duis et turpis eget neque gravida sagittis. Nunc laoreet lectus nec erat gravida pulvinar. Sed laoreet libero eu arcu egestas congue. Proin non sodales felis.</p>

            </Col>
          </Row>
        </Grid>
       <Footer />
      </div>
    )
  }
}
