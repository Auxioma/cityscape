function BlogHome() {
    return (
        <section className="blog padding-t-60 padding-b-120">
            <div className="container container-two">
                <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
                    <div className="section-heading__inner">
                        <span className="section-heading__subtitle"> <span className="text-gradient fw-semibold">Latest Product</span> </span>
                        <h2 className="section-heading__title">Prestige Propert Management property for you</h2>
                    </div>
                    <a href="#" className="btn btn-outline-main">View More <span className="icon-right"> <i
                        className="fas fa-plus"></i> </span> </a>
                </div>
                <div className="row gy-4">
                    <div className="col-lg-4 col-sm-6">
                        <div className="blog-item">
                            <div className="blog-item__thumb">
                                <a href="blog-details.html" className="blog-item__thumb-link">
                                    <img src="assets/images/thumbs/blog1.png" className="cover-img" alt="" />
                                </a>
                            </div>
                            <div className="blog-item__inner">
                                <span className="blog-item__date"> 09 <span className="text">Mar</span> </span>
                                <div className="blog-item__content">
                                    <ul className="text-list flx-align">
                                        <li className="text-list__item font-12">
                                            <span className="icon"><i className="fas fa-user"></i></span>
                                            <a href="#" className="link">By admin</a>
                                        </li>
                                        <li className="text-list__item font-12">
                                            <span className="icon"><i className="fas fa-comments"></i></span>
                                            <a href="#" className="link">Comments (05)</a>
                                        </li>
                                    </ul>
                                    <h6 className="blog-item__title">
                                        <a href="blog-details.html"
                                            className="blog-item__title-link border-effect"> Discover Endless
                                            Possibilities in Real Estate Live Your Best Life in a New Home </a>
                                    </h6>
                                    <a href="#" className="simple-btn text-heading fw-semibold">Book Now
                                        <span className="icon-right text-gradient"> <i
                                            className="fas fa-plus"></i> </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="blog-item">
                            <div className="blog-item__thumb">
                                <a href="blog-details.html" className="blog-item__thumb-link">
                                    <img src="assets/images/thumbs/blog2.png" className="cover-img" alt="" />
                                </a>
                            </div>
                            <div className="blog-item__inner">
                                <span className="blog-item__date"> 28 <span className="text">Mar</span> </span>
                                <div className="blog-item__content">
                                    <ul className="text-list flx-align">
                                        <li className="text-list__item font-12">
                                            <span className="icon"><i className="fas fa-user"></i></span>
                                            <a href="#" className="link">By admin</a>
                                        </li>
                                        <li className="text-list__item font-12">
                                            <span className="icon"><i className="fas fa-comments"></i></span>
                                            <a href="#" className="link">Comments (05)</a>
                                        </li>
                                    </ul>
                                    <h6 className="blog-item__title">
                                        <a href="blog-details.html"
                                            className="blog-item__title-link border-effect"> Turn Your Real Estate Dreams
                                            Into Reality Embrace the Real Estate Lifestyle </a>
                                    </h6>
                                    <a href="#" className="simple-btn text-heading fw-semibold">Book Now
                                        <span className="icon-right text-gradient"> <i
                                            className="fas fa-plus"></i> </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="blog-item">
                            <div className="blog-item__thumb">
                                <a href="blog-details.html" className="blog-item__thumb-link">
                                    <img src="assets/images/thumbs/blog3.png" className="cover-img" alt="" />
                                </a>
                            </div>
                            <div className="blog-item__inner">
                                <span className="blog-item__date"> 16 <span className="text">Mar</span> </span>
                                <div className="blog-item__content">
                                    <ul className="text-list flx-align">
                                        <li className="text-list__item font-12">
                                            <span className="icon"><i className="fas fa-user"></i></span>
                                            <a href="#" className="link">By admin</a>
                                        </li>
                                        <li className="text-list__item font-12">
                                            <span className="icon"><i className="fas fa-comments"></i></span>
                                            <a href="#" className="link">Comments (05)</a>
                                        </li>
                                    </ul>
                                    <h6 className="blog-item__title">
                                        <a href="blog-details.html"
                                            className="blog-item__title-link border-effect"> Discover Endless
                                            Possibilities in Real Estate Live Your Best Life in a New Home </a>
                                    </h6>
                                    <a href="#" className="simple-btn text-heading fw-semibold">Book Now
                                        <span className="icon-right text-gradient">
                                            <i className="fas fa-plus"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default BlogHome