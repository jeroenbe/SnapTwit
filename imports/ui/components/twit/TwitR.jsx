/**
 * Created by Jeroen on 16/08/16.
 */

import React, { Component, PropTypes } from 'react'

export const Twit = class Twit extends Component {
    render () {
        if(this.props.twit) {
            return <p>{this.props.twit._id}</p>
        }else{
            return <p>Wups, this twit is expired</p>
        }
    }
}

export const GenericTwit = class GenericTwit extends Component {
    render () {

    }
}

export const MiniTwit = class MiniTwit extends Component {

    render () {
        return (
            <p>{this.props.twit._id}</p>
        )
    }
}

const twit_prop_types = {
    twit: PropTypes.object
}

MiniTwit.PropTypes = GenericTwit.PropTypes = Twit.PropTypes = twit_prop_types
