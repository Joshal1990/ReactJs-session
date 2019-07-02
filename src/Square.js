import React from 'react';

class Square extends React.Component{

    render(){
        return(
            <button className ="square">
                {this.props.val}
            </button>
        );
    }

}
export default Square;