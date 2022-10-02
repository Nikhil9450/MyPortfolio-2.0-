import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact_container'>
      <div>
        <div>
        <iframe className='gmap' class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Delhi&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>

      <div className='formcontainer'>
        <form>
          <div className='inputfield'>
            {/* <label>Name</label> */}
            <input type='text' placeholder='Full Name'></input>
          </div>
          <div className='inputfield'>
            {/* <label>Email</label> */}
            <input type='email' placeholder='Email'></input>
          </div>
          <div className='inputfield'>
            {/* <label>Subject</label> */}
            <input type='text' placeholder='Subject'></input>
          </div>
          <div className='inputfield'>
            <label>Message</label>
            <textarea type='text'></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact