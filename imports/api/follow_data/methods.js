/**
 * Created by Jeroen on 17/08/16.
 */

import { Meteor } from 'meteor/meteor'
import { FollowData } from '/imports/api/follow_data/collection'

if(Meteor.isServer){
    Meteor.methods({
        Follow(toFollow){
            var protagonist = FollowData.findOne({uID: Meteor.userId()})
            var subject = FollowData.findOne({uID: toFollow})

            FollowData.update({_id: subject._id}, {$addToSet: {followers: Meteor.userId()}})
            FollowData.update({_id: protagonist._id}, {$addToSet: {following: toFollow}})

        },

        Unfollow(toUnfollow){
            var protagonist = FollowData.findOne({uID: Meteor.userId()})
            var subject = FollowData.findOne({uID: toUnfollow})

            FollowData.update({_id: subject._id}, {$pull: {followers: Meteor.userId()}})
            FollowData.update({_id: protagonist._id}, {$pull : {following: toUnfollow}});
        }
    })
}
