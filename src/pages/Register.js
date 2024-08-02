import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo/logo.png'
export default function Register(){
    const Navigate = useNavigate()
    return <div className='container d-flex justify-content-center'>
    <div className='row'>
        <div className='col'>
            <img src={logo} alt='Vemalls'/>
            <p className='text-center text-primary fw-bold'>Sign Up into Vemalls</p>
            <form>
                <div className='form-data'>
                <input type='text'placeholder='Enter your Mobile FullName'className='form-control '></input><br></br>
                    <input type='text'placeholder='Enter your Mobile Number'className='form-control '></input><br></br>
                    <input type='text'placeholder='Enter your Password'className='form-control '></input><br></br>
                    <input type='text'placeholder='Confirm Password'className='form-control '></input><br></br>
                  
                </div>
                <div className='d-flex justify-content-center m-3'>
                <button onClick={()=>{Navigate('/login')}} className='btn btn-primary m-2 mr-4'>Register</button>
                <button onClick={()=>{Navigate('/')}} className='btn btn-outline-primary m-2 mr-4'>Cancel</button>
                </div>
               
            </form>
            <div className='d-flex justify-content-center m-3'>
                <p>Already have an Account <span className='text-primary'><Link to='/login'>Login to Continue </Link></span></p>
            </div>
        </div>
    </div>
</div>
}






