import React from 'react'
import './acount.css'
function Account() {
  return (
  <>
  <h1 className='loginh1'>Login</h1>
  <section className='account'>
    <div className='login'>
    <h3>Username or email address * </h3>
    <input placeholder='write your username / email address here'/>
  
  
    <div className='password'>
    <h3>Password* </h3>
    <input placeholder='Enter your password'/>
    <div>
   
</div>
<div>
    <button> <a>Login in</a> </button>
    <h3 className='h'>lost your password?</h3>
</div>
    </div>
    </div>
  </section>
  </>
  )
}

export default Account