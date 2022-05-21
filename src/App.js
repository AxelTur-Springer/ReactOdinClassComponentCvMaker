import React,{Component} from "react";
import { ReactDOM } from "react";
import "./App.css"
import PeronsalInfoForm from "./Components/FormComponents/PersonalInfoForm";
import EducationInputForm from "./Components/FormComponents/EducationInputForm";
import ExperienceInputForm from "./Components/FormComponents/ExperienceFormInfo";
import CvPreview from "./Components/cvPreview";
class App extends React.Component {  
  constructor(props){
    super(props)
    this.state ={
      PersonalInfoName:"",
      PersonalInfoAddress: "",
      PersonalInfoNumber: "",
      PersonalInfoAge: "",
      PersonalInfoEmail: "",
      EducationInstitute:"",
      EducationFrom :"",
      EducationTo:"",
      EducationLevel: ""
    
    }
    this.SetPersonalInfoComponent= this.SetPersonalInfoComponent.bind(this)
    this.SetEducationInfoComponent= this.SetEducationInfoComponent.bind(this)

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
                  <ExperienceInputForm />
                  </div>
                </div>
                <div className="PreviewContainer">
                  <div>
                    <CvPreview 
                    Name ={this.state.PersonalInfoName}
                    Address ={this.state.PersonalInfoAddress}
                    Number ={this.state.PersonalInfoNumber}
                    Age ={this.state.PersonalInfoAge}
                    Email ={this.state.PersonalInfoEmail}
                    Institute = {this.state.EducationInstitute}
                    EducationFrom ={this.state.EducationFrom}  
                    EducationTo = {this.state.EducationTo}
                    EducationLevel ={this.state.EducationLevel}      
                    />
                  </div>
                 
                </div>
            </div>   
        );          
    }}
    export default App; 
