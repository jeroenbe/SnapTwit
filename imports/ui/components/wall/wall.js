import '../../helpers/helpers.js'
import './wall.html'

Template.wall.helpers({
	twits: function () {
		return Twits.find({}, {"sort" : {date: -1}})
	}
});