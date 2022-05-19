import React from "react";

export default class CvPreview extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props)
        return(
            <div>
              <h1>name: {this.props.Name}</h1>
            </div>
        )
    }
}