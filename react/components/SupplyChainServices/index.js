import supplyChainServices from './supplyChainServices.css'
import PropTypes from 'prop-types'
import { range, values } from 'ramda'
import React, { Component, Fragment } from 'react'
import {NUMBER_OF_SUPPLIER_CHAIN_SERVICES, MAX_NUMBER_OF_SUPPLIER_CHAIN_DETAIL_LISTING} from './constants'

/**
 * Supply chain services are responsible for displaying static content given by `/admin/storefront` about value added services
 */
class SupplyChainServices extends Component {

  static propTypes = {
    supplierChainServices: PropTypes.object,
    numberOfSupplierChainServices: PropTypes.number.isRequired,
    maxNumberOfDetailListing: PropTypes.number.isRequired
  }

  static defaultProps = {
    supplierChainServices: {},
    numberOfSupplierChainServices: NUMBER_OF_SUPPLIER_CHAIN_SERVICES,
    maxNumberOfDetailListing: MAX_NUMBER_OF_SUPPLIER_CHAIN_DETAIL_LISTING
  }

  static uiSchema = {
    supplierChainServices: {
      items: {
        image: {
          'ui:widget': 'image-uploader',
        },
      },
    },
  }

    static getSchema = ({ numberOfSupplierChainServices, maxNumberOfDetailListing }) => {

    let supplierChainServicesProps = {}
    let supplierChainList = {}

    range(0, maxNumberOfDetailListing || MAX_NUMBER_OF_SUPPLIER_CHAIN_DETAIL_LISTING).forEach(index => {
      supplierChainList[`supplierChainList${index}`] = {
        type: 'object',
        title: 'editor.supplierChainServices.supplierChainServiceDetailsTitle',
        properties: {
          title: {
            type: 'string',
            default: '',
            title: 'editor.supplierChainServices.detailTitle',
          },
          listContent: {
            type: 'string',
            default: '',
            title: 'editor.supplierChainServices.listContent',
          }
        },
      }
    })

    range(0, numberOfSupplierChainServices || NUMBER_OF_SUPPLIER_CHAIN_SERVICES).forEach(index => {
      supplierChainServicesProps[`supplierChainService${index}`] = {
        type: 'object',
        title: 'editor.supplierChainServices.supplierChainServicesTitle',
        properties: {
          serviceTitle: {
            type: 'string',
            default: '',
            title: 'editor.supplierChainServices.item.serviceTitle',
          },
          image: {
            type: 'string',
            title: 'editor.supplierChainServices.item.supplierChainImage',
            default: '',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          supplierChainDetails: {
            type: 'object',
            title: 'editor.supplierChainServices.supplierChainDetails',
            isLayout: false,
            properties: supplierChainList,
          },
        },
      }
    })

    return {
      title: 'editor.supplierChainServices.title',
      description: 'editor.supplierChainServices.description',
      type: 'object',
      properties: {
        numberOfSupplierChainServices: {
          type: 'number',
          title: 'editor.supplierChainServices.numberOfSupplierChainServices',
          enum: [1, 2, 3, 4, 5, 6],
          default: 2,
          isLayout: false,
        },
        maxNumberOfDetailListing: {
          type: 'number',
          title: 'editor.supplierChainServices.maxNumberOfDetailListing',
          enum: [1, 2, 3],
          default: 3,
          isLayout: false,
        }, 
        supplierChainServices: {
          type: 'object',
          title: 'editor.supplierChainServices.supplierChainServices',
          properties: supplierChainServicesProps,
          isLayout: false,
        }
      },
    }
  }

  render(){

    const {supplierChainServices, numberOfServices} = this.props

    debugger;
      return <Fragment className="w-100 bg-muted-5 pa8">
          <div className="mw9 center ph3-ns">
              <h2 className="t-heading-2">Value Added Services</h2>
              <p className="t-body lh-copy mw9">bisco's Value Added Services provide solutions for streaming all steps of your procurement process from design in to shipping out</p>
          </div>
          {[1, 2, 3].map(x => (
            <div class="mw9 center ph3-ns pv4">
            <div class="outline bg-white pv4 w-25"><span>procurement and Engineering</span></div>
            <div class="cf ph2-ns outline bg-white pv4">
            
              <div className="w-100">
              <div class="fl w-100 w-25-ns pa2">
                <img className={`${supplyChainServices.itemImage}`} src="https://blog.klm.com/assets/uploads/2018/12/Jet-engine-KLM-768x510.jpg"/>
              </div>
              <div class="fl w-100 w-25-ns pa2">
                <div class="bg-white pv4">
                  <span className="t-heading-4">When you</span>
                </div>
                <div class="bg-white pv4">
                  <ul>
                    <li>Source Product</li>
                    <li>Source Product</li>
                    <li>Source Product</li>
                  </ul>
                </div>
              </div>
              <div class="fl w-100 w-25-ns pa2">
              <div class="bg-white pv4">
                  <span className="t-heading-4">When you</span>
                </div>
                <div class="bg-white pv4">
                  <ul>
                    <li>Source Product</li>
                    <li>Source Product</li>
                    <li>Source Product</li>
                  </ul>
                </div>
              </div>
              <div class="fl w-100 w-25-ns pa2">
              <div class="bg-white pv4">
                  <span className="t-heading-4">When you</span>
                </div>
                <div class="bg-white pv4">
                  <ul>
                    <li>Source Product</li>
                    <li>Source Product</li>
                    <li>Source Product</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
          ))}

      </Fragment>
  }

}

export default SupplyChainServices