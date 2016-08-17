//PACKAGE IMPORTS
import { Accounts } from 'meteor/accounts-password'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount, withOptions } from 'react-mounter'
import React from 'react'

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

FlowRouter.route('/:userId', {
	name: 'user',
	action: function(params){
		main(MainLayoutManager, {content: <ProfilePage userId={params.userId} />})
	}
})

// twit -> :twitId