/**
 * Created by Jeroen on 17/08/16.
 */

import { Meteor } from 'meteor/meteor'
import { FollowData } from '../../api/users/collection'

Meteor.methods({
    getUser(id) {
        return Meteor.users.findOne(id)
    },

    getUserName(id) {
        if(!id) throw new Meteor.Error('no id given')
        const u = Meteor.users.findOne(id)
        if(!u) throw new Meteor.Error('no profile_page found')

        return u.username
    },

    followUser(toFollow){
        var protagonist = FollowData.findOne({uID: Meteor.userId()})
        var subject = FollowData.findOne({uID: toFollow})

        FollowData.update({_id: subject._id}, {$addToSet: {followers: Meteor.user()._id}})
        FollowData.update({_id: protagonist._id}, {$addToSet: {following: toFollow}})
    },

    unFollowUser(toUnfollow){
        var protagonist = FollowData.findOne({uID: Meteor.userId()})
        var subject = FollowData.findOne({uID: toUnfollow})

        FollowData.update({_id: subject._id}, {$pull: {followers: Meteor.user()._id}})
        FollowData.update({_id: protagonist._id}, {$pull : {following: toUnfollow}});
    }
})