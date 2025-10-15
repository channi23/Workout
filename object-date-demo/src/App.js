import React,{Component} from 'react';

class DateDisplay extends Component{
  constructor(){
    super();
    this.state={
      currentDate: new Date().toLocaleString()
    };
  }

  render(){
    return(
      <div style={{textAlign:'center'}}>
        <h1>Date Display using Class Component</h1>
        <p>CurrentDate: {this.state.currentDate}</p>
      </div>
    );
  }

}
export default DateDisplay;