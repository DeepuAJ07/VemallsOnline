import anam from '../assets/shopsnear/anam-main.png'
import skom from '../assets/shopsnear/oil mills web index.png'
import jeyom from '../assets/shopsnear/thripthi index page.png'
import nsk from '../assets/shopsnear/nsk fruits index page.png'
import jht from '../assets/shopsnear/jht index.png'
import manz from '../assets/shopsnear/manz dream home index page.png'
import power from '../assets/shopsnear/power tech index page.png'
import vemalls from '../assets/shopsnear/VE STORE WEB INDEX.png'
import lalista from '../assets/shopsnear/lalista index page.png'
import pets from '../assets/shopsnear/petz care& more index.png'
import vegorganic from '../assets/shopsnear/ve organic index page.png'
import aquriuum from '../assets/shopsnear/aquarium & pets web index.png'
import cycle from '../assets/shopsnear/bicycle index.png'
import beauty from '../assets/shopsnear/beauty-index.png'
import poultry from '../assets/shopsnear/poultry index.png'
import home from '../assets/shopsnear/home applinces web index.png'
import pharmacy from '../assets/shopsnear/pharmacy index1.png'
import watch from '../assets/shopsnear/watch index.png'
import paints from '../assets/shopsnear/paint index.png'
import mobiles from '../assets/shopsnear/mobile index.png'
import gift from '../assets/shopsnear/gift&fancy index.png'
import cakes from '../assets/shopsnear/cake index.png'
import footwear from '../assets/shopsnear/footwear&bag index.png'
import sanitary from '../assets/shopsnear/home sanitary ware index.png'
import books from '../assets/shopsnear/book &stationary  index.png'
import fish from '../assets/shopsnear/Fish stall index.png'
import homeSanitary from '../assets/shopsnear/home sanitary ware index.png'
import marbles from '../assets/shopsnear/marbles&tiles  index.png'
import interlock from '../assets/shopsnear/interlock&hollow  index.png'
import natural from '../assets/shopsnear/natural stone  index.png'
import computerShop from '../assets/shopsnear/computershop   index.png'
import plumbing from '../assets/shopsnear/plumbing index.png'
import metal from '../assets/shopsnear/metalshop   index.png'
import superMarket from '../assets/shopsnear/supermarket index.png'
import vessels from '../assets/shopsnear/vessel shop index.png'
import bakery from '../assets/shopsnear/bakery web index.png'



export default function Shop(){

    const shopsNear = [
        {id:1,name:'NSK ANAMTHARA RESORT',desc:'Get upto 50% Off',image:anam},
        {id:2,name:'SREE KRISHNA OIL MILLS',desc:'Get upto 50% Off',image:skom},
        {id:3,name:'JEYEM TRIPTHI',desc:'Get upto 50% Off',image:jeyom},
        {id:4,name:'NSK FRUITS',desc:'Get upto 50% Off',image:jeyom} , 
         {id:5,name:'JHT ELECTRONICS',desc:'Get upto 50% Off',image:jht},
         {id:6,name:'MANZ DREAM HOME',desc:'Get upto 50% Off',image:manz} ,
         {id:7,name:'POWER TECH',desc:'Get upto 50% Off',image:power} ,
         {id:8,name:'VE MALLS STORE',desc:'Get upto 50% Off',image:vemalls} ,
         {id:9,name:'LALISTA',desc:'Get upto 50% Off',image:lalista} ,
         {id:10,name:'PETZ CARE & MORE',desc:'Get upto 50% Off',image:pets} ,
         {id:11,name:'VEGETABLES & MORE',desc:'Get upto 50% Off',image:vegorganic} ,
         {id:12,name:'VE FRESH FISH & MEAT',desc:'Get upto 50% Off',image:fish} ,
         {id:13,name:'AQUARIUM & PET SHOP',desc:'Get upto 50% Off',image:aquriuum} ,
         {id:14,name:'BICYCLE SHOP',desc:'Get upto 50% Off',image:cycle} ,
         {id:15,name:'BEAUTY PARLOR & SALOON',desc:'Get upto 50% Off',image:beauty} ,
         {id:16,name:'POULTRY FARM',desc:'Get upto 50% Off',image:poultry} ,
         {id:17,name:'HOME APPLINCES',desc:'Get upto 50% Off',image:home} ,
         {id:18,name:'PHARMACY',desc:'Get upto 50% Off',image:pharmacy} ,
         {id:19,name:'WATCH & TIME SHOP',desc:'Get upto 50% Off',image:watch} ,
         {id:20,name:'PAINTS',desc:'Get upto 50% Off',image:paints} ,
         {id:21,name:'MOBILES SHOP',desc:'Get upto 50% Off',image:mobiles} ,
         {id:22,name:'GIFT & FANCY SHOP',desc:'Get upto 50% Off',image:gift} ,
         {id:23,name:'CAKE SHOP',desc:'Get upto 50% Off',image:cakes},
         {id:24,name:'FOOTWEAR & BAG SHOP',desc:'Get upto 50% Off',image:footwear} , 
         {id:25,name:'SANITARY SHOP',desc:'Get upto 50% Off',image:sanitary} ,
         {id:26,name:'BOOKSHOP & STATIONARY',desc:'Get upto 50% Off',image:books} ,
         {id:27,name:'FISH STALL',desc:'Get upto 50% Off',image:fish} ,
         {id:28,name:'HOME SANITARY',desc:'Get upto 50% Off',image:homeSanitary} ,
         {id:29,name:'MARBLES & TILES',desc:'Get upto 50% Off',image:marbles} ,
         {id:30,name:'INTERLOCK & HOLLOW',desc:'Get upto 50% Off',image:interlock} ,
         {id:31,name:'NATURAL STONE',desc:'Get upto 50% Off',image:natural} ,
         {id:32,name:'COMPUTER SHOP',desc:'Get upto 50% Off',image:computerShop} ,
         {id:33,name:'PLUMBING',desc:'Get upto 50% Off',image:plumbing} ,
         {id:34,name:'METAL SHOP',desc:'Get upto 50% Off',image:metal} ,
         {id:35,name:'SUPER MARKET/BAZAR',desc:'Get upto 50% Off',image:superMarket} ,
         {id:36,name:'VESSEL SHOP',desc:'Get upto 50% Off',image:vessels} ,
         {id:37,name:'BAKERY & DRYFRUITS',desc:'Get upto 50% Off',image:bakery} 



    ]

    return <div class="container text-center mx-5 mt-4">
    <div class="row">
      <h4>Shops Near You</h4>
      {shopsNear.map((items)=>{ 
return( <div class="col" key={items.id}>
     <div class="card" style={{width: "18rem"}}>
<img src={items.image} className="card-img-top" alt={items.name}/>
<div className="card-body">
  <p className="card-text" style={{color:"#565360",fontWeight:'bold'}}>{items.name}</p>
  <p className='card-text'style={{color:'#908e9b'}}>{items.desc}</p>
</div>
</div>
</div>
       ) })}

    </div>
     
      </div>
        
}