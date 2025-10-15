import React,{useEffect} from 'react';

function App(){
  function showDateTime(){
    alert("Current Date and Time: "+new Date().toLocaleString());
  }
  const sayGoodBye =()=>{
    alert("Good Bye!");
  }

  useEffect(()=>{
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');

    btn1.addEventListener('click',showDateTime);
    btn2.addEventListener('click',sayGoodBye);

    return()=>{
      btn1.removeEventListener('click',showDateTime);
      btn2.removeEventListener('click',sayGoodBye);
    }
  },[]);
  return(
    <div style={{textAlign:'center'}}>
      <h1>Click Events</h1>
      <button id='btn1'>Show Date and Time</button>
      <button id ='btn2'>Say GoodBye</button>
    </div>
  );
}
export default App;