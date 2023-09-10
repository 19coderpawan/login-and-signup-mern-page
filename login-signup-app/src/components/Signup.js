import React , {useState} from 'react'
import Navigation from './Navbar'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBTextArea
}
  from 'mdb-react-ui-kit';
  import {Link,useNavigate} from 'react-router-dom';
const Signup = () => {
  const [credentials,setcredentials]=useState({name:"",email:"",password:"",age:""});
  const navigate=useNavigate();
  const handle= async(event)=>{
    event.preventDefault();
    const Response =await fetch('http://localhost:9000/api/createUser',{
        'method':'POST',
        headers: {
          'Content-Type': 'application/json'
      },
        body:JSON.stringify({
          name:credentials.name,
          email:credentials.email,
          password:credentials.password,
          age:credentials.age
        })
    });
    const json=await Response.json();
    if(!json.success){
      alert("enter valid credentials");
    }
    else {
      
        alert('You are registered');
        setcredentials({ name: '', email: '', password: '', age: '' });
        navigate('/login');
      // Delay for 1 second (1000 milliseconds)
  }
}

  const changeoccur=(e)=>{
     setcredentials({...credentials,[e.target.name]:e.target.value});
  }
  return (
    <>
      <Navigation />

      <MDBContainer fluid style={{ fontWeight: 'bold' }}>
        <form onSubmit={handle}>

          <MDBCard className='m-5' style={{ borderRadius: '55px' }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='  d-flex flex-column align-items-center'>

                  <p classNAme="text-center h1  mb-5 mx-1 mx-md-4 mt-4" style={{ fontWeight: 'bolder', fontSize: '30px', color: 'red' }}>SignUp</p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg' />
                    <MDBInput label='Your Name' name='name' id='form1' type='text' value={credentials.name} className='w-100' onChange={changeoccur}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg' />
                    <MDBInput label='Your Email' name='email' id='form2' type='email' value={credentials.email} onChange={changeoccur}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg' />
                    <MDBInput label='Password' id='form3' name='password' type='password' value={credentials.password} onChange={changeoccur}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg' />
                    <MDBInput label='Repeat your password' id='form4' type='password' />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg' />
                    <MDBInput label='enter your age' id='form4' name="age" type='Number' value={credentials.age} onChange={changeoccur} />
                  </div>
                  <div className='mb-4'>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                  </div>

                  <button className=' register-btn' type='submit' size='lg' >Register</button>
                  <br />
                  <p>Already an user?<Link className="btn bg-white text-success mx-1" to="/login">
                    Login
                  </Link></p>

                </MDBCol>

                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                </MDBCol>

              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </form>
      </MDBContainer>
    </>
  )
}

export default Signup
