import React from 'react'

  import { Swiper, SwiperSlide } from 'swiper/react';

  import 'swiper/css';
  import 'swiper/css/navigation';

  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';

  import { Navigation } from 'swiper/modules';
  import './home.css';
 



function Home() {
  return (
   <>
 

    <section className='banner'>
  
  <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
       
      >
        <SwiperSlide  className="mySwiper">
      <div className='myswi'>
      <div className='leftbanner'>
      <img src='images/banner1.jpg' alt='Banner 1' />
    </div>

    <div className='rightbanner'>
      <h1>elegant black <br /> style is back</h1>
      <p>
        Sed condimentum ipsum, ultrices in aliquam ac hendrerit diam <br /> praesent.Ac dui convallis elit odio eget a commodo. Commodo eget<br /> natoque aliquam vitae pellentesque euismod suscipit id vulputate.
      </p>
      <button>Shop Collection</button>
    </div>
    


      </div>
      


        </SwiperSlide>
        <SwiperSlide>

        <div className='myswi'>
        <div className='leftbanner'>
            <img src='images/banner2.jpg' alt='Banner 2' />
          </div>

          <div className='rightbanner'>
            <h1> personal <br /> Collection <br/> summer 2023</h1>
            <p>
              Sed condimentum ipsum, ultrices in aliquam ac hendrerit diam <br /> praesent.Ac dui convallis elit odio eget a commodo. Commodo eget<br /> natoque aliquam vitae pellentesque euismod suscipit id vulputate.
            </p>
            <button>Shop Collection</button>
          </div>
          

</div>
        </SwiperSlide>
        <SwiperSlide>    <div className='myswi'>
        <div className='leftbanner'>
            <img src='images/banner3.jpg' alt='Banner 2' />
          </div>

          <div className='rightbanner'>
            <h1> Evergreen <br /> classics <br/> Collection <br/> 2023</h1>
            <p>
              Sed condimentum ipsum, ultrices in aliquam ac hendrerit diam <br /> praesent.Ac dui convallis elit odio eget a commodo. Commodo eget<br /> natoque aliquam vitae pellentesque euismod suscipit id vulputate.
            </p>
            <button>Shop Collection</button>
          </div>
          

</div></SwiperSlide>
       
      </Swiper>

   
   




     
  


   </section>
     

   <div className='line'></div>




<section className='bookap'>
<div className='icon'>
  <div className='gift'>

<i class="fa fa-calendar-o" aria-hidden="true"></i>
<h1>Book An Appointment</h1>
<p>At imperdiet dui accumsan sit amet <br/>  nulla risus est ultricies quis.</p>
    
  </div>
</div>


<div className='icon'>
<i class="fa fa-shopping-bag"></i>
<h1>Pick Up In Store</h1>
<p>At imperdiet dui accumsan sit amet <br/>  nulla risus est ultricies quis.</p>
</div>


<div className='icon'>
  <div className='gift'>
<i class="fa fa-gift"></i>
    
  
<h1>Special Packaging</h1>
<p>At imperdiet dui accumsan sit amet <br/>  nulla risus est ultricies quis.</p>
</div>
</div>


<div className='icon'>
<i class="fa fa-refresh"></i>
<h1>Free Global Returns</h1>
<p>At imperdiet dui accumsan sit amet <br/>  nulla risus est ultricies quis.</p>
</div>


</section>


<section className='twobanner'> 
<div  className='cate'>
  <div  className='acc'>
  <img src='images/3.jpg'/>
  <button> Shop it now </button>
<h1>For Men</h1>
  </div>
</div>

<div  className='cate'>
  <div  className='acc'>
  <img src='images/1.jpg'/>
  <button> Shop it now </button>
<h1>For Women</h1>
  </div>
</div>


<div  className='cate'>
  <div  className='acc'>
  <img src='images/2.jpg'/>
  <button> Shop it now </button>
<h1>FOR ACCESSORIES</h1>
  </div>
</div>

</section>

<div className='besti'>
<button> Best Seller </button>
<button className='coll'> New Arrivals </button>
<button> Best Reviewed </button>
</div>


<section className='sell'>







<div className='sel'>
<div className='cards'>
  
  <div className='colume'> 
  <img src='images/4.jpg'/>
  <h1> baggy shirt</h1>
  <div>&nbsp;</div>
  </div>
</div>
</div>






<div className='sel'>
<div className='cards'>
  <div className='colume'> 
  <img src='images/11.jpg'/>
  <h1> cotton off-white shirt</h1>
  <div>&nbsp;</div>
  </div>
</div>
</div>

<div className='sel'>
<div className='cards'>
  <div className='colume'> 
  <img src='images/10.jpg'/>
  <h1>dark florish onepiece</h1>
  <div>&nbsp;</div>
  </div>
</div>
</div>



<div className='sel'>
<div className='cards'>
  <div className='colume'> 
  <img src='images/9.jpg'/>
  <h1>cotton off-white shirt</h1>
  <div>&nbsp;</div>
  </div>
</div>
</div>




<div className='sel'>
<div className='cards'>
  <div className='colume'> 
  <img src='images/6.jpg'/>
  <h1> cotton off-white shirt</h1>
  <div>&nbsp;</div>
  </div>

</div>
</div>
<div className='sel'>
<div className='cards'>
  <div className='colume'> 
  <img src='images/8.jpg'/>
  <h1>hand crop sweater</h1>
<div>&nbsp;</div>
  </div>
</div>
</div>







<div className='sel'>
<div className='cards'>
  <div className='colume'> 
  <img src='images/7.jpg'/>
  <h1> cotton off-white shirt</h1>
  <div>&nbsp;</div>

  </div>

</div>
</div>
<div className='sel'>
<div className='cards'>
  <div className='colume'> 
  <img src='images/5.jpg'/>
  <h1> cotton off-white shirt</h1>
<div>&nbsp;</div>

  </div>

</div>
</div>
</section>




<div className='comtitle'> we love good complimeny </div>
<section className='com'>

<div className='comp'>
<p>“Best fitted white denim shirt more white<br/> denim than expected flexible crazy soft.”</p>
<a>Denim crae</a>
</div>

<div className='comp'>
<p className='comps'>“More than expected crazy soft, flexible <br/>and  best fitted white simple denim shirt.”</p>
<a>casual way</a>
</div>

<div className='comp'>
<p>“Best fitted white denim shirt more than <br/> expected crazy soft, flexible.”</p>
<a>uptop</a>
</div>


</section>

















<div className='blogt'>
<h1 className='blogtitle'> read blog posts</h1>
<a>View All </a>

</div>

<section className='blog'>




<div className='post'>


  <img src='images/12.jpg'/>
  <h2>fashion/ jan 11, 2024 </h2>
<h1> HOW TO LOOK OUTSTANDING IN <br/>PASTEL</h1>
<p>Dignissim lacus,turpis ut suspendisse vel <br/> tellus.Turpis purus,gravida orci,fringilla...</p>
  </div>









<div className='post'>
  <div className='imgblog'>
  <img src='images/13.jpg'/>
  <h2>fashion/ jan 11, 2024 </h2>
<h1>TOP 10 FASHION TREND FOR <br/>SUMMER</h1>
<p> Turpis purus, gravida orci, fringilla dignissim lacus,<br/> turpis ut suspendisse vel tellus.</p>
</div>



  </div>





<div className='post'>
<img src='images/14.jpg'/>
<h2>fashion/ jan 11, 2024 </h2>
<h1> CRAZY FASHION WITH UNIQUE <br/> MOMENT</h1>
<p> Turpis purus, gravida orci, fringilla dignissim lacus,<br/> turpis ut suspendisse vel tellus.</p>
</div>



</section>



















   </>
  )
}

export default Home