Template.user.helpers({
	getUser: function () {
		var uID = FlowRouter.getParam('userId')
		return Meteor.users.findOne({_id: uID})
	},
	userIsFollowing: function() {
		var d = FollowData.findOne({uID: Meteor.user()._id})		
		return d.following.includes(this._id)
	}
});

Template.user.events({
	'click #follow': function (event) {	
		var d = FollowData.findOne({uID: Meteor.user()._id})		
		FollowData.update({_id: d._id}, {$addToSet: {following: this._id}})			
	},
	'click #unFollow': function (event) {
		var d = FollowData.findOne({uID: Meteor.user()._id})
		FollowData.update({_id: d._id}, {$pull : {following: this._id}});
	}
});