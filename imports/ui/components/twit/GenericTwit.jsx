/**
 * Created by Jeroen on 17/08/16.
 */

import React, { Component, PropTypes } from 'react'

import { Meteor } from 'meteor/meteor'

import Timer from '../timer/Timer'
import User from '../user/User'

export default class GenericTwit extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.twit.twit}</h1>
                <User userId={this.props.twit.user} />
                <Timer time={this.props.twit.TTL}/>

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
