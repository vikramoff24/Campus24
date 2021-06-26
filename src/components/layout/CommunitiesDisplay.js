import React, { Component } from 'react'

import CommunitiesItemCard from './CommunitiesItemCard'

import '../../static/style/layout/communitiesList.css'
import Script from '../../static/script/layout/communitiesScroll'

class CommunitiesDisplay extends Component {
    state = {
        currWidth: 0,
        communitiesList: []
    }

    componentDidMount() {
        this.setState({ communitiesList: this.props.communitiesList })
        Script()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ communitiesList: nextProps.communitiesList })
    }

    componentDidUpdate() {
        Script()
    }

    render() {
        const { communitiesList } = this.state

        const communityItems = communitiesList.map((item, index) => {
            const { name, members, image } = item

            return (<CommunitiesItemCard
                name={name}
                members={members}
                image={image}
                key={index}
            />)
        })

        return (
            <div>
                <div id="communitiesCarouselWrapper">
                    <div id="communitiesCarousel">
                        <div id="communitiesCarouselContent">
                            <div className="community-item-card" style={{ backgroundColor: "white" }}>
                                <button className="community-item-card-plus fa fa-plus-circle">
                                </button>
                            </div>
                            {communityItems}
                        </div>
                    </div>
                    {(communitiesList.length > 2 || (communitiesList.length === 2 && (this.state.currWidth < 1200 || window.innerWidth < 1200))) ?
                        (
                            <React.Fragment>
                                <button id="carouselPrevButton">
                                    <i className="fa fa-arrow-left" style={{ backgroundColor: "white" }}></i>
                                </button>
                                <button id="carouselNextButton">
                                    <i className="fa fa-arrow-right" style={{ backgroundColor: "white" }}></i>
                                </button>
                            </React.Fragment>
                        ) : null
                    }

                </div>
            </div>
        )
    }
}

export default CommunitiesDisplay