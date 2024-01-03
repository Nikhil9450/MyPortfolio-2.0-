import React from 'react';
import "./Contact.css";
import contactme from  '../../asset/contact1.svg';
import { useState } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // Replace these with your actual EmailJS service ID, template ID, and user ID
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    const userId = 'YOUR_EMAILJS_USER_ID';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
        // Add any success message or state update here
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Add error handling or state update for failure
      });

  return (
    <div className='contact'>
    <div className='contact_row'>
      <div className='row_item item1'>
      <img className='contactme' src={contactme} alt="svg" />
      </div>
      <div className='formcontainer row_item item2'>
        <form onSubmit={handleSubmit}>
          <div className='inputfield'>
            <input type='text'  name="name" placeholder='Full Name' value={formData.name} onChange={handleChange} required></input>
          </div>
          <div className='inputfield'>
            <input type='email' name="email" placeholder='Email'  value={formData.email} onChange={handleChange} required></input>
          </div>
          <div className='inputfield' >
            <input type='text' name='subject' placeholder='Subject' value={formData.subject} onChange={handleChange} required></input>
          </div>
          <div className='inputfield message' >
            <textarea type='text' name='message' placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <div className='btncontainer'>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Contact