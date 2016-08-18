/**
 * Created by Jeroen on 17/08/16.
 */

import React, {Component, PropTypes} from 'react'
import {composeWithTracker} from 'react-komposer'

import {twitComposer} from '../twitComposer'

const RetwitButtonContained = class RetwitButtonContained extends Component {
    render () {
        return <button>Retwit</button>
    }
}
// remove Contained
RetwitButtonContained.PropTypes = {
    twitId: PropTypes.string.isRequired,
    twit: PropTypes.object.isRequired
}

export default RetwitButton = composeWithTracker(twitComposer)(RetwitButtonContained)