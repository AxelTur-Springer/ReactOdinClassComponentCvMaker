import React from "react";
import "../stylingComponents/PersonalInfo.css"
export default class PeronsalInfoForm extends React.Component{
    constructor(props){
        super(props);
        this.value = this.value.bind(this)

    }
    value(e){
        this.props.onClick(e)
    }
    render(){
        return(
            <div className="PersonalInfoForm">
                <div>
                    <h2>Personal Informacion</h2>
                </div>
                <form action="">
                    <div>
                        <p>Enter Full name</p>
                        <input type="text" placeholder="Name"
                        id="PersonalInfoName" onChange={this.value}/>
                    </div>
                    <div>
                        <p>Enter Age</p>
                        <input type="text" placeholder="Age"
                        id="PersonalInfoAge" onChange={this.value}/>
                    </div>
                    <div>
                        <p>Enter Address</p>
                        <input type="text" placeholder="Address"
                        id="PersonalInfoAddress" onChange={this.value}/>
                    </div>
                    <div>
                        <p>Enter Email</p>
                        <input type="text" placeholder="Email"
                        id="PersonalInfoEmail" onChange={this.value}/>
                    </div>
                    <div>
                        <p>Enter Phone Number</p>
                        <input type="text" placeholder="Phone Number"
                        id="PersonalInfoNumber" onChange={this.value}/>
                    </div>
                </form>
            </div>
        )
    }
}