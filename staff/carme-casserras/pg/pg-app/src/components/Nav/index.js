import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './index.sass'

function Nav() {

    return (<Fragment>
        <section id="navbar-top">
            <div className="navbar-left">
                <div>
                    <Link to="/search/category">
                        <img id="logo" src="/../../../images/logo.png" alt="logo" />
                    </Link>
                </div>
            </div>
            <div className="navbar-right">
                <div className="navigation">
                    <div>
                        <Link to="/search/user/things">
                            <img id="awards" src="/../../../images/award.png" alt="awards" />
                        </Link>
                    </div>
                    <div>
                        <Link to="/things">
                            <img id="put" src="/../../../images/put.png" alt="put" />
                        </Link>
                    </div>
                    <div className="map">
                        <Link to="/search/locations">
                            <img className="img-map" id="map" src="../../../images/map.png" alt="map" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
    )
}

export default Nav
