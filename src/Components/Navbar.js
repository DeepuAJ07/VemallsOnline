import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo/logo.png';

export default function Navbar() {
  const Navigate = useNavigate()
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to='/' class="navbar-brand" href="#">
        <img src={logo} alt="VEMALLS" height='40px'className="mx-4"/>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
          </ul>

          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link  text-info " aria-current="page" href="#">
                  Shops
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-info" href="#">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-info" href="#">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-info" href="#">
                  Offers
                </Link>
              </li>
              <li class="nav-item btn btn-success p-0 m-1">
                <Link class="nav-link" href="#">
                  <i>Homemade and Organic</i>
                </Link>
              </li>
              <button onClick={()=>{Navigate('/login')}} class="btn btn-primary p-2" type="submit">
                Login
              </button>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
