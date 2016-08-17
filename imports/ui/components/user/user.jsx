/**
 * Created by Jeroen on 17/08/16.
 */

import React, {Component, PropTypes} from 'react'
import { Meteor } from 'meteor/meteor'

import { composeWithTracker } from 'react-komposer'

import { FollowData } from '/imports/api/users/collection'

export default class User extends Component {
    render() {
        return (
            <section>
                <FollowButtonContainer userId={this.props.userId}/>
            </section>
        )
    }
}

const FollowButton = class FollowButton extends Component {
    handleFollowButton() {
        if (this.props.followData) {
            Meteor.call('unFollowUser', this.props.userId)
        }else {
            Meteor.call('followUser', this.props.userId)
        }
    }

    render () {
        console.log(this.props.user)

        return (
            <section>
                <button onClick={this.handleFollowButton.bind(this)}>{this.props.user ? 'Unfollow' : 'Follow'}</button>
            </section>

        )
    }
}


const followButtonOnPropsChange = (props, onData) => {
    if (Meteor.subscribe('user', props.userId).ready()) {
        const user = Meteor.users.findOne(props.userId)
        onData(null, {user})
    }
}


const FollowButtonContainer = composeWithTracker(followButtonOnPropsChange)(FollowButton)
