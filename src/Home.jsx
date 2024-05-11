import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Projects from './Projects';
import './Home.css';
import me from './Assets/blob1.JPG'
import user from './Assets/user.png'
function Home() {

  return (
    <div className='container'>
        
   <section>
   <div style={{width:'100%',height:"700px"}} className='firstrow'>
      <div className="col6">
        <div className='main-text mt-5'>
        <p style={{fontSize:"35px"}}>Hello,</p>
        <h1>I'm <span style={{color:"rgb(255, 184, 52)"}}>Sanal</span></h1>
        <h1>
            MEARN Devoloper
        </h1>
        <p className='mt-3'>I am skilled and passionate MEARN devoloper with experience in <br />
        creating visually appearing and user-friendly websites</p>
        </div>
        <div>
        <MDBFooter className=' text-white'>
      <MDBContainer className=' pb-0'>
        <section className='mb-4 fs-3'>
          <MDBBtn outline style={{color:"white"}} floating className='m-1 ' href='https://www.google.co.in/' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline style={{color:"white"}}  floating className='m-1' href='https://www.instagram.com/?hl=en' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline style={{color:"white"}}  floating id='hbotton' className=' m-1' href='https://www.linkedin.com/in/sanal-k-424aa02a4/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline style={{color:"white"}}  floating id='hbotton' className=' m-1' href='https://github.com/SANAL17' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      
    </MDBFooter>
        </div>
        <div className='buttons mt-3'>
          <a href="#projects">
          <button className='first btn btn-primary  '>Projects</button>

          </a>
          <a href="https://drive.google.com/file/d/1XxfjI63Y3qpq4J4RzGRl2Btsh0mYO_Vj/view?usp=sharing">
          <button className='first btn btn-primary ms-3'>Resume</button>

          </a>

        </div>
      </div>
      <div className="col6">
        <div className="blob">
          <img style={{boxShadow:'3px 4px 5px 6px' }}  src={me} alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
      </div>

    </div>
   </section>
   <section>
    <div style={{width:'100%', height:"100%"}} className="container">
        <div className="secondrow">
            <div className="col-6">
                <img className='mb-3' src={user} alt="" />
            </div>
            <div className="col-7 text-center ">
              <h2 >About Me</h2>
              <p className='mt-5' >Welcome to my portfolio! I'm Sanal, a passionate and dedicated React developer with a love for crafting
                 engaging and user-friendly web experiences. With a solid foundation in front-end development and a keen
                  eye for design, I strive to bring creativity and functionality together. My journey in the world of web
                   development has equipped me with strong problem-solving skills and a commitment to delivering 
                   high-quality code. Whether it's building responsive and interactive user interfaces or collaborating 
                   on dynamic projects, I am driven by a constant desire to learn and adapt. Explore my projects to see
                    the culmination of my skills and dedication to creating seamless digital solutions.
              </p>


            </div>
        </div>
    </div>
   </section>
   <section id='projects'>
    <div className="container">
        <h2 className='mt-2 mb-4'>Latest projects</h2>
       <MDBRow style={{width:"100%", height:'100%'}}>
        <MDBCol>
                <Projects/>
        </MDBCol>
       </MDBRow>
       
    </div>
   </section>
    </div>
  )
}

export default Home