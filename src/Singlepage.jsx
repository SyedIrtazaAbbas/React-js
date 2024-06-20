import React, { useState,useRef } from 'react';
import './singlepage.css'

function Singlepage() {
  const[singleproduct,setsingle] = useState(1);
  const singleCardRef = useRef(null);
  const [scroll, setScrollPosition] = useState(0);
    const [imgSrc, setImgSrc] = useState('images/38.jpg');
 
   
    const Increment  = () => {
        setsingle(prevq => prevq + 1);
    };

    const Decrement = () => {
        if (singleproduct > 1) {
            setsingle(prevq => prevq - 1);
        }
    };
   
   
    function changeImage(newSrc) {
        setImgSrc(newSrc);
      }


      const handleScroll = (scrollOffset) => {
        const newScrollPosition = scroll + scrollOffset;

        singleCardRef.current.scrollLeft = newScrollPosition;

        setScrollPosition(newScrollPosition);
      };



  return (
<>
<section className='single'>
<div className='leftsingle'>
    <div className='scollside'>
    <div className='sid'>
    <img src='images/36.jpg' onClick={() => changeImage('images/36.jpg')} />
          <img src='images/35.jpg' onClick={() => changeImage('images/35.jpg')} />
          <img src='images/40.jpg' onClick={() => changeImage('images/40.jpg')} />
          <img src='images/37.jpg' onClick={() => changeImage('images/37.jpg')} />
    </div>
    </div>
  
<div className='mainimg'>
<img src={imgSrc} className='side'/>
</div>


</div>

<div className='rightsingle'>
<h1>handmade crop sweater</h1>

<div>
<h2>$54.00</h2>
<p> Tristique ullamcorper nunc egestas non. Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor. Orci, cras lectus mauris, cras egestas quam venenatis neque. </p>
</div>



<h3>colour:green </h3>

<div class="color-selector">
  <input type="radio"/>
  <label  class="color red"></label>
  
  <input type="radio"  />
  <label  class="color blue"></label>
  
  <input type="radio"  />
  <label  class="color green"></label>
</div>


<div className='size'>
<h3>Size:</h3>
<button> 


<a>s</a>
</button>
<button> 


<a>m</a>
</button>
<button> 


<a>l</a>
</button>
<h3>3 in stock</h3>

<div className='sine'>
<div className='sincarts'>
      <button onClick={Decrement}><a>-</a></button>
      <span>{singleproduct}</span>
      <button onClick={Increment}><a>+</a></button>
  </div>

<div className='sinebutton'>
<button><a>add to card </a> </button>

</div>
</div>


<div className='sim'>
<h3>Category:</h3>
<div className='sime'>
<h3>Women</h3>
<h3>yerllow </h3>
<h3>dresses</h3>
</div>





</div>


<div className='sim'>
<h3>Share:</h3>
<div className='simicons'>
  <h3>   <a class="fa fa-facebook">    </a>            </h3>  
  <h3>
  <a class="fa fa-youtube-play"></a>

  </h3>
  <h3>   
  <a class="fa fa-twitter"></a>

  </h3>
  <h3>
  <a class="fa fa-instagram"></a>

  </h3>
    </div>
  



</div>



</div>
</div>
</section>

<section>
 


</section>
<section className='sinlgemaincard'>
  <h1 className='singlefth1'>
    you may like this
  </h1>
<section className='singlecell'>
<div className='singlebutleft'>
  <button onClick={() => handleScroll(-200)}><a>   &lt;   </a></button>

  </div>

  <div ref={singleCardRef} className='singlecard'>
  <div className='card'>
<img  src='images/4.jpg' />


<h4 className='name'> baggy shirt</h4>

<div className='ch'>
  
<h3> $70.00 </h3>

  <h2> Add to Card </h2>
</div>

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

<div className='card'>
<img  src='images/24.jpg' />


<h4 className='name'>cotton off-white shirt</h4>

<div className='ch'>
  
<h3> $5.00 </h3>

  <h2> Add to Card </h2>
</div>

</div>

  </div>
  <div className='singlebutright'>
  <button onClick={() => handleScroll(200)}> <a>   &gt;   </a> </button>

  </div>

  </section>
</section>





</>
  )
}

export default Singlepage
