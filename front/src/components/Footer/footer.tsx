function Footer () {
    return (
        <>
        <footer className="footer footer-two padding-y-120">
            <div className="container container-two">
                <div className="row gy-5">
                    <div className="col-xl-4 col-lg-6">
                        <div className="footer-item">
                            <div className="footer-item__logo">
                                <a href="index.html"> <img src="assets/images/logo/white-logo.png" alt="" /></a>
                            </div>
                            <p className="footer-item__desc">It is a long established fact that a reader will be
                                distracted</p>

                            <h6 className="footer-item__title mt-4 mt-lg-5">Lets Work Together</h6>
                            <div className="row gy-4">
                                <div className="col-6">
                                    <div className="contact-info d-flex gap-2">
                                        <span className="contact-info__icon text-gradient"><i
                                            className="fas fa-map-marker-alt"></i></span>
                                        <div className="contact-info__content">
                                            <span className="contact-info__text text-white">Address</span>
                                            <span className="contact-info__address text-white">66 Broklyant, New York India</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="contact-info d-flex gap-2">
                                        <span className="contact-info__icon text-gradient"><i
                                            className="fas fa-phone"></i></span>
                                        <div className="contact-info__content">
                                            <span className="contact-info__text text-white">Phone Number</span>
                                            <span className="contact-info__address text-white">012 345 678 9101</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-1 d-xl-block d-none"></div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="footer-item">
                            <h6 className="footer-item__title">Services</h6>
                            <ul className="footer-menu">
                                <li className="footer-menu__item"><a href="property.html" className="footer-menu__link">Reliable
                                    Rentals </a></li>
                                <li className="footer-menu__item"><a href="property.html" className="footer-menu__link">Golden
                                    Key Properties </a></li>
                                <li className="footer-menu__item"><a href="property.html" className="footer-menu__link">Swift
                                    Home Sales </a></li>
                                <li className="footer-menu__item"><a href="property.html" className="footer-menu__link">Elite
                                    Realty Services </a></li>
                                <li className="footer-menu__item"><a href="property.html" className="footer-menu__link">Dream
                                    Property Solutions </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-1 d-xl-block d-none"></div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="footer-item">
                            <h6 className="footer-item__title">Our gallery</h6>
                            <p className="footer-item__desc">It is a long established fact that reader will be Elite
                                Property </p>

                            <form action="#" className="mt-4 subscribe-box">
                                <div className="input-group">
                                    <input type="text" className="form-control common-input common-input--md text-white"
                                           placeholder="Your mail address" />
                                        <button type="submit"
                                                className="px-4 input-group-text bg--gradient border-0 text-white"><i
                                            className="fas fa-paper-plane"></i></button>
                                </div>
                            </form>

                            <ul className="social-list">
                                <li className="social-list__item"><a href="https://www.facebook.com"
                                                                     className="social-list__link flx-center"><i
                                    className="fab fa-facebook-f"></i></a></li>
                                <li className="social-list__item"><a href="https://www.twitter.com"
                                                                     className="social-list__link flx-center"> <i
                                    className="fab fa-twitter"></i></a></li>
                                <li className="social-list__item"><a href="https://www.linkedin.com"
                                                                     className="social-list__link flx-center"> <i
                                    className="fab fa-linkedin-in"></i></a></li>
                                <li className="social-list__item"><a href="https://www.pinterest.com"
                                                                     className="social-list__link flx-center"> <i
                                    className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    <div className="bottom-footer">
        <div className="container container-two">
            <div className="bottom-footer__inner flx-between gap-3">
                <p className="bottom-footer__text"> &copy; CityScape 2024 | All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="#" className="footer-link">Terms & Condition</a>
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="contact.html" className="footer-link">Contact Us</a>
                </div>
            </div>
        </div>
    </div>

</>
);
}

export default  Footer