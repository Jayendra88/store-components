import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SupplierChainService extends Component {

  static propTypes = {
    serviceTitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    numberOfLists:PropTypes.number,
    supplierChainDetails: PropTypes.object
  }

  static defaultProps = {
    numberOfLists: 3
  }
    render (service) {

      const {serviceTitle, image, numberOfLists, supplierChainDetails} = this.props

      return null

    }
}

export default SupplierChainService