import React, { useState } from 'react'
import './Home.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
 
 import data from './data'
function Projects() {
  const [noofElemnt,setNoofElemet]=useState(3)
  const slice = data.cardData.slice(0,noofElemnt)
  const loadMore= ()=>{
    setNoofElemet(noofElemnt + noofElemnt)
  }


  return (
    <div>
        <MDBRow className='mt-3 mb-3 shadow '>
            {
              slice.map((item, index)=>{
                return(
                  <MDBCol className='m-3' >
           
           <MDBCard  style={{width:'300px'}} >
      <MDBCardImage className='weather' src={item.img} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle className='text-white'>{item.title}</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div className="text-center">
        <MDBBtn className='btn-dark m-2 px-4' href={item.live}>Live</MDBBtn>
        <MDBBtn className='btn-dark m-2' href={item.github}>Github </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
            </MDBCol>
                )
              })
            }
           
            
        </MDBRow>
        
          
   <div className='text-center'>
   <button onClick={()=>loadMore()} className='btn btn-primary m-5 w-25'>
      Load More ...
    </button>
   </div>
    </div>
  )
}

export default Projects