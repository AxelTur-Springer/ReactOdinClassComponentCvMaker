import React from "react";
import "../stylingComponents/CvPreview.css"
export default class EducationPreview extends React.Component{
    constructor(props){
        super(props);
        this.erase = this.erase.bind(this)

   }
   erase(e){
    e.target.parentElement.parentElement.remove()
   }

   render(){
       return(
           <div className="EducationPreviewContainer">
               <div>
                    <h2> Institute: {this.props.Institute} </h2>   
                <div>
                    <p>From: {this.props.EducationFrom}</p>
                    <p>To: {this.props.EducationTo}</p>
                    <p>Level of Education Achieved: {this.props.EducationLevel}</p>
               </div>
               </div>
             
               <div className="EducationEraseBtnDiv" >
                    <button onClick={this.erase}>Delete</button>
               </div>
           </div>
       )
   }
}

