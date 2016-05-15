import CronJob from 'node-cron'

new CronJob.schedule('* * * * * *', Meteor.bindEnvironment(() => {
	Twits.remove({TTL: {$lte: new Date()}})
}), null, true, 'uct');


Meteor.methods({
	insertTwit: function(twit) {
		var id = Twits.insert(twit)
	},

	addTimeToTwit: function(minutes, twitId) {
		var twit = Twits.findOne({_id: twitId})
		var newTime = new Date(twit.TTL.getTime() + minutes*60000)

		Twits.update({_id: twitId}, {$set: {TTL: newTime}})			
	}, 
	retwit: function(userId, twitId) {
		var twit = Twits.findOne({_id: twitId, retwittedBy: Meteor.userId()})		
		if(!twit){
			Twits.update({_id: twitId}, {$addToSet: {retwittedBy: Meteor.userId()}})
			Twits.update({_id: twitId}, {$set : {lastActivity: new Date()}})
			Meteor.call('addTimeToTwit', 60, twitId)
		}
	}
})
