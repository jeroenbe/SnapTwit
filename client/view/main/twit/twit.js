Template.genericTwit.onCreated(function(){
	this.TTL = new ReactiveVar(0)
})

Template.twit.helpers({
	getTwit: function () {
		var twitId = FlowRouter.getParam('twitId')
		return Twits.findOne({_id: twitId})
	}
})

Template.genericTwit.helpers({ 
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
})

Template.genericTwit.events({
	'click #retwit': function (event) {
		event.preventDefault()

		console.log(this)

		Meteor.call('retwit',this.userId, this._id)
	}
});

function updateTTL(TTL, rTTL){
	rTTL.set(TTL.getSeconds() - new Date().getSeconds())
}
