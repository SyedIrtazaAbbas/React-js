import React from 'react'
import './checkout.css'

function Checkout() {
  return (
<>
<h1 className='cout'> Checkout</h1>
<section className='biiling'> 
<div className='rightbill'>
  <h2>billing details</h2>
  <div className='billinput'>
    <h3>fist name* </h3>
 <input />
 
 <h3>Last name* </h3>
 <input /> 

 <h3>company name(optional)* </h3>
 <input /> 
 

<div className='dropdown'>
  <h3> country/region*</h3>
<button className='drobtn'>Pakistan</button>
<div className='dropdowncontent'>
 <a>Lahore</a>
 <a>Karachi</a>
 <a>Islamabad</a>

</div>
</div> 
<h3>stree address*</h3>
<input  placeholder='House number and street name'/> 
<input placeholder='Appartments,suite,etc.'/> 
<h3>town / city* </h3>
 <input /> 

 <div className='dropdown'>
  <h3>state*</h3>
<button className='drobtn'>Pakistan</button>
<div className='dropdowncontent'>
 <a>Lahore</a>
 <a>Karachi</a>
 <a>Islamabad</a>

</div>
</div>

<h3>zip code* </h3>
 <input /> 
 <h3>phone* </h3>
 <input /> 
 <h3>email address* </h3>
 <input /> 

  </div>

  
</div>


<div className='leftbill'>
<h2>Additional Information</h2>
<div className='billinput'>
    <h3>order note(Optional)* </h3>
 <input type='text' />
 </div>
 <div className='billdetils'>
                        <h1>Cart Total</h1>
                        <div className='billde'>
                            <div className='bills'>
                                <h3>subtotal</h3>
                                <h4>$2,370.00</h4>
                            </div>

                            <div className='bills'>
                                <h3>total</h3>
                                <h4 className='ras'>$2,370.00</h4>
                            </div>
                        </div>
                        </div>
<div className='billpay'>


<div className='payments'>

                        <input type='radio'/> 

                        <h3> direct bant transfeer</h3>
                        
  
</div>
<p>Make your payment directly into our bank account. Please use your Order ID. Your <br/>order will shipped after funds have cleared in our account.</p>



<div className='payments'>
                        <input type="radio"/> 

                        <h3> check payments</h3>
                        
  
</div>


<p>Please send a check to Store Name, Store Street, Store Town, Store State / County,<br/> Store Postcode</p>



<div className='payments'>
                        <input type='radio'/> 

                        <h3> cash on delivery</h3>
                        
  
</div>
<p>Pay with cash upon delivery.</p>  



<div className='payments'>
                        <input type='radio'/> 

                        <h3>paypal</h3>
                        
  
</div>
<p>Make your payment directly into our bank account. Please use your Order ID. Your <br/>order will shipped after funds have cleared in our account.</p>  

</div>
            
<div className='billbut'>
  <button><a> place an order </a></button>
</div>

</div>
<div>


</div>


</section>

</>  
)
}

export default Checkout