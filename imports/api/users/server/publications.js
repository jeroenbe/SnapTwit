/**
 * Created by Jeroen on 17/08/16.
 */

import { Meteor } from 'meteor/meteor'

Meteor.publish('user', function (id) {
    return Meteor.users.find(id, {fields: {emails: 1, profile: 1}})
})