Template.twit.onCreated(function(){
	this.TTL = new ReactiveVar(0)
})

Template.twit.helpers({
	getTwit: function () {
		var twitId = FlowRouter.getParam('twitId')
		return Twits.findOne({_id: twitId})
	}, 
	getTimeLeft: function () {
		var twit = Twits.findOne({_id: FlowRouter.getParam('twitId')})
		var self = Template.instance()
		updateTTL(twit.TTL, self.TTL)

		var iHandler = Meteor.setInterval(function(){
			updateTTL(twit.TTL, self.TTL)
		}, 1000)

		if (self.TTL == 0){
			Meteor.clearInterval(iHandler)
		}
		
		return self.TTL.get()
	}
});

function updateTTL(TTL, rTTL){
	rTTL.set(TTL.getSeconds() - new Date().getSeconds())
}
