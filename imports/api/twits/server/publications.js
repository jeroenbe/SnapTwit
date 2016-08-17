/**
 * Created by Jeroen on 17/08/16.
 */
import {Meteor} from 'meteor/meteor'
import {Twits} from '../collection'

Meteor.publish('allTwits', function(){
    return Twits.find({TTL: {$gt: Chronos.currentTime()}})
})

Meteor.publish('twit', function (twitId) {
    return Twits.find(twitId)
})