import React from "react";
import "../stylingComponents/EducationInputForm.css"
export default class EducationPreview extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="ParentDivPreviewEducationForm">
                <div>
                    <p>Institute : {this.props.Institute}</p>
                    <p>From :</p>
                    <p>To :</p>
                    <p>Title Achieved : </p>
                </div>
                <div>
                    <button>
                        Delete
                    </button>
                </div>
            </div>

        )
    }
}