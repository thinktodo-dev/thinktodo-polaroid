import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import Polaroid from './components/polaroid'

const PolaroidCard = ({
  containerClass,
  rotate,
  zoom,
  width,
  height,
  imgSrc,
  imgWidth,
  imgHeight,
  imgClass,
  onClick,
  body
}) => {
  return (
    <Polaroid
      containerClass={containerClass || styles.polaridContainer}
      rotate={rotate || '8'}
      zoom={zoom}
      width={width}
      height={height}
      imgSrc={imgSrc}
      imgWidth={imgWidth || '100%'}
      imgHeight={imgHeight || 'auto'}
      imgClass={imgClass || styles.imgClass}
      onClick={onClick}
      body={body}
    />
  )
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
export default PolaroidCard
