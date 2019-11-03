import React, { Component } from 'react'
import Cell from './Cell'
import axios from 'axios'

export default class List extends Component {
    state= {
        url:'https://pokeapi.co/api/v2/pokemon?limit=807',
        pokemon: null
    }
 
    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data['results']});
    }

    render() {
        return (
            <React.Fragment>
                {this.state.pokemon ?(<div className="row">
                {this.state.pokemon.map(pokemon =>(
                    <Cell
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    />
                ))}
            </div>): (
                <h1>Loading</h1>
            )}
            </React.Fragment>
            
        )
    }
}
