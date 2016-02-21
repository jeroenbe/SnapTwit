Template.twit.onCreated(function(){
	// this would be the place for a subscription with the help for FlowRouter Reactive API
})

Template.twit.helpers({
	getTwit: function () {
		var twitId = FlowRouter.getParam('twitId')
		return Twits.findOne({_id: twitId})
	}
});