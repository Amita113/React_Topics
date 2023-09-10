import training from './trainer.avif'
import './about.css'
function About() {
    return (
      <>
      <div className="parent1">

      <img src={training} alt='trainingDev'/>

       <p>This is Training and development department MERN & MEAN</p>
      
      </div>
      <div className="parent1">

      <img src={training} alt='trainingDev'/>

       <p>Python , Datascience</p>
      
      </div>
      <div className="parent1">

      <img src={training} alt='trainingDev'/>

       <p>Networking , Salesforce</p>
      
      </div>
      <div className="parent1">

      <img src={training} alt='trainingDev'/>

       <p>Testing , Mannual, Automation</p>
      
      </div>
      </>
    );
  }
  export default About;