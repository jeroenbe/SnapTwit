FlowRouter.route('/', {
	name: 'home',
	action: function(){
		BlazeLayout.render('tweeter', {content:'home'})
	}
})

FlowRouter.route('/:userId', {
	name: 'user',
	action: function(params){
		BlazeLayout.render('tweeter', {content: 'user'})
	}
})

FlowRouter.route('/twit/:twitId', {
	name: 'twit',
	action: function(params){
		BlazeLayout.render('tweeter', {content:'twit'})
	}
})