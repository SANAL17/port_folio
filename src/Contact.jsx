import React,{useRef} from 'react'
import { MDBBtn,MDBFooter } from 'mdb-react-ui-kit';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_kro104t', 'template_jg5zekc', form.current, {
          publicKey: 'AX6IudjSAo5yHIVEq',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("Message sent successfully")
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    


  return (
    <div>
        <section id='contact'>
        <MDBFooter  className='text-center text-lg-left'>
          <div className='text-center'>
            <h2 >Contact me</h2>
            <p>Please fill out the form below to discus any work opportunities</p>
            <div className='container w-50' >
            <form ref={form} onSubmit={sendEmail}>
                
                    
                    <input required type="text" placeholder='Fullname' name="user_name"   className='form-control  m-3 '/>

                    
                    
                    <input required type="email" placeholder='Email' name="user_email"  className='form-control  m-3'/>

                 
                    
                    <textarea required placeholder='Message' className='form-control m-3' name="message"   rows="5"></textarea>      

                    <input className='btn btn-primary m-3 mx-3' type="submit" value="Send" />
           </form>
                    </div>
           
          </div>
    </MDBFooter>
        </section>
       
    </div>
  )
}

export default Contact