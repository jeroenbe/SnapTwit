/**
 * Created by Jeroen on 17/08/16.
 */

import React, {Component} from 'react'
import { composeWithTracker } from 'react-komposer'

const FollowButtonContained = class FollowButtonContained extends Component {
    handleFollowButton() {

    }

    render () {
        return (
            <section>
                <button onClick={this.handleFollowButton.bind(this)}>Follow/Unfollow</button>
            </section>

        )
    }
}


const followButtonComposer = (props, onData) => {
    
}


export default FollowButton = composeWithTracker(followButtonComposer)(FollowButtonContained)