import React, { Component } from "react"

import LayoutRegistered from '../HOC/LayoutRegistered'

import '../../static/style/pages/common.css'

class error404 extends Component {
    render() {
        return (
            <LayoutRegistered>
                <br /><br />
                <div className="container" style={{ height: "100vh" }}>
                    <h1 className="display-4 mt-2">
                        Error 404!
                    </h1>
                    <h3 className="display-4">
                        It seems like you are lost!
                    </h3>
                </div>
            </LayoutRegistered>
        );
    }
}

export default error404;
