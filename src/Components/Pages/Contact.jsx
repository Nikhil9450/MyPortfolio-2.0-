import React from 'react';
import "./Contact.css";
import contactme from  '../../asset/contact1.svg';

const Contact = () => {
  return (
    <div className='contact'>
    <div className='contact_row'>
      <div className='row_item item1'>
      <img className='contactme' src={contactme} alt="svg" />
      </div>
      <div className='formcontainer row_item item2'>
        <form>
          <div className='inputfield'>
            {/* <label>Name</label> */}
            <input type='text' placeholder='Full Name'></input>
          </div>
          <div className='inputfield'>
            {/* <label>Email</label> */}
            <input type='email' placeholder='Email'></input>
          </div>
          <div className='inputfield' >
            {/* <label>Subject</label> */}
            <input type='text' placeholder='Subject'></input>
          </div>
          <div className='inputfield message' >
            {/* <label>Message</label> */}
            <textarea type='text' placeholder='Message'></textarea>
          </div>
          <div className='btncontainer'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Contact