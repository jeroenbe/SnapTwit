//PACKAGE IMPORTS
import { Accounts } from 'meteor/accounts-password'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

//TEMPLATE IMPORTS
import '../../../ui/pages/user/user.js'
import '../../../ui/pages/home/home.js'
import '../../../ui/layouts/tweeter.js'
import '../../../ui/components/twit/twit.js'


FlowRouter.route('/', {
	name: 'home',
	action: function(){
		BlazeLayout.render('tweeter', {content:'home'})
	}
})

FlowRouter.route('/:userId', {
	name: 'user',
	action: function(params){
		BlazeLayout.render('tweeter', {content: 'user'})
	}
})

FlowRouter.route('/twit/:twitId', {
	name: 'twit',
	action: function(params){
		BlazeLayout.render('tweeter', {content:'twit'})
	}
})