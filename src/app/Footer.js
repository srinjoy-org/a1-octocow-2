import React, { PropTypes } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import theme from '../css/Footer.scss';
import { Grid,Row,Col } from 'react-flexbox-grid/lib/index';
import Navigation from 'react-toolbox/lib/navigation';
import Waypoint from 'react-waypoint';
import ScrollLink from './ScrollLink.js';
import IconButton from 'react-toolbox/lib/button';
import Container from './Container.js';
import Logo from './Logo.js';
import Dialog from 'react-toolbox/lib/dialog';
import Link from 'react-toolbox/lib/link';
import git from 'react-icons/lib/fa/github';

const GithubIcon = () => (
  <svg viewBox="0 0 284 277">
    <g><path d="M141.888675,0.0234927555 C63.5359948,0.0234927555 0,63.5477395 0,141.912168 C0,204.6023 40.6554239,257.788232 97.0321356,276.549924 C104.12328,277.86336 106.726656,273.471926 106.726656,269.724287 C106.726656,266.340838 106.595077,255.16371 106.533987,243.307542 C67.0604204,251.890693 58.7310279,226.56652 58.7310279,226.56652 C52.2766299,210.166193 42.9768456,205.805304 42.9768456,205.805304 C30.1032937,196.998939 43.9472374,197.17986 43.9472374,197.17986 C58.1953153,198.180797 65.6976425,211.801527 65.6976425,211.801527 C78.35268,233.493192 98.8906827,227.222064 106.987463,223.596605 C108.260955,214.426049 111.938106,208.166669 115.995895,204.623447 C84.4804813,201.035582 51.3508808,188.869264 51.3508808,134.501475 C51.3508808,119.01045 56.8936274,106.353063 65.9701981,96.4165325 C64.4969882,92.842765 59.6403297,78.411417 67.3447241,58.8673023 C67.3447241,58.8673023 79.2596322,55.0538738 106.374213,73.4114319 C117.692318,70.2676443 129.83044,68.6910512 141.888675,68.63701 C153.94691,68.6910512 166.09443,70.2676443 177.433682,73.4114319 C204.515368,55.0538738 216.413829,58.8673023 216.413829,58.8673023 C224.13702,78.411417 219.278012,92.842765 217.804802,96.4165325 C226.902519,106.353063 232.407672,119.01045 232.407672,134.501475 C232.407672,188.998493 199.214632,200.997988 167.619331,204.510665 C172.708602,208.913848 177.243363,217.54869 177.243363,230.786433 C177.243363,249.771339 177.078889,265.050898 177.078889,269.724287 C177.078889,273.500121 179.632923,277.92445 186.825101,276.531127 C243.171268,257.748288 283.775,204.581154 283.775,141.912168 C283.775,63.5477395 220.248404,0.0234927555 141.888675,0.0234927555" /></g>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24"><g><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></g></svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24"><g><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></g></svg>
);
class Footer extends React.Component{




  render(){
    return(
      <div className={theme.footer}>
      <Container>
      <Row middle="xs">
        <Col xs={12} md={6}>
          <h3 className={theme.white}>If you are interested in my work, feel free to contact me!</h3>
        </Col>
        <Col xs={12} md={6}>



          <ul className={theme.list}>
            <li><a href="mailto:srinjoy.majumdar@gmail.com"><EmailIcon/></a></li>
            <li><a href="http://www.linkedin.com/pub/srinjoy-majumdar/75/913/345/"><LinkedinIcon/></a></li>
            <li><a href="https://github.com/srinjoym"><GithubIcon/></a></li>
            {/* <li><a className = "white-text"href="mailto:srinjoy.majumdar@gmail.com"><i class="fa fa-envelope fa-lg"></i> </a></li> */}
            {/* <li class="linkedin"><a class = "white-text" href="http://www.linkedin.com/pub/srinjoy-majumdar/75/913/345/"><i class="fa fa-linkedin fa-lg"></i></a></li> */}
            {/* <li class="linkedin"><a class = "white-text" href="https://github.com/srinjoym"><i class="fa fa-github fa-lg"></i></a></li> */}
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
    );
  }
}


export default Footer;
