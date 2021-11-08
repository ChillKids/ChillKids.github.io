import React from 'react';
import Header from './comp/header'
import Body from './comp/body'
import Footer from './comp/footer'
import Helmet from 'react-helmet'

import './css/swiper.css'
import './css/magnific-popup.css'
import './css/layout.css'
import './css/jarallax.css'
import './css/basic.css'
import './css/animate.css'
import './css/owl.carousel.css'


function App() {
  return (
    <div id="container">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
      <Helmet>
        <script src="js/jquery.min.js"></script>
        <script src="js/velocity.min.js"></script>
        <script src="js/jquery.validate.js"></script>
        <script src="js/magnific-popup.js"></script>
        <script src="js/typed.js"></script>
        <script src="js/jarallax.js"></script>
        <script src="js/jarallax-video.js"></script>
        <script src="js/jarallax-element.js"></script>
        <script src="js/imagesloaded.pkgd.js"></script>
        <script src="js/isotope.pkgd.js"></script>
        <script src="js/owl.carousel.js"></script>
        <script src="js/swiper.js"></script>
        <script src="js/scripts.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
