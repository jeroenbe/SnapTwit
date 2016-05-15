import './twitbox.html'

import { Template } from 'meteor/templating'

Template.twitbox.events({
	'submit': function (event) {
		event.preventDefault()

		var target = event.target.twitbox
		var currentDate = new Date()
		var lastActivityDate = new Date()
		var TTLTime = new Date(currentDate.getTime() + 60 * 60 * 1000)
		var amountOfRetwitsCount = 0
		var amountOfLikesCount = 0

		var twit = {
			twit: target.value, 
			user: Meteor.user()._id, 
			date: currentDate, 
			lastActivity: lastActivityDate,
			TTL: TTLTime, 
			retwittedBy: [],
			amountOfRetwits: amountOfRetwitsCount,
			amountOfLikes: amountOfLikesCount

		}



		Meteor.call('insertTwit', twit)

		target.value = ""
	}
});