export const Twits = new Mongo.Collection('Twits')
import { Chronos } from 'meteor/remcoder:chronos'

if (Meteor.isServer){
    Meteor.publish('allTwits', function(){
        return Twits.find({TTL: {$gt: Chronos.currentTime()}})
    })
}
