import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './Css/About.css';
import Footer from './Footer';

export default class About extends Component{
  render(){
    return(
      <div>
        <Image src="assets/header_image_2.jpg" className="header-image" />
        <Grid>
          <Row>
          <Col xs={12} sm={8}>
            <Image src="assets/poster.jpg" className="about-profile-pic" rounded/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur lacinia nibh, a pulvinar dui dictum in. Cras vel commodo enim, ut convallis est. Duis nec justo nisi. Integer a dui eu justo dapibus efficitur. Sed elementum nulla sit amet ullamcorper mollis. Proin aliquam, arcu et egestas pharetra, mi turpis posuere nulla, nec facilisis nisi dui eu sem. Aliquam quis elit finibus, varius libero quis, ullamcorper sem. Curabitur lacinia rhoncus dui a viverra. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur lacinia nibh, a pulvinar dui dictum in. Cras vel commodo enim, ut convallis est. Duis nec justo nisi. Integer a dui eu justo dapibus efficitur. Sed elementum nulla sit amet ullamcorper mollis. Proin aliquam, arcu et egestas pharetra, mi turpis posuere nulla, nec facilisis nisi dui eu sem. Aliquam quis elit finibus, varius libero quis, ullamcorper sem. Curabitur lacinia rhoncus dui a viverra. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur lacinia nibh, a pulvinar dui dictum in. Cras vel commodo enim, ut convallis est. Duis nec justo nisi. Integer a dui eu justo dapibus efficitur. Sed elementum nulla sit amet ullamcorper mollis. Proin aliquam, arcu et egestas pharetra, mi turpis posuere nulla, nec facilisis nisi dui eu sem. Aliquam quis elit finibus, varius libero quis, ullamcorper sem. Curabitur lacinia rhoncus dui a viverra. </p>
          </Col>
          <Col xs={8} sm={4}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur lacinia nibh, a pulvinar dui dictum in. Cras vel commodo enim, ut convallis est. Duis nec justo nisi. Integer a dui eu justo dapibus efficitur. Sed elementum nulla sit amet ullamcorper mollis. Proin aliquam, arcu et egestas pharetra, mi turpis posuere nulla, nec facilisis nisi dui eu sem. Aliquam quis elit finibus, varius libero quis, ullamcorper sem. Curabitur lacinia rhoncus dui a viverra. </p>
          <Image src="assets/header_image_test.jpg" className="profile-pic" rounded />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}
