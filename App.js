import logo from './logo.svg';
import './App.css';
import Component1 from './contextpropsdrill';
import Component11 from './contextsolution';
import Formref from './refpr';
import VideoPlayer from './videouseref';
function App() {
  return (
    <div className="App">
     {/* <h1> Here is the useContext hook</h1> */}

     <h1> Here is the useRef hook</h1>
     {/* <Component1/> 
    <Component11/> */}

<Formref/>
<VideoPlayer/>
    </div>
  );
}

export default App;
