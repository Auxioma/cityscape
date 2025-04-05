function MessageHome () {
    return (
        <section className="message">
            <div className="container container-two">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="message-thumb">
                            <img src="assets/images/thumbs/message-img.png" alt="" className="cover-img" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="form-box">
                            <h2 className="form-box__title">Get A Quote </h2>
                            <form action="#">
                                <div className="row gy-30">
                                    <div className="col-sm-6 col-xs-6">
                                        <div className="position-relative">
                                            <input type="text" className="common-input common-input--withIcon"
                                                   placeholder="Name" />
                                                <span className="input-icon"><i className="fas fa-user"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <div className="position-relative">
                                            <input type="tel" className="common-input common-input--withIcon"
                                                   placeholder="Your Phone" />
                                                <span className="input-icon"><i className="fas fa-phone"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <div className="position-relative">
                                            <input type="email" className="common-input common-input--withIcon"
                                                   placeholder="Your Email" />
                                                <span className="input-icon"><i
                                                    className="fas fa-paper-plane"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <div className="position-relative">
                                            <input type="text" className="common-input common-input--withIcon"
                                                   placeholder="Your Address" />
                                                <span className="input-icon"><i
                                                    className="fas fa-map-marker-alt"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="position-relative">
                                            <textarea className="common-input common-input--withIcon"
                                                      placeholder="Write Message.."></textarea>
                                            <span className="input-icon"><i
                                                className="fas fa-map-marker-alt"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" className="btn btn-main w-100"> Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

);
}

export default MessageHome