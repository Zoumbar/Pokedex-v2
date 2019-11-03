import React, { Component } from 'react'
import styled from 'styled-components'
import '../../App.css'
import loader from '../Pokemon/loader.gif'


const Sprite = styled.img`
    width: 50%;
    height: 50%;
    display:none;

`

export default class Cell extends Component {
    state ={
        name:'',
        imageUrl:'',
        pokemonIndex:'',
        imageLoading: true,
        toManyrequests: false
    }

    componentDidMount(){
        const{name, url}= this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

        this.setState({name: name, imageUrl: imageUrl, pokemonIndex: pokemonIndex});
    }


        render() {
        
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <h5 className="card-header">Pokemon n°{this.state.pokemonIndex}</h5>
                    {this.state.imageLoading ? (
                        <img src={loader} style={{width: '5em', height: '5em'}} className="card-img-top rounded mx-auto d-block mt-2"/>
                    ) : null}
                    <Sprite className="card-img-top rounded mx-auto mt-2"
                        onLoad={()=> this.setState({imageLoading: false})}
                        onError={()=> this.setState({toManyrequests: true})}
                        src={this.state.imageUrl}
                        style={
                            this.state.toManyrequests
                            ? {display : 'none' }
                            : this.state.imageLoading
                            ? null
                            : {display: 'block'}
                        }                    
                    />
                       
                    <div className="card-body mx-auto">
                        <h6 className="card-title">{this.state.name.toLocaleLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h6>
                    </div>
                </div>   
            </div>
        )
    }
}
