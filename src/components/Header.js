import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    return (<header className='header' >
        <h1 style={{ color: '#e44560' }}>
            {title} </h1> {location.pathname === '/' && (
                <Button color={showAdd ? 'red' : showAdd}
                    onClick={onAdd}
                    text={showAdd ? 'Close' : 'Add Task'} />)}
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