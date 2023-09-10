import React ,{useState} from 'react'
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
const Login = () => {
  const[logincredentials,setlogincredentials]=useState({email:"",password:""});
  const navigate=useNavigate();
const handlelogin=async(event)=>{
  event.preventDefault();
  const response= await fetch('http://localhost:9000/api/createUser',{
    'method':'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      email:logincredentials.email,
      password:logincredentials.password
    })
  });
  const json=await response.json();
  if(!json.success){
    alert("check the Credentials you have entered and try again!")
  }
  else{
    alert("You have successfully logedin!")
    localStorage.setItem("jwtforloginsignupproject",json.jwt);
    console.log(localStorage.getItem("jwtforloginsignupproject"));
    setlogincredentials({email:"",password:""})
    navigate('/');
  }
}

  const changeoccur=(e)=>{
    setlogincredentials({...logincredentials,[e.target.name]:e.target.value});
  }
  return (
    <>
      <Navigation />
      <MDBContainer fluid style={{ fontWeight: 'bold' }}>
        <form onSubmit={handlelogin}>

          <MDBCard className='m-5' style={{ borderRadius: '55px' }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='  d-flex flex-column align-items-center'>

                  <p classNAme="text-center h1  mb-5 mx-1 mx-md-4 mt-4" style={{ fontWeight: 'bolder', fontSize: '30px', color: 'red' }}>Login</p>


                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg' />
                    <MDBInput label='Your Email' id='form2' type='email' name='email' value={logincredentials.email}
                    onChange={changeoccur}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg' />
                    <MDBInput label='Password' id='form3' type='password' name='password'  value={logincredentials.password}
                    onChange={changeoccur}
                    />
                  </div>

                 
                  <div className='mb-4'>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                  </div>

                  <button className=' register-btn' type='submit' size='lg'>Login</button>
                  <br />
                  <p>Register YourSelf !<Link className="btn bg-white text-success mx-1" to="/signup">
                   Signup
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

export default Login
