import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

function Header() {
  return (
   <>
   
   <header>
       <h2>kaira</h2>
   <ul className='first'>
    <li><Link className='link' to="/">home     </Link>  </li>
    <li><Link to="/shop" className='link'>shop   </Link>  </li>
    <li><Link to="/about"  className='link'>about us     </Link>  </li>
    <li><Link to="/blog" className='link'>blog     </Link>  </li>
    <li><Link to="/contact" className='link'>Contact    </Link>  </li>
    <li><Link className='link' to="account">My account    </Link>  </li>
   </ul>

<div className='sec'>

<ul>
<li><Link  to="wishlish" className='linkse'> Wishlist (0)</Link></li>


<li><Link to="cart" className='linkse'>cart (0)  </Link></li>
<li><Link className='linkse' to="account"><i class="fa fa-user"></i></Link> </li>
<li><Link className='linkse'><i class="fa fa-search"></i></Link> </li>
</ul>
</div>



   </header>
   
   </>
  )
}

export default Header