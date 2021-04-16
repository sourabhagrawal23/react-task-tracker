import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <center>
                <h4>Version 1.0.0</h4>
                <Link to='/' style={{ color: "white" }}>Go Back</Link>
            </center>
        </div>
    )
}

export default About
