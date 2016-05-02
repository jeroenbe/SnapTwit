Accounts.onCreateUser(function(options, user){
	FollowData.insert({uID: user._id, folowers: [], following: []});
	return user
})

