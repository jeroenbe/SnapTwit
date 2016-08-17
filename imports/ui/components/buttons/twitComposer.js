/**
 * Created by Jeroen on 17/08/16.
 */

import {Meteor} from 'meteor/meteor'
import {Twits} from '/imports/api/twits/collection'

export const twitComposer = (props, onData) => {
    if (Meteor.subscribe('twit', props.twitId).ready()){
        const twit = Twits.findOne(props.twitId)
        onData(null, {twit})
    }
}