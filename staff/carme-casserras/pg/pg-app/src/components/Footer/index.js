import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './index.sass'

function Map() {    

    return (<Fragment>
        <section id="navbar-bottom">
            <div className="navigation">
                <div>
                    <Link to="/search/locations">
                        <img className="img-map" id="map" src="../../../images/map.png" alt="map"/>
                    </Link>
                </div>
            </div>
        </section>
    </Fragment>
    )
}

export default Map