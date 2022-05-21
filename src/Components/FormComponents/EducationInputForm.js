import React from "react";
import "../stylingComponents/EducationInputForm.css"

export default class EducationInputForm extends React.Component{
    constructor(props){
        super(props);
        this.value = this.value.bind(this)
        this.hideOrShow = this.hideOrShow.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            test:"name"
        }

    }
    value(e){
        this.props.onClick(e)
    }
    hideOrShow(e){
        let form = document.getElementById("FormEducaion")
        if(form.style.display === ""){
            form.style.display = "initial"
            e.target.innerText = "Close"
    }else if(form.style.display === "initial"){
        form.style.display = ""
        e.target.innerText = "Add"
    }
    }
    onSubmit(e){
        e.preventDefault()
        this.props.WhenSubmit(e)
    }

    render(){
        return(
            <div className="EducationInputForm">
                <div>
                    <h2>Education</h2>
                </div>
                <div>
                    <button onClick={this.hideOrShow}>Add</button>
                </div>
                <form action="" id="FormEducaion" onSubmit={this.onSubmit}>
                    <div>
                        <p>Institute</p>
                        <input type="text" placeholder="Name"
                        id="EducationInstitute"/>
                    </div>
                    <div>
                        <p>From</p>
                        <input type="date" placeholder="Age"
                        id="EducationFrom" />
                    </div>
                    <div>
                        <p>To</p>
                        <input type="date" placeholder="Address"
                        id="EducationTo"/>
                    </div>
                    <div>
                        <p>Title</p>
                        <input type="text" placeholder="Level of education achieved"
                        id="EducationTitle" />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
