import {Meteor} from 'meteor/meteor'
import {FollowData} from '../collection'

Meteor.publish('following', function () {
    return FollowData.find({uID: this.userId}, {fields: {following: 1, uID: 1}})
})