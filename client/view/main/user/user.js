Template.user.helpers({
	getUser: function () {
		var uID = FlowRouter.getParam('userId')
		return Meteor.users.findOne({_id: uID})
	},
	userIsFollowing: function() {
		var data = FollowData.findOne({uID: Meteor.userId(), following: this._id})
		return data
	},
	getUsersTwits: function() {		
		return Twits.find({$or : [{user: this._id}, {retwittedBy: this._id}]}, {"sort" : {lastActivity: -1}}).fetch()
	}
});

Template.user.events({
	'click #follow': function (event) {	
		Meteor.call('followUser', this._id)			
	},
	'click #unFollow': function (event) {
		Meteor.call('unfollowUser', this._id)
	}
});

