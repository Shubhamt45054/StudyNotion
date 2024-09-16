import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/Logo.svg'
import {toast} from 'react-hot-toast'
const Navbar = (props) => {

  // we using the name we sending..
  let isLogged=props.isLoggedIn;
  let setLogged=props.setIsLoggedIn;


  return (
    <div className='flex justify-evenly items-center
    w-11/12 max-w-[1200px] py-4 mx-auto h-full '>
      <Link to="/" >
        <img src={logo} alt="Logo" width={160} height={32} loading='lazy' />
      </Link>
      <nav>
        <ul className="flex gap-x-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* login singup logout dash board */}
      <div className='flex items-center gap-x-4'>
        {/* <button>
          <Link to="/login">
          LOGIN</Link>
        </button> */}


{/* controlling button wrt to isLogged */}
        { !isLogged &&
          <Link to="/login">
            <button 
            className='bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600
             '>
              LOGIN
            </button>
          </Link>
        }
        { !isLogged &&
          <Link to="/signup">
            <button
            className='bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'
            >
              SIGNUP
            </button>
          </Link>
        }

        { isLogged &&
          <Link to="/">
            <button onClick={ ()=>{
              setLogged(false);
              toast.success("Logged Out");

            } }
            className='bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'
            >
              LOGOUT
            </button>
          </Link>
        }
        { isLogged &&
          <Link to="/dashboard">
            <button
            className='bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'
            >

               DASHBOARD
            </button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar;
