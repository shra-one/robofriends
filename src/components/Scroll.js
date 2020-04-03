import React, { Children } from 'react'

const Scroll = (props) => {
    return (
        <div className="canvas">
            {props.children}
        </div>
    )
}

export default Scroll
