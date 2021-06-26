import React from 'react'

import FooterUnregistered from '../layout/FooterUnregistered'

function LayoutUnregistered(props) {
    return (
        <React.Fragment>
            {props.children}
            <FooterUnregistered />
        </React.Fragment>
    )
}

export default LayoutUnregistered