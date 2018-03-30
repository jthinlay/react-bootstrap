import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import Footer from '../Pages/Footer';

const David = () =>{
  return(
    <div>
        <Image src="assets/header_image_2.jpg" className="header-image" />
        <Grid>
          <Row>
            <Col xs={12} sm={8} smOffset={2}>
              <Image src="assets/Mike.jpeg" className="about-profile-pic" rounded/>
              <h3>David</h3>
              <p>Etiam bibendum ipsum nec tortor sagittis, eu aliquam lorem varius. Integer mattis eu est sit amet accumsan. Donec malesuada cursus metus quis sodales. Donec porttitor lectus metus, eu volutpat libero euismod facilisis. Etiam at pulvinar felis. Aenean nec euismod mi. Phasellus gravida dignissim varius. Sed tincidunt interdum lectus sit amet porta. Sed ut velit porta, malesuada odio non, finibus urna. Donec sed quam sed lectus condimentum dictum sit amet non est. Nullam convallis tristique erat vel aliquam. </p>
            </Col>
          </Row>
        </Grid>
        <Footer />
    </div>
  )
}

export default David
