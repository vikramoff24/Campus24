import React, { Component } from 'react'

import '../../static/style/layout/postLabel.css'

class PostLabel extends Component {

    render() {
        const { name_tag, color_hex, onClickFunc } = this.props

        return (
            <div className={onClickFunc ? "post-label post-label-pointer mx-2 my-1" : "post-label mx-2 my-1"}
                style={{ backgroundColor: color_hex }}
                onClick={onClickFunc ? () => { onClickFunc({ name_tag, color_hex }) } : null}>
                {name_tag}
            </div>
        )
    }
}

PostLabel.defaultProps = {
    name_tag: "🔥 Important",
    color_hex: "#fff2cf"
}

export default PostLabel