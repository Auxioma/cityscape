function Mobile() {
    return (
        <div className="mobile-menu d-lg-none d-block">
            <button type="button" className="close-button"> <i className="las la-times"></i> </button>
            <div className="mobile-menu__inner">
                <a href="index.html" className="mobile-menu__logo">
                    <img src="assets/images/logo/logo.png" alt="Logo" />
                </a>
                <div className="mobile-menu__menu">

                    <ul className="nav-menu flx-align nav-menu--mobile">
                        <li className="nav-menu__item has-submenu">
                            <a href="javascript:void(0)" className="nav-menu__link">Home</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item">
                                    <a href="index.html" className="nav-submenu__link"> Home One</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="index-2.html" className="nav-submenu__link"> Home Two</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="index-3.html" className="nav-submenu__link"> Home Three</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="index-4.html" className="nav-submenu__link"> Home Four</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="index-5.html" className="nav-submenu__link"> Home Five</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="index-6.html" className="nav-submenu__link"> Home Video</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="index-7.html" className="nav-submenu__link"> Home Map</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu__item has-submenu">
                            <a href="javascript:void(0)" className="nav-menu__link">Pages</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item">
                                    <a href="property.html" className="nav-submenu__link"> Property</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="property-sidebar.html" className="nav-submenu__link"> Property Sidebar </a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="property-details.html" className="nav-submenu__link"> Property Details</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="add-listing.html" className="nav-submenu__link"> Add New Listing</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="map-location.html" className="nav-submenu__link"> Map Location</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="about.html" className="nav-submenu__link"> About Us</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="faq.html" className="nav-submenu__link"> FAQ</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="checkout.html" className="nav-submenu__link"> Checkout</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="cart.html" className="nav-submenu__link"> Cart</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="login.html" className="nav-submenu__link"> Login</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="account.html" className="nav-submenu__link"> Account</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu__item has-submenu">
                            <a href="javascript:void(0)" className="nav-menu__link">Project</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item">
                                    <a href="project.html" className="nav-submenu__link"> Project </a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="project-details.html" className="nav-submenu__link">Project Details</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu__item has-submenu">
                            <a href="javascript:void(0)" className="nav-menu__link">Blog</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item">
                                    <a href="blog-classic.html" className="nav-submenu__link"> Blog Classic</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="blog-details.html" className="nav-submenu__link"> Blog Details</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu__item">
                            <a href="contact.html" className="nav-menu__link">Contact</a>
                        </li>
                    </ul>
                    <a href="#" className="btn btn-outline-light d-lg-none d-block mt-4">Sell Property <span className="icon-right text-gradient"> <i className="fas fa-arrow-right"></i> </span> </a>
                </div>
            </div>
        </div>
    );
}

export default Mobile;