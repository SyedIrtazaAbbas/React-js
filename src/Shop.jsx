import React from 'react'
import "./shop.css"
import { Link } from 'react-router-dom'
function Shop() {
  return (
  <>
    <h1 className='tu'>Shop Clothes</h1>

   

    <section className='cell'>
<div className='card' > 
<Link to="../singlepage"> 
<img  src='images/4.jpg'  />


<h4 className='name' style={{color: 'black' }}>  baggy shirt    </h4>

<div className='ch' style={{color: 'black' }}>
  
<h3> $70.00 </h3>

  <h2> Add to Card </h2>
</div>
</Link>
</div>

<div className='card'>
<img  src='images/5.jpg' />


<h4 className='name'>hand crop sweater</h4>

<div className='ch'>
  
<h3> $55.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>

<div className='card'>
<img  src='images/6.jpg' />


<h4 className='name'> cotton off-white shirt</h4>

<div className='ch'>
  
<h3> $100</h3>

  <h2> Add to Card </h2>
</div>

</div>

<div className='card'>
<img  src='images/7.jpg' />

<h4 className='name'> baggy shirt</h4>


<div className='ch'>
  
<h3> $50.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>
<div className='card'>
<img  src='images/8.jpg' />


<h4 className='name'> hand crop sweater</h4>

<div className='ch'>
  
<h3> $63.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>





<div className='card'>
<img  src='images/9.jpg' />


<h4 className='name'> hand crop sweater</h4>

<div className='ch'>
  
<h3> $10.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>


<div className='card'>
<img  src='images/10.jpg' />


<h4 className='name'>dark florish onepiece</h4>

<div className='ch'>
  
<h3> $25.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>

<div className='card'>
<img  src='images/11.jpg' />


<h4 className='name'> cotton off-white shirt</h4>

<div className='ch'>
  
<h3> $45.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>
<div className='card'>
<img  src='images/23.jpg' />


<h4 className='name'>cotton off-white shirt</h4>

<div className='ch'>
  
<h3> $52.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>

<div className='card'>
<img  src='images/26.jpg' />


<h4 className='name'>dark florish onepiece</h4>

<div className='ch'>
  
<h3> $15.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>


<div className='card'>
<img  src='images/22.jpg' />


<h4 className='name'> dark florish onepiece</h4>

<div className='ch'>
  
<h3> $85.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>
<div className='card'>
<img  src='images/25.jpg' />


<h4 className='name'> baggy shirt</h4>

<div className='ch'>
  
<h3> $95.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>
<div className='card'>
<img  src='images/27.jpg' />


<h4 className='name'> Crop sweater</h4>

<div className='ch'>
  
<h3> $12.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>


<div className='card'>
<img  src='images/28.jpg' />


<h4 className='name'> baggy shirt</h4>

<div className='ch'>
  
<h3> $90.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>

<div className='card'>
<img  src='images/24.jpg' />


<h4 className='name'>cotton off-white shirt</h4>

<div className='ch'>
  
<h3> $5.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>
  </section>







 <section className='nu'>
  <div className='number'>
    <Link> 
    
    
    
    
    
 <a>1 </a>
    
    
    
     </Link>
 <a>2 </a>
 <a>3 </a>
 <a>4 </a>
 <a>5 </a>

  </div>
  
  </section> 
  </>
  )
}

export default Shop