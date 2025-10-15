import React from 'react';

export default function App(){
   const date = new Date();
   return(
    <div>
      <h1>Current Date and Time</h1>
      <p>{date.toLocaleString()}</p>
    </div>
   );
}