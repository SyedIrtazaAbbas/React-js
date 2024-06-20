import React from 'react'
import './washlish.css'

function Washlist() {
  return (
   <>
   <h1 className='wa'>Wishlist</h1>
   <section className='wish'>
 <table className='wi'>
<thead>
    <tr>
        <th>product</th>
        <th><div className='os'>Unit Price</div></th>
        <th>Stock Status</th>
    </tr>
</thead>
<tbody className='wis'>
    <tr>
        <td>
            <div className='ws'>
            <img src="images/23.jpg"/>
           <h3>Handmade Crop Sweater</h3>
            </div>        
        </td>
        <td>$54.99</td>
        <td> in Stock</td>
        <td><button><a>add to card</a></button>  </td>
        <td>  <i className="fa fa-trash-o" aria-hidden="true"></i>   </td>
    </tr>

    <tr>
        <td>
            <div className='ws'>
            <img src="images/25.jpg"/>
           <h3>dark florish onepiece</h3>
            </div>        
        </td>
        <td>$54.99</td>
        <td> in Stock</td>
        <td><button><a>add to card</a></button>  </td>
        <td>  <i className="fa fa-trash-o" aria-hidden="true"></i>   </td>

    </tr>

    <tr>
        
        <td>
            <div className='ws'>
            <img src="images/27.jpg"/>
           <h3>baggy shirt</h3>
            </div>        
        </td>
        <td>$54.99</td>
    <td> in Stock</td>
    <td> 
        <button><a>add to cart</a></button> 
    </td>
    <td>  
        <i className="fa fa-trash-o" aria-hidden="true"></i>   
    </td>
    </tr>


</tbody>
 </table>

   </section>
   
   </>
  )
}

export default Washlist