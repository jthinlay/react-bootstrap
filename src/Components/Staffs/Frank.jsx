import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import Footer from '../Pages/Footer';

export default class Frank extends Component{
  render(){
    return(
      <div>
        <Image src="assets/header_image_2.jpg" className="header-image" />
        <Grid>
          <Row>
          <Col xs={12} sm={8}>
            <Image src="assets/person_profile_2.jpeg" className="about-profile-pic" rounded/>
            <h3>Frank The Tank</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur lacinia nibh, a pulvinar dui dictum in. Cras vel commodo enim, ut convallis est. Duis nec justo nisi. Integer a dui eu justo dapibus efficitur. Sed elementum nulla sit amet ullamcorper mollis. Proin aliquam, arcu et egestas pharetra, mi turpis posuere nulla, nec facilisis nisi dui eu sem. Aliquam quis elit finibus, varius libero quis, ullamcorper sem. Curabitur lacinia rhoncus dui a viverra. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur lacinia nibh, a pulvinar dui dictum in. Cras vel commodo enim, ut convallis est. Duis nec justo nisi. Integer a dui eu justo dapibus efficitur. Sed elementum nulla sit amet ullamcorper mollis. Proin aliquam, arcu et egestas pharetra, mi turpis posuere nulla, nec facilisis nisi dui eu sem. Aliquam quis elit finibus, varius libero quis, ullamcorper sem. Curabitur lacinia rhoncus dui a viverra. </p>
          </Col>
          <Col xs={12} sm={4} >
            <Image src="assets/person_profile_3.jpeg" className="about-profile-pic" rounded/>
            <h4>The Lady of the Year</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur lacinia nibh, a pulvinar dui dictum in. Cras vel commodo enim, ut convallis est. Duis nec justo nisi. Integer a dui eu justo dapibus efficitur. Sed elementum nulla sit amet ullamcorper mollis. Proin aliquam, arcu et egestas pharetra, mi turpis posuere nulla, nec facilisis nisi dui eu sem. Aliquam quis elit finibus, varius libero quis, ullamcorper sem. Curabitur lacinia rhoncus dui a viverra. </p>
          </Col>
          </Row>
        </Grid>
      <Footer />
      </div>
    )
  }
}
