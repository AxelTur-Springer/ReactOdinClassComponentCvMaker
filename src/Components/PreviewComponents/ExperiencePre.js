import React from "react";
export default class ExperiencePreview extends React.Component{
    constructor(props){
        super(props);
        this.erase = this.erase.bind(this)
   }
   erase(e){
    e.target.parentElement.parentElement.remove()
   }
   render(){
       return(
           <div className="">
               <div>
                    <h2> Company: {this.props.Company} </h2>   
                <div>
                    <p>From: {this.props.ExperienceFrom}</p>
                    <p>To: {this.props.ExperienceTo}</p>
                    <p>Position: {this.props.ExperienceLevel}</p>
               </div>
               </div>
             
               <div className="EducationEraseBtnDiv" >
                    <button onClick={this.erase}>Delete</button>
               </div>
           </div>
       )
   }
}