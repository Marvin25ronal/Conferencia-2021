/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


function NavBar() {
    return (
        <div>
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
                    </a>
                    <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="https://bulma.io/">
                            Editor
      </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                                Arbol
        </a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
