import React, { Component } from 'react';
import axios from 'axios';

class GuestNames extends Component{
    state = {
        messages : ""
    }

    componentDidMount(){
        axios(' ')
            .then(res => {
                console.log(res);
                this.setState({
                    messages : res
                })
                return res.json();
            })
            .catch(err =>{
                console.log("Error");
            })
    
    }
    
    render(){
        return(
            this.state.messages.map(msg =>{
                return(
                    <div key={msg.results}>
                        <h3>{msg.message}</h3>
                        <h2>{msg.guestSignature}</h2>
                    </div>
                )
            })
        )
    }
}