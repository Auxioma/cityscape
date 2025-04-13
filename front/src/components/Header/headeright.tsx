import { Link } from "react-router-dom";

function HeaderRight() {
  return (
    <div className="header-right flx-align">
    <button type="button" className="offcanvas-btn d-lg-block d-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
            <line x1="0.0078125" y1="12.293" x2="30.0078" y2="12.293" stroke="#181616" stroke-width="3"/>
            <path d="M5.00781 22.293H30.0078" stroke="#181616" stroke-width="3"/>
            <path d="M10.0078 2.29297H30.0078" stroke="#181616" stroke-width="3"/>
        </svg>
    </button>
    <a href="property-details.html" className="btn btn-outline-light d-lg-block d-none">Sell Property 
        <span className="icon-right text-gradient icon"> 
            <i className="fas fa-arrow-right"></i>
         </span> 
    </a>
    <button type="button" className="toggle-mobileMenu d-lg-none ms-3"> <i className="las la-bars"></i> </button>
</div>
  );
}

export default HeaderRight;
