import React,{Component} from "react";
import { ReactDOM } from "react";
import PeronsalInfo from "./Components/PersonalInfo";
import CvPreview from "./Components/cvPreview";
class App extends React.Component {  
  constructor(props){
    super(props)
    this.state ={PersonalInfoName:""}
    this.testForPersonal= this.testForPersonal.bind(this)
  }
  testForPersonal(e){
    this.setState({PersonalInfoName:e.target.value})  
    console.log(this.state)
}
    render(){   
        return (     
            <div className="App">  
                <div className="Form-cointainer">
                <PeronsalInfo onClick ={this.testForPersonal} />
                </div>
                <div className="PreviewContainer">
                  <CvPreview Name ={this.state.PersonalInfoName}/>
                </div>
            </div>   
        );          
    }}
  
    export default App; 