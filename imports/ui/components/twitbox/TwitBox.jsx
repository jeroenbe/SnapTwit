/**
 * Created by Jeroen on 16/08/16.
 */

import { Meteor } from 'meteor/meteor'

import React, {Component} from 'react'

export default class TwitBox extends Component {
    handleTwit(event) {
        event.preventDefault()

        const twit = this.refs.twitInput.value
        this.refs.twitInput.value = ''
        const currentDate = new Date()

        Meteor.call('insertTwit', {
            twit: twit,
            user: Meteor.user()._id,
            date: currentDate,
            lastActivity: currentDate,
            TTL: new Date(currentDate.getTime() + 10 * 1 * 1000),
            retwittedBy: [],
            likedBy: [],
            amountOfRetwits: 0,
            amountOfLikes: 0
        })
    }

    render() {

        return (
            <form>
                <input type="text" name="twitbox" ref="twitInput"/>
                <button type="submit" onClick={this.handleTwit.bind(this)}>Twit it!</button>
            </form>
        )
    }
}