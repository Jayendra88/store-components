import React, { Component } from "react"
import PropTypes from "prop-types"
import { values } from "ramda"
import SupplierChainDetails from "./SupplierChainDetails"
import supplierChain from "./supplyChainServices.css"
class SupplierChainService extends Component {
  static propTypes = {
    serviceTitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    supplierChainDetails: PropTypes.object
  }

  static defaultProps = {
    numberOfLists: 3
  }
  render(service) {
    const { serviceTitle, image, supplierChainDetails } = this.props

    const supplierChainDetailsList = values(supplierChainDetails).map(
      supplierChainDetail => supplierChainDetail
    )

    return (
      <div
        className={`${
          supplierChain.supplyChainServiceContainer
        } mw9 center ph3-ns pv4`}
      >
        <div
          className={`${
            supplierChain.supplierChainServiceTitleContainer
          } outline bg-white pv4 w-25`}
        >
          <span>{serviceTitle}</span>
        </div>
        <div
          className={`${
            supplierChain.supplierChainServiceBodyContainer
          } cf ph2-ns outline bg-white pv4`}
        >
          <div className="w-100">
            <div
              className={`${
                supplierChain.supplierChainServiceImageContainer
              } fl w-100 w-25-ns pa2`}
            >
              <img src={image} />
            </div>
            {supplierChainDetailsList &&
              supplierChainDetailsList.length > 0 &&
              supplierChainDetailsList.map(supplierChainDetail => (
                <SupplierChainDetails {...supplierChainDetail} />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default SupplierChainService
