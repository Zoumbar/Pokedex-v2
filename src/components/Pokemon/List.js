import React, { Component } from 'react'
import Cell from './Cell'
import axions from 'axios'

export default class List extends Component {
    state= {
        url:'https://pokeapi.co/api/v2/pokemon',
        pokemon: null
    }
 
    async componentDidMount() {
        const res = axios.get(this.state.url);
        this.setState({pokemon: res.data['results']});
    }

    render() {
        return (
            <div className="row">
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
            </div>
        )
    }
}
