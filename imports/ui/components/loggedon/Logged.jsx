/**
 * Created by Jeroen on 16/08/16.
 */

import React, { Component, PropTypes } from 'react'
import AccountsUIWrapper from '../accounts/accounts'

export const LoggedOn = class LoggedOn extends Component {
    render() {
        return (
            <div className="logged-on">
                <AccountsUIWrapper />
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
