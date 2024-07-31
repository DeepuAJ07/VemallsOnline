import { FaSearch } from "react-icons/fa";

export default function Details() {
  const buttonItems = [
    "Restuarant",
    "Supermarket",
    "Textiles",
    "Footware",
    "Pharmacy",
    "Stationary",
    "View all",
  ];
  return <div className="container" id="details-page">
    <div className="row">
      <div className="col">
        <h1>Discover Business in TVM</h1>
        <p>List Shops Products in Your Area</p>
      </div>

    </div>
    <div className="row d-flex justify-content-center">
   
      <select className="w-25 me-4 form-select">
      <option>All</option>
      <option>Shops</option>
      <option>Products</option>
      <option>Services</option>
      <option>Offer</option>
      <option>Homemades and Offers</option>
    </select>
    {/* <input type="search" placeholder="Enter the Shops,Products,Services" className="w-25"></input>
    <button className="btn btn-primary w-25">search</button> */}
           <input class="form-control me-4 w-25" type="search" placeholder="Search for Shops,Products,Services..." aria-label="Search"/>
           <button class="btn btn-outline-primary align-items-center me-4" style={{width:"40px"}} type="submit"><FaSearch /></button>
      
   
    </div>
    <div className="row">
        {buttonItems.map((names,i)=>{
return <p className="col m-1 fs-6 text-primary fw-800">{names}

</p>
        })}
    </div>
  </div>;
  
  
}
