/**
 * Created by Jeroen on 17/08/16.
 */

import React, { Component, PropTypes } from 'react'

import { Meteor } from 'meteor/meteor'

import Timer from '../timer/Timer'
import User from '../user/User'
import RetwitButton from '../buttons/retwit_button/RetwitButton'
import LikeButton from '../buttons/like_button/LikeButton'

export default class GenericTwit extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.twit.twit}</h1>
                <User userId={this.props.twit.user} />
                <Timer time={this.props.twit.TTL}/>

                <RetwitButton twitId={this.props.twit._id}/><LikeButton twitId={this.props.twit._id}/>
            </div>
        )

    }
}

GenericTwit.PropTypes = {
    twit: PropTypes.object.isRequired
}
