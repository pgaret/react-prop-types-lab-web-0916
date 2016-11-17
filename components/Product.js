const React = require('react')

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}
           {this.props.color}
           {this.props.weight}
           {this.props.hasWatermark.toString()}
        </p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: React.PropTypes.oneOf([...Array(301).keys()].slice(80, 301)).isRequired
}

module.exports = Product
