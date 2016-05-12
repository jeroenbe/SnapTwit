Template.registerHelper('getUser', function(uID){	
	return Meteor.users.findOne({_id: uID})
})

Template.registerHelper('getTwit', function(tID){
	return Twits.findOne({_id: tID})
})