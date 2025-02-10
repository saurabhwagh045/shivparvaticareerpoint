import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3b97c19d-8bbb-4d0e-a300-d20f8cc3dfe7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>
            Feel free to reach out through contact form or find our contact information below.
             Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our TechVibes community.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@VibesTech.in</li>
                <li><img src={phone_icon} alt="" />+91 8080183445</li>
                <li><img src={location_icon} alt="" />sector 1, pimpri gaon, pimpri-chinchwad, Pune, 412303</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}> 
                <label >Your Name</label>
                <input type="text" name="name" placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                <label >Write Your Message Here</label>
                <textarea name="message" rows="10" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
