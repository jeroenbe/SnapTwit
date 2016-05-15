import '../../helpers/helpers.js'
import './wall.html'

import '../twit/twit.js'

Template.wall.helpers({
	twits: function () {
		return Twits.find({}, {"sort" : {date: -1}})
	}
});