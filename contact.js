import { Map } from '@googlemaps/react-wrapper'
import { Form } from 'react-router-dom';

import './contact.css'


function Contact() {

  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2595061214556!2d73.93539252436776!3d18.51717156927966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c220f131c1a1%3A0x92bfb9100ac79676!2sMARVEL%20ARCO%2C%20Amanora%20Park%20Town%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra%20411028!5e0!3m2!1sen!2sin!4v1688894301215!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className='parentform'>
        <div className='form'>
        

        </div>
      </div>
    </div>
  );
}

export default Contact;