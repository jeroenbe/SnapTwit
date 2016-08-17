/**
 * Created by Jeroen on 17/08/16.
 */

import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

export default class MiniTwit extends Component {
    render () {
        return (
            <li>{this.props.twit._id}</li>
        )
    }
}


MiniTwit.PropTypes = {
    twit: PropTypes.object,
}