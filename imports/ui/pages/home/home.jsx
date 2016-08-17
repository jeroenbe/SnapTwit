/**
 * Created by Jeroen on 16/08/16.
 */

import { Meteor } from 'meteor/meteor'

import React, { Component, PropTypes } from 'react'
import {composeWithTracker} from 'react-komposer'

import  { LoggedOn, NotLoggedOn } from '/imports/ui/components/loggedon/Logged'

const HomeContained = class HomeContained extends Component {
    loggedIn() {
        if (this.props.currentUser) {
            return <LoggedOn />
        }else{
            return <NotLoggedOn />
        }
    }

    render() {
        return (<div>{this.loggedIn()}</div>)
    }
}

const homeComposer = (props, onData) => {
    const currentUser = Meteor.user()
    onData(null, {currentUser})
}

export default Wall = composeWithTracker(homeComposer)(HomeContained)