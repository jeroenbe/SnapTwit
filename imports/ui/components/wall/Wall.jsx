/**
 * Created by Jeroen on 16/08/16.
 */

import { Meteor } from 'meteor/meteor'

import { Twits } from '/imports/api/twits/collection'

import React, { Component, PropTypes } from 'react'
import {composeWithTracker} from 'react-komposer'

import MiniTwit from '../twit/MiniTwit'
import Twit from '../twit/Twit'

T = Twits

const WallContained = class WallContained extends Component {
    renderTwits () {
        return this.props.twits.map((twit) => {
            return <Twit key={twit._id} twit={twit}/>
        })
    }

    render () {
        return (
            <div>
                <ul>{this.renderTwits()}</ul>
            </div>
        )
    }
}

const wallComposer = (props, onData) => {
    if (Meteor.subscribe('allTwits').ready()) {
        const twits = Twits.find().fetch()
        onData(null, {twits})
    }
}

export default Wall = composeWithTracker(wallComposer)(WallContained)


Wall.PropTypes = {
    twits: PropTypes.array.isRequired
}