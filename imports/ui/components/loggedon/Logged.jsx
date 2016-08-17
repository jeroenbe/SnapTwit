/**
 * Created by Jeroen on 16/08/16.
 */

import React, { Component, PropTypes } from 'react'
import AccountsUIWrapper from '../accounts/accounts'

import TwitBox from '../twitbox/TwitBoxR'
import Wall from '../wall/WallR'

export const LoggedOn = class LoggedOn extends Component {
    render() {
        return (
            <div className="logged-on">
                <AccountsUIWrapper />
                <TwitBox />
                <Wall />
            </div>

        )

    }
}

export const NotLoggedOn = class NotLoggedOn extends Component {
    render() {
        return (
            <div className="not-logged-on">
                <p>The user is not logged on</p>
                <AccountsUIWrapper />
            </div>

        )
    }
}
