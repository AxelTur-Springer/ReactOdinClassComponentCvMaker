import React from "react";

export default class CvPreview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numChildren: 0,
            Institute :[]
          }
    }

    onAddChild = () => {
        this.setState(state => {
          const Institute = state.Institute.concat(
            <Child Institute ={this.props.Test} />);
          return {
            Institute
          };
        });
        console.log(this.state)
      };
    render(){
        const children = [];
  
        for (var i = 0; i < this.state.numChildren; i += 1) {
          children.push(<Child key={i} number={i} 
            Institute ={this.props.Institute[i]}/>);
            console.log(this.state)
        };
        return(
            <div>
                <div>
                    <h1>Curriculum Vitae</h1>
                </div>
                <div className="personalInfo">
                <p>Full Name: {this.props.Name}</p>
                <p>Age: {this.props.Age}</p>
                <p>Address: {this.props.Address}</p>
                <p>Email: {this.props.Email}</p>
                <p>Number: {this.props.Number}</p>
                </div>
                <div>
                <TestParent addChild={this.onAddChild} 
                Institute ={this.props.Institute}>
                        {children}
                </TestParent>
                {this.state.Institute}
                </div>
            </div>
        )
    }
}


class TestParent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Institute:this.props.Institute
        }
    }
    /*componentDidUpdate(prevProps) {
        if (this.props.Institute !== prevProps.Institute) {
            this.setState({
                Institute:this.props.Institute,
            })
        }
      }
      */
    render(){

        return(
            <div className="card calculator">
            <p><a href="#" onClick={this.props.addChild}>
            Add Another Child Component</a></p>
            <div id="children-pane">
              {this.props.children}
            </div>
          </div>
        )
    }
}

class Child extends React.Component{
    constructor(props){
        super(props);
 
   }
   render(){
       return(
           <div>
               <div>{"I am child " + this.props.Institute}</div>
           </div>
       )
   }
}

