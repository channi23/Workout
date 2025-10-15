import React,{Component} from 'react';

class LifeCycleDemo extends Component{
  constructor(){
    super();
    this.state ={count:0};
    console.log("constructor component is intialized");
  }

  componentDidMount(){
    console.log("componentDidMount: component is mounted");
  }
  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate: component is udpated");
    console.log("prevState:",prevState,",Current State:",this.state);

  }
  componentWillUnmount(){
    console.log("ComponentWillUnmount: component is unmounted");
  }
  increment = ()=>{
    this.setState({count: this.state.count+1});
  };
  render(){
    console.log("Render component is rendering");
    return(
      <div style={{textAlign:'center'}}>
        <h1>Component Life Cycle Demo</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment Count</button>
        </div>
    );
  }
}
export default LifeCycleDemo;