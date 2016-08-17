/**
 * Created by Jeroen on 16/08/16.
 */

import { Meteor } from 'meteor/meteor'

import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import  { LoggedOn, NotLoggedOn } from '/imports/ui/components/loggedon/Logged'

export default class Home extends Component {
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

export default createContainer(() => {
    return {
        currentUser: Meteor.user()
    }
}, Home)