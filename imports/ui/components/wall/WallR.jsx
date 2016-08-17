/**
 * Created by Jeroen on 16/08/16.
 */

import { Meteor } from 'meteor/meteor'

import { Twits } from '/imports/api/twits/collection'

import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

export default class Wall extends Component {
    render () {
        return (
            <p>wall</p>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('allTwits')

    return {
        twits: Twits.find().fetch()
    }

}, Wall)