import React,{Component} from "react";
import { ReactDOM } from "react";
import "./App.css"
import PeronsalInfoForm from "./Components/FormComponents/PersonalInfoForm";
import EducationInputForm from "./Components/FormComponents/EducationInputForm";
import ExperienceInputForm from "./Components/FormComponents/ExperienceFormInfo";
import PreviewCv from "./Components/cvPreview";
class App extends React.Component {  
  constructor(props){
    super(props)
    this.state ={
      PersonalInfoName:"Axel Tur-Springer",
      Profesion:"Front End Developer ",
      PersonalInfoAddress: "Fake Address",
      PersonalInfoNumber: "3654785462",
      PersonalInfoAge: "24",
      PersonalInfoEmail: "FakeEmail@gmail.com",
      EducationInstitute:"",
      EducationFrom :"",
      EducationTo:"",
      EducationLevel: "",
      ExperienceCompany:"",
      ExperienceFrom :"",
      ExperienceTo:"",
      ExperienceLevel: ""
    
    }
    this.SetPersonalInfoComponent= this.SetPersonalInfoComponent.bind(this)
    this.SetEducationInfoComponent= this.SetEducationInfoComponent.bind(this)
    this.SetExperienceInfoComponent= this.SetExperienceInfoComponent.bind(this)

  }
  SetPersonalInfoComponent(Input){
    let inputHolder = Input.target.id
    this.setState({[inputHolder]:Input.target.value})  
}
SetEducationInfoComponent(e){
  this.setState({
    EducationInstitute:e.target[0].value,
    EducationFrom: e.target[1].value,
    EducationTo: e.target[2].value,
    EducationLevel:e.target[3].value

  })
  console.log(this.state)
}
SetExperienceInfoComponent(e){
  this.setState({
    ExperienceCompany:e.target[0].value,
    ExperienceFrom: e.target[1].value,
    ExperienceTo: e.target[2].value,
    ExperienceLevel:e.target[3].value

  })
  console.log(this.state)
}
    render(){   
        return (     
            <div className="App">  
                <div className="Form-cointainer">
                  <div>
                    <PeronsalInfoForm onClick ={this.SetPersonalInfoComponent} />
                  </div>
                  <div>
                    <EducationInputForm 
                    WhenSubmit ={this.SetEducationInfoComponent}
                    />
                  </div>
                  <div>
                  <ExperienceInputForm 
                   WhenSubmit ={this.SetExperienceInfoComponent}
                  />
                  </div>
                </div>
                <div className="PreviewContainer">
                  <div>
                    <PreviewCv 
                    Name ={this.state.PersonalInfoName}
                    Profession ={this.state.Profesion}
                    Address ={this.state.PersonalInfoAddress}
                    Number ={this.state.PersonalInfoNumber}

                    Email ={this.state.PersonalInfoEmail}
                    Institute = {this.state.EducationInstitute}
                    EducationFrom ={this.state.EducationFrom}  
                    EducationTo = {this.state.EducationTo}
                    EducationLevel ={this.state.EducationLevel}
                    ExperienceCompany ={this.state.ExperienceCompany}
                    ExperienceFrom ={this.state.ExperienceFrom}
                    ExperienceTo = {this.state.ExperienceTo}
                    ExperienceLevel = {this.state.ExperienceLevel}
                    />
                  </div>
                 
                </div>
            </div>   
        );          
    }}
    export default App; 
