import react, { Component } from "react"
import PropTypes from "prop-types"
import supplierChain from "./supplyChainServices.css"

class SupplierChainDetails extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    listContent: PropTypes.string,
  }

  render() {
    const { title, listContent } = this.props

    const list = listContent ? listContent.split("|") : []

    return (
      <div
        className={`${
          supplierChain.supplierChainServiceDetailListContainer
        } fl w-100 w-25-ns pa2`}
      >
        <div
          className={`${
            supplierChain.supplierChainServiceDetailListHeaderContainer
          } bg-white pv4`}
        >
          <span className="t-heading-4">{title}</span>
        </div>
        <div
          className={`${
            supplierChain.supplierChainServiceDetailListWrapper
          } bg-white pv4`}
        >
          <ul className={supplierChain.supplierChainServiceDetailList}>
            {list &&
              list.length > 0 &&
              list.map(item => (
                <li
                  className={supplierChain.supplierChainServiceDetailListItem}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SupplierChainDetails
