import React from "react";
import EducationPreview from "./PreviewComponents/EducationPre";
import ExperiencePreview from "./PreviewComponents/ExperiencePre";
import "./stylingComponents/CvPreview.css"
export default class CvPreview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ChildrenEducation :[], //Components for education
            ChildrenExperience:[] // components for experience
          }
    }
    componentDidUpdate(prevProps) {
          // Case For Submit info from Experience
      if (this.props.ExperienceCompany !== prevProps.ExperienceCompany) {
        this.setState(state => {
            const ChildrenExperience = state.ChildrenExperience.concat(
              <ExperiencePreview 
              Company ={this.props.ExperienceCompany}
              ExperienceFrom ={this.props.ExperienceFrom}  
              ExperienceTo ={this.props.ExperienceTo}
              ExperienceLevel ={this.props.ExperienceLevel}
              />);
            return {
              ChildrenExperience
            };
          });
    }
    // Case For Submit info from education 
      else if (this.props.Institute !== prevProps.Institute ||
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
                  <div>
                    <h2>Education</h2>
                    {this.state.ChildrenEducation}
                  </div>
                  <div>
                  <h2>Experience</h2>
                    {this.state.ChildrenExperience}
                  </div>
                </div>
            </div>
        )
    }
}




