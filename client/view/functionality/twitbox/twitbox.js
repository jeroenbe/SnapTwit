Template.twitbox.events({
	'submit': function (event) {
		event.preventDefault()

		var target = event.target.twitbox
		Twits.insert({twit: target.value, user: Meteor.user()._id, date: new Date()})

		target.value = ""
	}
});