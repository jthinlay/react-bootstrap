import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import Footer from '../Pages/Footer';

const Stephine = () => {
  return (
    <div>
      <Image src='assets/header_image_test.jpg' className="header-image" />
      <Grid>
        <Row>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/Stephine.jpeg" className="about-profile-pic" rounded/>
            <h3>Stephine</h3>
            <p>Aliquam egestas quam vel purus elementum dapibus. Nunc placerat augue et eros aliquam fermentum. Duis lectus quam, tempus quis tempor vel, vehicula at quam.</p>
            <p>Aliquam egestas quam vel purus elementum dapibus. Nunc placerat augue et eros aliquam fermentum. Duis lectus quam, tempus quis tempor vel, vehicula at quam.</p>
            <p>Aliquam egestas quam vel purus elementum dapibus. Nunc placerat augue et eros aliquam fermentum. Duis lectus quam, tempus quis tempor vel, vehicula at quam.</p>
            <p>Aliquam egestas quam vel purus elementum dapibus. Nunc placerat augue et eros aliquam fermentum. Duis lectus quam, tempus quis tempor vel, vehicula at quam.</p>
          </Col>
        </Row>
      </Grid>
      <Footer />
    </div>
  )
}
export default Stephine
