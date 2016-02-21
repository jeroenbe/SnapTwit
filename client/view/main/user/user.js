Template.user.helpers({
	getUser: function () {
		var uID = FlowRouter.getParam('userId')
		return Meteor.users.findOne({_id: uID})
	}
});

Template.user.events({
	'click #follow': function (event) {
		Meteor.user().profile.following.push(this._id)
		console.log(Meteor.user())
	}
});