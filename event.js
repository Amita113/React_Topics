import React from 'react';


 function shoot(){
console.log("The button is clicked")
 }

function  Event(){
return(
<button onClick={shoot}> Click me </button>
)
}
export default Event;
