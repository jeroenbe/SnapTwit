import schedule from 'node-schedule'

Meteor.methods({
	insertTwit: function(twit){
		Twits.insert(twit)
		console.log(twit.TTL)
		console.log(twit.date)

		var s = schedule.scheduleJob(twit.TTL, Meteor.bindEnvironment((err, res) => {			
			Twits.remove({twit: twit.twit, user: twit.user, date: twit.date})
		}))

		Schedule.insert({twit: twit._id, task: s})
	},
	addTimeToTwit: function(minutes, twitId){
		var twit = Twits.find({_id: twitId})
		var newTime = new Date()
		newTime.setMinutes(twit.TTL.getMinutes() + minutes)

		var s = Schedule.find({twit: twitId})
		s.task.cancel()

		Schedule.update({twit: twitId}, {$set: {task: schedule.scheduleJob(newTime, Meteor.bindEnvironment((err, res) => {
			Twits.remove({twit: twit.twit, user: twit.user, date: twit.date})
		}))}})
	}
})
