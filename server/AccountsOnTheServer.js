Accounts.onCreateUser(function(options, user){
	user.profile = {
		followers: [],
		following: []
	}
	return user
})