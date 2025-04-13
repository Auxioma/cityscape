function Offcanevas() {
    return (
        <div className="common-offcanvas d-lg-block d-none">
            <div className="flx-between">
                <a href="index.html" className="mobile-menu__logo">
                    <img src="assets/images/logo/white-logo.png" alt="Logo" />
                </a>
                <button type="button" className="close-button d-flex position-relative top-0 end-0"> <i className="las la-times"></i> </button>
            </div>

            <div className="search-box mt-5">
                <form action="#">
                    <input type="text" className="common-input common-input--light" placeholder="Search..." />
                    <button type="submit" className="icon"> <i className="fas fa-search"></i> </button>
                </form>
            </div>

            <ul className="address-list mt-5">
                <li className="address-list__item flx-align">
                    <span className="address-list__icon"><i className="fas fa-map-marker-alt"></i></span>
                    <div className="address-list__content">
                        <p className="address-list__text">Burmsille Street, MN 55337, <br /> United States</p>
                    </div>
                </li>
                <li className="address-list__item flx-align">
                    <span className="address-list__icon"> <i className="fas fa-phone"></i></span>
                    <div className="address-list__content">
                        <a href="tel:" className="address-list__text">+(1) 123 456 7890 </a>
                        <a href="tel:" className="address-list__text">+(1) 098 765 4321 </a>
                    </div>
                </li>
                <li className="address-list__item flx-align">
                    <span className="address-list__icon"> <i className="fas fa-envelope"></i></span>
                    <div className="address-list__content">
                        <a href="mailto:" className="address-list__text"> info@driller.com</a>
                        <a href="mailto:" className="address-list__text">info.example@driller.com</a>
                    </div>
                </li>
            </ul>

            <div className="google-map mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1511.2499674845235!2d-73.99553882767792!3d40.75102778252164!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1686536419224!5m2!1sen!2sbd" loading="lazy" className="w-100 h-100"></iframe>
            </div>

            <ul className="social-list">
                <li className="social-list__item"><a href="https://www.facebook.com" className="social-list__link flx-center"><i className="fab fa-facebook-f"></i></a> </li>
                <li className="social-list__item"><a href="https://www.twitter.com" className="social-list__link flx-center"> <i className="fab fa-twitter"></i></a></li>
                <li className="social-list__item"><a href="https://www.linkedin.com" className="social-list__link flx-center"> <i className="fab fa-linkedin-in"></i></a></li>
                <li className="social-list__item"><a href="https://www.pinterest.com" className="social-list__link flx-center"> <i className="fab fa-instagram"></i></a></li>
            </ul>

        </div>

    );
}

export default Offcanevas;