import React from 'react'

import SidebarCommunities from '../layout/SidebarCommunities'
import SidebarNews from '../layout/SidebarNews'
import SidebarInfo from '../layout/SidebarInfo'

function LayoutRegistered(props) {
    return (
        <React.Fragment>
            <br />
            <div className="row">
                <div className="col-md-3">
                    <div className="container px-0 py-0 sidebar-holder-sticky">
                        <SidebarInfo />
                    </div>
                </div>

                <div className="col-md-6">
                    {props.children}
                </div>


                <div className="col-md-3 pl-0">
                    <div className="container px-0 py-0 sidebar-holder-sticky">
                        <SidebarNews />
                        <SidebarCommunities />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LayoutRegistered