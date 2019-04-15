import react, {Component} from 'react'
import PropTypes from 'prop-types'

class SupplierChainDetails extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        numberOfListItems: PropTypes.number,
        detailsList: PropTypes.object
    }

    static defaultProps = {
        title: '',
        list: []
    }

    render(){
        const {title, detailsList} = this.props
        return null
    }
}

export default SupplierChainDetails
