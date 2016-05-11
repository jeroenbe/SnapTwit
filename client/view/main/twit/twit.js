Template.twit.onCreated(function(){
	// this would be the place for a subscription with the help for FlowRouter Reactive API
})

Template.twit.helpers({
	getTwit: function () {
		var twitId = FlowRouter.getParam('twitId')
		return Twits.findOne({_id: twitId})
	}, 

	getTimeLeft: function () {
		var twit = Twits.findOne({_id: FlowRouter.getParam('twitId')})
		date = new Date()
		console.log(twit.TTL.getSeconds() + 3600 - date.getSeconds())
		return moment.duration(twit.TTL.getSeconds() + 3600 - date.getSeconds(), 'seconds').humanize()		
	}
});