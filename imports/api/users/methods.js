/**
 * Created by Jeroen on 17/08/16.
 */

import {Meteor} from 'meteor/meteor'

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
})