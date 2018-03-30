import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './Css/News.css';
import Footer from './Footer';

export default class News extends Component {
  render(){
    return(
      <div>
          <Image src="assets/header_image_test.jpg" className="header-image" />
          <Grid>
            <h2>News</h2>
              <Row>
                <Col xs={12} sm={8} className="main-section">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed diam a nunc ullamcorper faucibus gravida et turpis. Praesent sollicitudin convallis quam, scelerisque ullamcorper quam bibendum vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse dignissim velit felis, ac egestas ex pulvinar vel. Aenean sit amet odio ut sapien hendrerit sodales. Mauris in sapien lectus. Donec commodo tellus vitae magna luctus porttitor. Maecenas dignissim sapien felis, non faucibus sem pellentesque a. Donec pulvinar odio sapien.</p>

                  <p>Etiam sit amet nisi diam. Suspendisse egestas enim leo, vitae dapibus tortor blandit id. Morbi ullamcorper finibus ante, nec lobortis mi blandit tristique. Sed eu viverra ante, vel porttitor massa. Maecenas nisi justo, hendrerit at nulla at, aliquam consequat eros. Praesent sem lectus, tincidunt eu metus id, egestas ultricies magna. Duis tempor ullamcorper purus, vitae rutrum eros mattis sagittis. Praesent luctus lorem ipsum. Aliquam consequat nibh sed leo mattis eleifend. Nulla congue magna ex, ac sagittis lacus luctus nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas tincidunt mi augue, sed pretium quam pretium vitae. Etiam vitae tortor lectus. Ut euismod, dolor sed convallis luctus, nunc est consequat nunc, eget porta sem nunc vitae ligula.</p>

                  <p>Ut commodo diam a neque eleifend imperdiet. Donec molestie pharetra blandit. Nulla malesuada nibh vitae mi condimentum, eget consectetur dui iaculis. Fusce convallis egestas gravida. Aenean ac volutpat leo. Fusce ut lacinia diam, et ultrices quam. Suspendisse orci ligula, vulputate convallis tempor id, porta id arcu.</p>

                  <p>Praesent sagittis, tortor ac interdum rhoncus, mi orci feugiat ante, bibendum venenatis justo orci mattis dolor. Morbi lacinia nec sapien in vestibulum. Pellentesque tellus ante, imperdiet vitae eros sit amet, dictum dignissim libero. Donec ac est nisl. Nam bibendum mollis libero ut mollis. Nam a pellentesque sem. Etiam at elementum eros. Donec quis augue id velit sollicitudin placerat ut ut nibh. Mauris at fringilla arcu, a rhoncus metus. Proin vel lorem venenatis, rhoncus felis quis, fermentum enim. Donec elit lorem, iaculis sed lacus in, convallis efficitur nisl. Nullam ut nunc ut mi auctor tincidunt. Nulla id turpis tempor, scelerisque ex et, ultrices neque. </p>
                </Col>
                <Col xs={12} sm={4} className="sidebar-section">
                  <Image src="assets/person_profile_4.jpeg" rounded/>
                  <p>Curabitur vel consectetur leo. Fusce dictum nibh lacus, nec finibus odio blandit a. Nam porttitor cursus tellus, sed malesuada nunc porta quis. Phasellus mollis enim lacus, et pharetra metus iaculis sit amet. Sed laoreet, erat eu ultrices blandit, elit ex viverra nulla, at gravida ligula nulla non est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent a accumsan ipsum.</p>
                </Col>
              </Row>
          </Grid>
          <Footer />
      </div>
    )
  }
}
