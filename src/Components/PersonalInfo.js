import React from "react";

export default class PeronsalInfo extends React.Component{
    constructor(props){
        super(props);
        this.value = this.value.bind(this)

    }

    value(e){
        this.props.onClick(e)
        console.log(this.state)
    }
    render(){
        
        return(
            <div>
                <form action="">
                    <input type="text" placeholder="Name"
                     id="Name" onChange={this.value}/>
                </form>
            </div>
        )
    }
}