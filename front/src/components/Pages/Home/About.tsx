function About() {
    return (
        <section className="about padding-y-120">
            <div className="container container-two">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-thumb">
                            <img src="assets/images/thumbs/about-img.png" alt="" />
                            <div className="client-statistics flx-align">
                                <span className="client-statistics__icon">
                                    <i className="fas fa-users text-gradient"></i>
                                </span>
                                <div className="client-statistics__content">
                                    <h5 className="client-statistics__number statisticsCounter">4,000+</h5>
                                    <span className="client-statistics__text fs-18">Satisfied Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-heading style-left">
                                <span className="section-heading__subtitle"> <span
                                    className="text-gradient fw-semibold">About Us</span> </span>
                                <h2 className="section-heading__title">Stay with us feel at home Your perfect stay
                                    awaits</h2>
                                <p className="section-heading__desc">Real Estate is a vast industry that deals with the
                                    buying, selling, and renting of properties. It inv transactions related to
                                    residential</p>
                            </div>
                            <div className="about-box d-flex">
                                <div className="about-box__icon">
                                    <img src="assets/images/icons/about-icon.svg" alt="" />
                                </div>
                                <div className="about-box__content">
                                    <h6 className="about-box__title">Your Dream Home Awaits</h6>
                                    <p className="about-box__desc font-13">Real Estate is a vast industry that deals
                                        with the buying, selling, and renting of properties. It inv transactions related
                                        to residential, commercial, and industrial properties</p>
                                </div>
                            </div>
                            <div className="about-button">
                                <a href="#" className="btn btn-main">Learn More <span className="icon-right"> <i
                                    className="fas fa-arrow-right"></i> </span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default About;