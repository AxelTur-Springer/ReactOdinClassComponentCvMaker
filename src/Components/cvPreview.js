import React from "react";
import EducationPreview from "./PreviewComponents/EducationPre";
import "./stylingComponents/CvPreview.css"
export default class CvPreview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ChildrenEducation :[],
          }
    }

      componentDidUpdate(prevProps) {
        if (this.props.Institute !== prevProps.Institute ||
            this.props.EducationLevel !== prevProps.EducationLevel) {
            this.setState(state => {
                const ChildrenEducation = state.ChildrenEducation.concat(
                  <EducationPreview 
                  Institute ={this.props.Institute}
                  EducationFrom ={this.props.EducationFrom}  
                  EducationTo ={this.props.EducationTo}
                  EducationLevel ={this.props.EducationLevel}
                  />);
                return {
                    ChildrenEducation
                };
              });
        }
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
                  {this.state.ChildrenEducation}
                </div>
            </div>
        )
    }
}




