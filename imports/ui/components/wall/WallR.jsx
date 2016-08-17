/**
 * Created by Jeroen on 16/08/16.
 */

import { Meteor } from 'meteor/meteor'

import { Twits } from '/imports/api/twits/collection'

import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import MiniTwit from '../twit/MiniTwit'
import Twit from '../twit/TwitR'

T = Twits

export default class Wall extends Component {
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

export default createContainer(() => {
    Meteor.subscribe('allTwits')

    return {
        twits: Twits.find().fetch()
    }

}, Wall)

Wall.PropTypes = {
    twits: PropTypes.array.isRequired
}