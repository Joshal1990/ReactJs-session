import React from 'react';

class UserDetail extends React.Component {

    render(){
        return(
            <div>
                <h1>User detiald</h1>
                <input type="text" id="user_name"></input>
                <input type="text" id="user_pass"></input>
                <button onClick = "passMe()">click to Navigate</button>
            </div>
        );
    }
}