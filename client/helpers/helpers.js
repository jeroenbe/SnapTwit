Template.registerHelper('getUser', function(uID){	
	return Meteor.users.findOne({_id: uID})
})