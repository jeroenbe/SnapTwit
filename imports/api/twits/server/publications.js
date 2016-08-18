/**
 * Created by Jeroen on 17/08/16.
 */
import {Meteor} from 'meteor/meteor'
import {Twits} from '../collection'

let cutoffTimestamp = new ReactiveVar();

Meteor.setInterval(function() {
    cutoffTimestamp.set(Date.now() - 1);
}, 60000);

Meteor.publish('allTwits', function(){
    return Twits.find({TTL: {$gt: new Date()}})
})

Meteor.publish('twit', function (twitId) {
    return Twits.find(twitId)
})