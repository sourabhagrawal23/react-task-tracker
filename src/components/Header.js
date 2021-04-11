import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title, onAdd, showAdd }) => {

    return (<header className='header' >
        <h1 style={{ color: 'Gray' }}>
            {title} </h1> <
            Button color={showAdd ? 'red' : 'lightgreen'}
            onClick={
                onAdd
            }
            text={showAdd ? 'Close' : 'Add Task'} />
    </header>
    )
}
Header.defaultProps = {
    title: 'Task tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header