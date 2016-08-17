/**
 * Created by Jeroen on 16/08/16.
 */

import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import GenericTwit from './GenericTwit'

export default class Twit extends Component {
    render () {
        if(this.props.twit) {
            return <GenericTwit twit={this.props.twit} />
        }else{
            return <p>Wups, this twit is expired</p>
        }
    }
}

Twit.PropTypes = {
    twit: PropTypes.object,
}

