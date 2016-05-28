import './wall.html'

import { Twits } from '../../../api/twits/collection'

Template.wall.helpers({
	twits: function () {
		return Twits.find({}, {"sort" : {date: -1}})
	}
});