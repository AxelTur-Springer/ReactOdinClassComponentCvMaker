import React from "react";

export default class EducationPreview extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <p>
                    institute:{this.props.Company}
                </p>
            </div>

        )
    }
}