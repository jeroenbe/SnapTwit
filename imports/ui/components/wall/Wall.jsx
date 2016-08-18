/**
 * Created by Jeroen on 16/08/16.
 */

import { Meteor } from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import {Mongo} from 'meteor/mongo'

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
    let twits = []
    onData(null, {twits})
    if (Meteor.subscribe('allTwits').ready()) {
        Tracker.autorun(() => {
            let new_twits = Twits.find({TTL: {$gt: Chronos.currentTime()}}).fetch()

            // _ doesn't go well with objects, we favor strings here
            const mapper = (v) => {return v._id}
            const mapped_new_twits = new_twits.map(mapper)
            const mapped_twits = twits.map(mapper)

            // onData should only be called when there is a difference in sets
            if(_.union(_.difference(mapped_twits, mapped_new_twits), _.difference(mapped_new_twits, mapped_twits)).length){
                onData(null, {twits: new_twits})
            }
            twits = new_twits
        })
    }
}

export default Wall = composeWithTracker(wallComposer)(WallContained)


Wall.PropTypes = {
    twits: PropTypes.array.isRequired
}