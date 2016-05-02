Accounts.onCreateUser(function(options, user){
	FollowData.insert({uID: user._id, followers: [], following: []});
	return user
})

