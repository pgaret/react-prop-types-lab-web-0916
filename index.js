const React = require('react')
const ReactDOM = require('react-dom')
const Product = require('./components/Product.js');

ReactDOM.render(
  <Product name="Dunder Mifflin" producer="PaperCo" color="white" weight={210} />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
