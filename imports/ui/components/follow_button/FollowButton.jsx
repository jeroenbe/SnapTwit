/**
 * Created by Jeroen on 17/08/16.
 */

import React, {Component} from 'react'
import { composeWithTracker } from 'react-komposer'

import {FollowData} from '/imports/api/follow_data/collection'

F = FollowData

const FollowButtonContained = class FollowButtonContained extends Component {
    handleFollowButton() {
        console.log(Meteor.userId(), this.props.userId)

        this.props.following ? Meteor.call('Unfollow', this.props.userId) : Meteor.call('Follow', this.props.userId)
    }

    render () {
        console.log(this.props.following)
        return (
            <section>
                <button onClick={this.handleFollowButton.bind(this)}>{this.props.following ? 'Unfollow': 'Follow'}</button>
            </section>

        )
    }
}

const followComposer = (props, onData) => {
    if (Meteor.subscribe('following').ready()) {
        console.log('changed!')

        const follow_data = FollowData.findOne({uID: Meteor.userId()}).following
        const following = _.contains(follow_data, Meteor.userId())
        onData(null, {following})
    }
}

export default FollowButton = composeWithTracker(followComposer)(FollowButtonContained)