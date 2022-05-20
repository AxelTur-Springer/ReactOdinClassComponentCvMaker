import React from "react";
import "./stylingComponents/EducationInputForm.css"

export default class EducationInputForm extends React.Component{
    constructor(props){
        super(props);
        this.value = this.value.bind(this)
        this.hideOrShow = this.hideOrShow.bind(this)
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
      console.log(e)
      this.props.onSubmit(e)
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
                <form action="" id="FormEducaion">
                    <div>
                        <p>Institute</p>
                        <input type="text" placeholder="Name"
                        id="EducationInstitute" onChange={this.value}/>
                    </div>
                    <div>
                        <p>From</p>
                        <input type="date" placeholder="Age"
                        id="EducationFrom" onChange={this.value}/>
                    </div>
                    <div>
                        <p>To</p>
                        <input type="date" placeholder="Address"
                        id="EducationTo" onChange={this.value}/>
                    </div>
                    <div>
                        <p>Title</p>
                        <input type="text" placeholder="Level of education achieved"
                        id="EducationTitle" onChange={this.value}/>
                    </div>
                    <div>
                        <button type="submit" onSubmit={this.onSubmit}>Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}