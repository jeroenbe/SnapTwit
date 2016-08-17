/**
 * Created by Jeroen on 17/08/16.
 */

import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Meteor } from 'meteor/meteor'

export default class GenericTwit extends Component {
    getUser() {
        return Meteor.users.findOne(this.props.twit.user)
    }

    render () {
        const user = this.getUser()

        return (
            <div>
                <h1>{this.props.twit.twit}</h1>
                <h3>by {user.username}</h3>

                {/*
                 <p>{{getTimeLeft}} left</p>
                 {{#if isRetwitted}}
                 <button id="deRetwit">deretwit</button>
                 {{else}}
                 <button id="retwit">retwit</button>
                 {{/if}}

                 {{#if isLiked}}
                 <button id="deLike">delike</button>
                 {{else}}
                 <button id="like">like</button>
                 {{/if}}
                 */}

            </div>
        )

    }
}

GenericTwit.PropTypes = {
    twit: PropTypes.object.isRequired
}