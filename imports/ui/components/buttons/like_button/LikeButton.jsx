/**
 * Created by Jeroen on 17/08/16.
 */

import React, {Component, PropTypes} from 'react'
import {composeWithTracker} from 'react-komposer'

import {twitComposer} from '../twitComposer'

const LikeButtonContained = class LikeButtonContained extends Component {
    render() {
        return <button>Like</button>
    }
}

// remove Contained
LikeButtonContained.PropTypes = {
    twitId: PropTypes.string.isRequired,
    twit: PropTypes.object
}

export default LikeButton = composeWithTracker(twitComposer)(LikeButtonContained)