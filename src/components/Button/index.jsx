<<<<<<< HEAD
import PropTypes from 'prop-types'
import {Button} from './styles'

function DefaultButton ({ children, theme,...props }) {

    return(
        <Button {...props} theme={theme} >{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

=======
import {Button} from './styles'

function DefaultButton (info) {

    return(
        <Button>{info}</Button>
    )
}

>>>>>>> 76d22f992e40bfce33374361f92747276953da81
export default DefaultButton