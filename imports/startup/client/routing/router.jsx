//PACKAGE IMPORTS
import { Accounts } from 'meteor/accounts-password'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import { mount, withOptions } from 'react-mounter'


//TEMPLATE IMPORTS
import '../../../ui/pages/user/user.js'
import '../../../ui/pages/home/home.js'
import '../../../ui/layouts/tweeter.js'
import '../../../ui/components/twit/twit.js'

//REACT IMPORTS
import Home from '/imports/ui/pages/home/home.jsx'

//LAYOUT MANAGEMENT
const main = withOptions({
	rootId: 'main'
}, mount)

FlowRouter.route('/', {
	name: 'home',
	action: function(){
		main(Home)
	}
})

FlowRouter.route('/test', {
	name: 'test-route',
	action() {
		main(Home)
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