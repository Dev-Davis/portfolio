import React from 'react'

import './Navbar.css'

class Navbar extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <div className="menu">
                <h3 class="contact=title" href="#">Contact Me:</h3>
                <div className="contact-context">
                    <a class="github" href="https://github.com/Dev-Davis"><img class="icon" src="https://i.ibb.co/TPsnYjV/github.png" alt="github" border="0" /></a>
                </div>
                <div className="contact-context">
                    <a class="linkedin" href="https://www.linkedin.com/in/sean-dev/"><img class="icon" src="https://i.ibb.co/vL3CRXv/twitter.png" alt="twitter" border="0" /></a>
                </div>
                <div className="contact-context">
                    <a class="twitter" href="https://twitter.com/devDavis"><img class="icon" src="https://i.ibb.co/TPsnYjV/github.png" alt="github" border="0" /></a>
                </div>
            </div>
        )
    }
}

export default Navbar