import React from 'react'
import './contact.css'

function Contact() {
  return (
        <>
<h1 className='cont'>Contact</h1>
<section className='con'>
<div className='rightcon'>
<h1 className='conh1'> Contact Information</h1>

<div className='conimfo'>
<p>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
</div>
<div className='conimfo'>
    <h1>Head office</h1>
<p className='conpa'>730 glenstone ave 65802, springfield, us</p>

<div className='conum'>
    <h3>+123 987 321</h3>
    <h3 className='conp'>+123 123 654</h3>
    </div>
    <h4>kaira@templatesjungle.com</h4>

</div>

<div className='conimfo'>
    <h1>branch office</h1>
    <p className='conpa'>730 glenstone ave 65802, springfield, us</p>

<div className='conum'>
    <h3>+123 987 321</h3>
    <h3 className='conp'>+123 123 654</h3>
    </div>
    <h4>contact@yourcompany.com</h4>

</div>


<div className='conimfo'>
<h1>social info</h1>
<div className='conicons'>
    <a class="fa fa-facebook">    </a>
    <a class="fa fa-twitter"></a>
    <a class="fa fa-youtube-play"></a>
<a class="fa fa-instagram"></a>
    </div>
   
</div>

</div>




<div className='leftcon'>
<h1 className='conh1'> got any question?</h1>
<div className='conimfo'>
<p>Use the form below to get in touch with us..</p>
</div>
<div className='imfoform'>
<form>
    <div className='imfa'>
    <input  placeholder='write your name here'/>
    <input className='email' type='email' placeholder='write your gmail here' />
    </div>
    <div className='imfo'>
    <input placeholder='phone number'/>
    <input placeholder='write your subject here'/>
    <input placeholder='write your message here'/>
    </div>

<button><a> submit </a> </button>

</form>
</div>



</div>
</section>
<section className='basimfo'>
<div className='basim'>
<h2>USA</h2>
<p>730 Glenstone Ave 65802, Springfield, US</p>


<div className='conum'>
    <h3>+123 987 321</h3>
    <h3 className='conp'>+123 123 654</h3>
    </div>
    <h4>kaira@templatesjungle.com</h4>

</div>

<div className='basims'>
<h2>france</h2>
<p>13 Rue Montmartre 75001, Paris, France</p>


<div className='conum'>
    <h3>+123 987 321</h3>
    <h3 className='conp'>+123 123 654</h3>
    </div>
    <h4>kaira@templatesjungle.com</h4>
</div>


<div className='basim'>
<h2>office</h2>
<p>18 Chapel Brow PR25 3NE, Leyland, UK</p>


<div className='conum'>
    <h3>+123 987 321</h3>
    <h3 className='conp'>+123 123 654</h3>
    </div>
    <h4>kaira@templatesjungle.com</h4>

</div>



</section>

        </>
  )
}

export default Contact