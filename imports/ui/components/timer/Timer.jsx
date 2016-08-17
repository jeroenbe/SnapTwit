/**
 * Created by Jeroen on 17/08/16.
 */

import React, {Component, PropTypes} from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { compose } from 'react-komposer'

// NEEDS SOME D3 AWESOMENESS!

const Time = ({time}) => (<div>Time is: {time}</div>);

const onPropsChange = (props, onData) => {
    const handle = setInterval(() => {
        const time = (Math.floor((props.time.getTime() - new Date().getTime()) / 1000) );
        onData(null, {time});
    }, 1000);

    const cleanup = () => clearInterval(handle);
    return cleanup;
};

export default Timer = compose(onPropsChange)(Time);
