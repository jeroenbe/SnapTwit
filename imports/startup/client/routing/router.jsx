//PACKAGE IMPORTS
import { Accounts } from 'meteor/accounts-password'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import { mount, withOptions } from 'react-mounter'
import React from 'react'


//TEMPLATE IMPORTS
import '../../../ui/pages/profile_page/user.js'
import '../../../ui/pages/home/home.js'
import '../../../ui/layouts/tweeter.js'
import '../../../ui/components/twit/twit.js'

//REACT.COMPONENTS IMPORTS
import { MainLayoutManager } from '/imports/ui/pages/MainLayoutManager'

import Home from '/imports/ui/pages/home/home.jsx'
import ProfilePage from '/imports/ui/pages/profile_page/profile_page'

//LAYOUT MANAGEMENT
const main = withOptions({
	rootId: 'main'
}, mount)

FlowRouter.route('/', {
	name: 'home',
	action: function(){
		main(MainLayoutManager, {content: <Home />})
	}
})

FlowRouter.route('/test', {
	name: 'test-route',
	action() {
		main(Home, {content: 'test'})
	}
})

FlowRouter.route('/:userId', {
	name: 'user',
	action: function(params){
		main(MainLayoutManager, {content: <ProfilePage userId={params.userId} />})
	}
})

FlowRouter.route('/twit/:twitId', {
	name: 'twit',
	action: function(params){
		BlazeLayout.render('tweeter', {content:'twit'})
	}
})