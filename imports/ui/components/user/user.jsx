/**
 * Created by Jeroen on 17/08/16.
 */

import React, {Component, PropTypes} from 'react'
import { composeWithTracker } from 'react-komposer'

import FollowButton from '../buttons/follow_button/FollowButton'

const UserContained = class UserContained extends Component {
    render() {
        return (
            <section>
                <p>By {this.props.user.username}</p>
                <FollowButton userId={this.props.userId}/>
            </section>
        )
    }
}

const userComposer = (props, onData) => {
    if (Meteor.subscribe('user', props.userId).ready()){
        const user = Meteor.users.findOne(props.userId)
        onData(null, {user})
    }
}

export default User = composeWithTracker(userComposer)(UserContained)