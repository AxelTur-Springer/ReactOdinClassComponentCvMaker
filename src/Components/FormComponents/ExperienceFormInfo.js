import React from "react";
import "../stylingComponents/ExperienceInputForm.css"

export default class ExperienceInputForm extends React.Component{
    constructor(props){
        super(props);
        this.value = this.value.bind(this)
        this.hideOrShow = this.hideOrShow.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


    }
    value(e){
        this.props.onClick(e)
    }
    hideOrShow(e){
        let form = document.getElementById("FormExperience")
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
            <div className="ExperienceInputForm">
                <div>
                    <h2>Experience</h2>
                </div>
                <div>
                    <button type="submit" onClick={this.hideOrShow}>Add</button>
                </div>
                <form action="" id="FormExperience" onSubmit={this.onSubmit}>
                    <div>
                        <p>Company</p>
                        <input type="text" placeholder="Company Name"
                        id="ExperienceCompany" />
                    </div>
                    <div>
                        <p>From</p>
                        <input type="date" placeholder="From"
                        id="ExperienceFrom"/>
                    </div>
                    <div>
                        <p>To</p>
                        <input type="date" placeholder="To"
                        id="ExperienceTo" />
                    </div>
                    <div>
                        <p>Title</p>
                        <input type="text" placeholder="Ocupied position"
                        id="ExperiencePosicion"/>
                    </div>
                    <div className="btnCont">
                        <button type="submit">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}