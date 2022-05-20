import React,{Component} from "react";
import { ReactDOM } from "react";
import "./App.css"
import PeronsalInfoForm from "./Components/PersonalInfoForm";
import EducationInputForm from "./Components/EducationInputForm";
import ExperienceInputForm from "./Components/ExperienceFormInfo";
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
      EducationCompany:""
    
    }
    this.SetPersonalInfoComponent= this.SetPersonalInfoComponent.bind(this)
    this.SetEducationInfoComponent= this.SetEducationInfoComponent.bind(this)

  }
  SetPersonalInfoComponent(Input){
    let inputHolder = Input.target.id
    this.setState({[inputHolder]:Input.target.value})  
    console.log(this.state)
}
SetEducationInfoComponent(e){
  e.preventDefault()

  console.log(e)
}
    render(){   
        return (     
            <div className="App">  
                <div className="Form-cointainer">
                  <div>
                    <PeronsalInfoForm onClick ={this.SetPersonalInfoComponent} />
                  </div>
                  <div>
                    <EducationInputForm onSubmit ={this.SetEducationInfoComponent}/>
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
                    Company = {this.state.EducationCompany}      
                    />
                  </div>
                 
                </div>
            </div>   
        );          
    }}
  
    export default App; 