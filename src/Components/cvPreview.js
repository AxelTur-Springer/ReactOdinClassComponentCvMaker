import React from "react";
import EducationPreview from "./PreviewComponents/EducationPre";
import ExperiencePreview from "./PreviewComponents/ExperiencePre";
import "./stylingComponents/CvPreview.css"
export default class PreviewCv extends React.Component{
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
            <div className="CvPreviewFullDiv">
              <div className="ContainerNameContact">
                <div className="NameProfession">
                  <h2>{this.props.Name}</h2>
                  <p>{this.props.Profession}</p>
                </div>
                <div className="PersonalInfoCont">
                  <p><i className="ri-home-2-line"></i>
                    {" "}{this.props.Address}</p>
                  <p><i className="ri-mail-line"></i>
                    {" "}{this.props.Email}</p>
                  <p><i className="ri-phone-line"></i>
                    {" "}{this.props.Number}</p>
                </div>
              </div>
                <div>
                  <div>
                    {this.state.ChildrenEducation}
                  </div>
                  <div>
                    {this.state.ChildrenExperience}
                  </div>
                </div>
            </div>
        )
    }
}




