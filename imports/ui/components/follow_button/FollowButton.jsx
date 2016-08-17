/**
 * Created by Jeroen on 17/08/16.
 */

import React, {Component} from 'react'
import { composeWithTracker } from 'react-komposer'

import {FollowData} from '/imports/api/follow_data/collection'

F = FollowData

const FollowButtonContained = class FollowButtonContained extends Component {
    handleFollowButton() {
        this.props.following ? Meteor.call('Unfollow', this.props.userId) : Meteor.call('Follow', this.props.userId)
    }

    render () {
        return (
            <section>
                <button onClick={this.handleFollowButton.bind(this)}>{this.props.following ? 'Unfollow': 'Follow'}</button>
            </section>

        )
    }
}

const followComposer = (props, onData) => {
    if (Meteor.subscribe('following').ready()) {
        const f = FollowData.findOne({uID: Meteor.userId()}), follow_data = f ? f.following : [], following = _.contains(follow_data, props.userId)
        onData(null, {following})
    }
}

export default FollowButton = composeWithTracker(followComposer)(FollowButtonContained)