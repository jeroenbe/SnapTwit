import './wall.html'

import { Twits } from '../../../api/twits/collection'

Template.wall.onCreated(function (){
	this.autorun(() => {
		this.subscribe('allTwits')
	})
})

Template.wall.helpers({
	twits() {
		return Twits.find({}, {"sort" : {date: -1}})
	},

	timeTest() {
		return Chronos.currentTime()
	}
});

Twitters = Twits