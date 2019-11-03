import React, { Component } from 'react'
import List from '../Pokemon/List'

export default class container extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <List></List>
                </div>
            </div>
        )
    }
}
