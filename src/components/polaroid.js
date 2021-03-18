import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Polaroid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
    this.toggleHover = this.toggleHover.bind(this)
  }

  toggleHover() {
    this.setState({
      hovered: !this.state.hovered
    })
  }

  render() {
    let {
      body,
      containerClass,
      imgSrc,
      height,
      width,
      imgClass,
      imgHeight,
      imgWidth,
      shadow,
      zoom,
      hoverShadow,
      rotate,
      onClick
    } = this.props

    let containerProperties = {
      transform: `rotate(${rotate || '0'}deg)`,
      height: height || '200px',
      width: width || '300px',
      boxShadow: shadow || '0 .5rem 1rem rgba(0,0,0,.15)',
      cursor: 'pointer',
      zIndex: '1'
    }

    if (this.state.hovered) {
      containerProperties.transform = zoom ? `scale(${zoom})` : 'scale(1.3)'
      containerProperties.boxShadow =
        hoverShadow || '0 .5rem 1rem rgba(0,0,0,.15)'
      containerProperties.transitionDuration = '0.2s'
      containerProperties.zIndex = '2'
    }

    return (
      <div
        onMouseEnter={() => {
          this.setState({
            hovered: true
          })
        }}
        onMouseLeave={() => {
          this.setState({
            hovered: false
          })
        }}
        onClick={onClick}
        className={containerClass}
        style={containerProperties}
      >
        <img
          className={imgClass}
          style={{
            height: imgHeight,
            width: imgWidth
          }}
          alt='...'
          src={imgSrc}
        />
        {body}
      </div>
    )
  }
}

Polaroid.propTypes = {
  body: PropTypes.node,
  className: PropTypes.string,
  imgSrc: PropTypes.string,
  zoom: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  imageShadow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  shadow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  hoverShadow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  width: PropTypes.string,
  height: PropTypes.string,
  imgClass: PropTypes.string,
  rotate: PropTypes.string,
  onClick: PropTypes.func
}
