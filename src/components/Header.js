import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({
    title
}) => {
    const onClick = () => {
        alert('text');
    }
    return (<
        header className='header' >
        <
        h1 style={
                {
                    color: 'red'
                }
            } > {
                title
            } < /h1> <
                Button color='green'
                onClick={
                    onClick
                }
                text='Hello' />
            <
        /header>
    )
}
Header.defaultProps = {
                title: 'Task tracker'
}

Header.propTypes = {
                title: PropTypes.string.isRequired,
}
export default Header