//import CronJob from 'node-cron'
import { Twits } from '../../api/twits/collection'

// new CronJob.schedule('* * * * * *', Meteor.bindEnvironment(() => {
// 	Twits.remove({TTL: {$lte: new Date()}})
// }), null, true, 'uct');


Meteor.methods({
	insertTwit: function(twit) {
		Twits.insert(twit)
	},

	addTimeToTwit: function(minutes, twitId) {
		var twit = Twits.findOne({_id: twitId})
		var newTime = new Date(twit.TTL.getTime() + minutes*60*1000)

		Twits.update({_id: twitId}, {$set: {TTL: newTime}})			
	},

	removeTimeFromTwit: function(minutes, twitId) {
		var twit = Twits.findOne({_id: twitId})
		var newTime = new Date(twit.TTL.getTime() - minutes*60*1000)

		Twits.update({_id: twitId}, {$set: {TTL: newTime}})	
	},

	retwit: function(twitId) {
		var twit = Twits.findOne({_id: twitId, retwittedBy: Meteor.userId()})		
		if(!twit){
			Twits.update({_id: twitId}, {$addToSet: {retwittedBy: Meteor.userId()}, $set: {lastActivity: new Date()}, $inc: {amountOfRetwits: 1}})
			Meteor.call('addTimeToTwit', 60, twitId)
		}
	},

	deRetwit: function(twitId) {
		Twits.update({_id: twitId}, {$pull: {retwittedBy: Meteor.userId()}, $inc: {amountOfRetwits: -1}})
		Meteor.call('removeTimeFromTwit', 60, twitId)
	},

	like: function(twitId) {
		var twit = Twits.findOne({_id: twitId, likedBy: Meteor.userId()})		
		if(!twit){
			Twits.update({_id: twitId}, {$addToSet: {likedBy: Meteor.userId()}, $inc: {amountOfLikes: 1}})
			Meteor.call('addTimeToTwit', 10, twitId)
		}	
	},

	deLike: function(twitId) {
		Twits.update({_id: twitId}, {$pull: {likedBy: Meteor.userId()}, $inc: {amountOfLikes: -1}})
		Meteor.call('removeTimeFromTwit', 10, twitId)
	}
})
