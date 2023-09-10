import logo from './logo.svg';
import './App.css';
import One from './one';
import Greet from './classcom';
import Navmenu from './list_one';
import Update from './changecolor';
const student={
  name:"Ganesha",
  age:25,
  address:"pune"
}
let x;
function greet(){
  console.log("Good Afternoon")
}

function change(){
document.getElementById('one').innerHTML="Welcome to today's session"
}
/*
jsx tags, 
every component should start with capital letter
ervy component can render only one element
*/
//  how to display data
const menuItems = [1,2,3,4,5];
function App() {
  return (
    <div className="App">
      <One x="ITEC"/>
     <Greet/>
      <h1> This is the first lecture </h1>
      <h1> This is the first lecture </h1>
      <h1> This is the first lecture </h1>
      Om my friend  {student.name} you are here {student.address}

      <hr/>
      <Navmenu menuitems = {menuItems} />
      <hr/>
      <p id='one'> Hello </p>
      <hr/>
      <p id='two'> We are learning basics of React components</p>
      <button onClick={greet}> Click me </button>
      <button onClick={change}> Click to change </button>
      <button onClick={<Update />}> Click to change color </button>
      {/* <Update/> */}
    </div>
  );
}
export default App;
