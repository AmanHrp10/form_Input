import React, { Component } from 'react';
import axios from 'axios';  

class Input extends Component{

   state = {
        posts : []
    }
    getData = () => {
        axios.get('http://www.omdbapi.com/?apikey=8be5f399&s=Joker')
        .then(result => {
            this.setState ({
                posts : result.data.Search
            })
        })
        .catch(err=>{
            throw err 
        })
    }
    componentDidMount(){
        this.getData()
        }


    render() {
        return (
            <div>
                {this.state.posts.map(post=>{
                    return 
                })}
            </div>
        );        
    }

}

export default Input;
