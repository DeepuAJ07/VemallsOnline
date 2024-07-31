import acupuncture from '../assets/services/Acupuncture index.png'
import automob from '../assets/services/automobileworkshop index.png'
import cyberpits from '../assets/services/cyberbits.png'
import dryclean from '../assets/services/dry clean index.gif'
import event from '../assets/services/event index.png'
import stiching from '../assets/services/STITCHING  &  TAILORING index.png'
import flourMill from '../assets/services/flour mill index.png'
import gym from '../assets/services/gym&yoga index.png'
import opticals from '../assets/services/opticals index.png'
import photo from '../assets/services/photo index.png'
import tyre from '../assets/services/tyre shop index.png'
import vedeliverry from '../assets/services/vedelivery-main.jpg'
export default function ServicessNear(){

    const servicesNear = [{id:1,Name:'Cyber Bits', Desc:'Get upto 50 %',image:cyberpits},
        {id:2,Name:'Ve Delivery',Desc:'Get upto 50 %',image:vedeliverry},
        {id:3,Name:'Drycleaners', Desc:'Get upto 50 %',image:dryclean},
        {id:4,Name:'Photo Studio', Desc:'Get upto 50 %',image:photo},
        {id:5,Name:'Flour Mill', Desc:'Get upto 50 %',image:flourMill},
        {id:6,Name:'Opticals',Desc:'Get upto 50 %',image:opticals},
        {id:7,Name:'Stitching' ,Desc:'Get upto 50 %',image:stiching},
        {id:8,Name:'Tyre Shop' ,Desc:'Get upto 50 %',image:tyre},
        {id:9,Name:'Automobiles', Desc:'Get upto 50 %',image:automob},
        {id:10,Name:'Gym & Yoga ',Desc:'Get upto 50 %',image:gym},
        {id:11,Name:'Event Management' ,Desc:'Get upto 50 %',image:event},
        {id:12,Name:'Acupunture', Desc:'Get upto 50 %',image:acupuncture},
    ]
    return  <div class="container text-center mt-4 mx-5">
    <div class="row">
      <h4>Services Near You</h4>
      {servicesNear.map((items)=>{ 
return( <div class="col" key={items.id}>
     <div class="card" style={{width: "18rem"}}>
<img src={items.image} className="card-img-top" alt={items.Name}/>
<div className="card-body">
  <p className="card-text" style={{color:"#565360",fontWeight:"bold"}}>{items.Name}</p>
  <p className='card-text' style={{color:'#908e9b'}}>{items.Desc}</p>
</div>
</div>
</div>
       ) })}

    </div>
     
      </div>

}