import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <p style={{ color: '#fff' }}>
                Made with &nbsp;
                <FaHeart style={{
                    color: '#e44560', cursor: 'none'
                }}
                />&nbsp;
                 by <font color="#e44560">Sourabh Agrawal</font>
            </p>
            <Link to="/about" style={{ color: '#fff' }}>About</Link>
        </footer >
    )
}

export default Footer
