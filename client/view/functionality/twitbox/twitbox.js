Template.twitbox.events({
	'submit': function (event) {
		event.preventDefault()

		var target = event.target.twitbox
		var currentDate = new Date()
		var lastActivityDate = new Date()
		var TTLTime = new Date(currentDate.getTime() + 10 * 1 * 1000)
		var twit = {twit: target.value, user: Meteor.user()._id, date: currentDate, lastActivity: lastActivityDate,TTL: TTLTime, retwittedBy: []}

		Meteor.call('insertTwit', twit)

		target.value = ""
	}
});