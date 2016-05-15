import moment from 'moment'
import '../../helpers/helpers.js'
import './twit.html'

import { Template } from 'meteor/templating'

//GENERIC TWIT
Template.genericTwit.onCreated(function(){
	this.TTL = new ReactiveVar("")
	var self = this

	updateTTL(self.data.TTL, this.TTL)	

	this.iHandler = Meteor.setInterval(function(){
		updateTTL(self.data.TTL, self.TTL)
	}, 1000)

	if (self.data.TTL - new Date() <= 0){
		console.log("interval cleared")
		Meteor.clearInterval(self.iHandler)
	}
})

Template.genericTwit.onDestroyed(function(){
	Meteor.clearInterval(this.iHandler)
})

Template.genericTwit.helpers({ 
	getTimeLeft: function () {
		return Template.instance().TTL.get()		
	},
	isRetwitted: function () {
		return this.retwittedBy ? this.retwittedBy.includes(Meteor.userId()) : false
	},
	isLiked: function () {
		return this.likedBy ? this.likedBy.includes(Meteor.userId()) : false	
	}
})

Template.genericTwit.events({
	'click #retwit': function (event) {
		event.preventDefault()
		Meteor.call('retwit', this._id)
	},
	'click #deRetwit': function (event) {
		event.preventDefault()
		Meteor.call('deRetwit', this._id)
	},
	'click #like': function (event) {
		event.preventDefault()
		Meteor.call('like', this._id)
	},
	'click #deLike': function () {
		event.preventDefault()
		Meteor.call('deLike', this._id)
	}
})

//TWIT
Template.twit.helpers({
	getTwit: function () {
		var twitId = FlowRouter.getParam('twitId')
		return Twits.findOne({_id: twitId})
	}
})

//MINI TWIT
Template.miniTwit.helpers({

})

function updateTTL(TTL, rTTL){
	rTTL.set(moment.duration(TTL - new Date()).humanize())
}