import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios, { AxiosHeaders } from 'axios';
import { ListUserApi } from '../../Api/Users';
import { Business } from '../business/Business';
import { DetailBusiness, ListBusiness } from '../../Api/Business';

const Login = (props) =>{

    let data = {
        email: "admin@sdc.udn.vn",
        password: "123123123"
        };
    const btnLogin = () =>{
       axios.post('https://photo.azurecloud.vn/api/v1/login', 
       data).then(result =>{
        if(result.status == 200){
                let data = result.data.data;
                console.log(data);
                localStorage.setItem('token', data.access_token);
                window.location.reload(false);
        }else{
            console.log('Sai');
        }
       
       })

    }
    const btnShow = () =>{
        let token = localStorage.getItem('token');
        console.log(token);
    }
    const btnGetUser = ()=>{
        DetailBusiness(506).then(data=>{
            console.log(data);
        })
    }
const btnLogout = () =>{
    localStorage.removeItem('token');
    window.location.reload(false);
}
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">
    
          <MDBRow>
    
            <MDBCol col='10' md='6'>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
            </MDBCol>
    
            <MDBCol col='4' md='6'>
    
              <div className="d-flex flex-row align-items-center justify-content-center">
    
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
    
                <MDBBtn floating size='md' tag='a' className='me-2'>
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>
    
                <MDBBtn floating size='md' tag='a'  className='me-2'>
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>
    
                <MDBBtn floating size='md' tag='a'  className='me-2'>
                  <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>
    
              </div>
    
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
    
              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
    
              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>
    
              <div className='text-center text-md-start mt-4 pt-2'>
                <MDBBtn onClick={btnLogin} className="mb-0 px-5" size='lg'>Login</MDBBtn>
                <br/>
                <MDBBtn onClick={btnShow} className="mb-0 px-5" size='lg'>Show Token</MDBBtn>
                <br/>
                <MDBBtn onClick={btnGetUser} className="mb-0 px-5" size='lg'>Lay nguoi dung</MDBBtn>
                <p></p>
                <MDBBtn onClick={btnLogout} className="mb-0 px-5" size='lg'>Lay nguoi dung</MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
              </div>
    
            </MDBCol>
    
          </MDBRow>
    
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    
            <div className="text-white mb-3 mb-md-0">
              Copyright © 2020. All rights reserved.
            </div>
    
            <div>
    
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                <MDBIcon fab icon='facebook-f' size="md"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                <MDBIcon fab icon='twitter' size="md"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                <MDBIcon fab icon='google' size="md"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                <MDBIcon fab icon='linkedin-in' size="md"/>
              </MDBBtn>
    
            </div>
    
          </div>
    
        </MDBContainer>
      );
}

  

export default Login;