/**
 * Created by Jeroen on 17/08/16.
 */

import React, {Component, PropTypes} from 'react'

export default class User extends Component {
    render() {
        return (
            <p>{this.props.id}</p>
        )
    }
}