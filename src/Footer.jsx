// import React from 'react'
import { MDBBtn,MDBFooter } from 'mdb-react-ui-kit';
import React, { useRef } from 'react';
import Contact from './Contact';

function Footer() {
 
  return (
    <div>
        <section>
          <Contact/>
          
          <MDBFooter bgColor='primary' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'black'}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='#'>
          myportfolio.com
        </a>
      </div>
    </MDBFooter>
        </section>
       
    </div>
  )
}

export default Footer