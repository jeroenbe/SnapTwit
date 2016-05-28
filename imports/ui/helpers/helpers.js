import { Template } from 'meteor/templating'
import { Twits } from '../../api/twits/collection'

export const getUser = Template.registerHelper('getUser', function(uID){
	return Meteor.users.findOne({_id: uID})
})

export const getTwit = Template.registerHelper('getTwit', function(tID){
	return Twits.findOne({_id: tID})
})