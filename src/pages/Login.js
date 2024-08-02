import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo/logo.png'

export default function Login(){
    const Navigate = useNavigate()
    return <div className='container d-flex justify-content-center'>
        <div className='row'>
            <div className='col'>
                <img src={logo} alt='Vemalls'/>
                <p className='text-center text-primary fw-bold'>Log into Vemalls</p>
                <form>
                    <div className='form-data'>
                        <input type='text'placeholder='Enter your Mobile Number'className='form-control '></input><br></br>
                        <input type='text'placeholder='Enter your Password'className='form-control '></input>
                      
                    </div>
                    <div className='d-flex justify-content-center m-3'>
                    <button className='btn btn-primary m-2 mr-4'>Login</button>
                    <button onClick={()=>{Navigate('/')}} className='btn btn-outline-primary m-2 mr-4'>Cancel</button>
                    </div>
                   
                </form>
                <div className='d-flex justify-content-center m-3'>
                    <p>Not have an Account <span className='text-primary'><Link to='/register'>Register Here </Link></span></p>
                </div>
            </div>
        </div>
    </div>

}