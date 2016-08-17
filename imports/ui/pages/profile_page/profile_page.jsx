/**
 * Created by Jeroen on 17/08/16.
 */

import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import User from '/imports/ui/components/user/User'

export default class ProfilePage extends Component {
    render () {
        return (
            <User id={this.props.userId}/>
        )
    }
}

ProfilePage.PropTypes = {
    userId: PropTypes.string.isRequired
}