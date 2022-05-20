import React from "react";
import EducationPreview from "./PreviewComponents/EducationPre";

export default class CvPreview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div>
                    <h1>Curriculum Vitae</h1>
                </div>
                <div className="personalInfo">
                <p>Full Name: {this.props.Name}</p>
                <p>Age: {this.props.Age}</p>
                <p>Address: {this.props.Address}</p>
                <p>Email: {this.props.Email}</p>
                <p>Number: {this.props.Number}</p>
                </div>
                <div>
                <EducationPreview
                    Institute ={this.props.Institute}/>
                </div>
            </div>
        )
    }
}