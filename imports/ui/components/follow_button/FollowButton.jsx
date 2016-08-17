/**
 * Created by Jeroen on 17/08/16.
 */

import React, {Component} from 'react'
import { composeWithTracker } from 'react-komposer'

import {ReactiveVar} from 'meteor/reactive-var'

const FollowButtonContained = class FollowButtonContained extends Component {
    handleFollowButton() {

    }

    render () {
        console.log(this.props.following)
        return (
            <section>
                <button onClick={this.handleFollowButton.bind(this)}>{this.props.following? 'Unfollow': 'Follow'}</button>
            </section>

        )
    }
}


const followButtonComposer = (props, onData) => {
    let following = false
    Meteor.setInterval(() => {
        following = !following
        onData(null, {following})
    }, 1000)
}


export default FollowButton = composeWithTracker(followButtonComposer)(FollowButtonContained)