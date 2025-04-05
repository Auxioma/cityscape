function Slider() {
    return (
        <section className="banner">
            <div className="container container-two">
                <div className="position-relative">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-inner position-relative">
                                <div className="banner-content">
                                    <span className="banner-content__subtitle text-uppercase font-14">
                                        FinTech Fusion
                                    </span>
                                    <h1 className="banner-content__title">
                                        Invest today in You <span className="text-gradient">Dream Home</span>
                                    </h1>
                                    <p className="banner-content__desc font-18">
                                        Unlock the Power of Real Estate Making Your Real Estate Dreams a Reality Real Estate
                                        here Unlock the Power of Real Estate
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-0 order-1">
                            <div className="banner-thumb">
                                <img src="assets/images/thumbs/banner-img.png" alt="" />
                                <img
                                    src="assets/images/shapes/shape-triangle.png"
                                    alt=""
                                    className="shape-element one"
                                />
                                <img src="assets/images/shapes/shape-circle.png" alt="" className="shape-element two" />
                                <img src="assets/images/shapes/shape-moon.png" alt="" className="shape-element three" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <ul className="common-tab nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="pills-rent-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-rent"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-rent"
                                        aria-selected="true"
                                    >
                                        Rent
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-buy-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-buy"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-buy"
                                        aria-selected="false"
                                    >
                                        Buy
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-sell-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-sell"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-sell"
                                        aria-selected="false"
                                    >
                                        Sell
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-rent"
                                    role="tabpanel"
                                    aria-labelledby="pills-rent-tab"
                                    tabIndex={0}
                                >
                                    <div className="filter">
                                        <form action="#">
                                            <div className="row gy-sm-4 gy-3">
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <input type="text" className="common-input" placeholder="Enter Keyword" />
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <div className="select-has-icon icon-black">
                                                        <select className="select common-input">
                                                            <option value="1" disabled>
                                                                Property Type
                                                            </option>
                                                            <option value="1">Apartment</option>
                                                            <option value="1">House</option>
                                                            <option value="1">Land</option>
                                                            <option value="1">Single Family</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <div className="select-has-icon icon-black">
                                                        <select className="select common-input">
                                                            <option value="1" disabled>
                                                                Location
                                                            </option>
                                                            <option value="1">Bangladesh</option>
                                                            <option value="1">Japan</option>
                                                            <option value="1">Korea</option>
                                                            <option value="1">Singapore</option>
                                                            <option value="1">Germany</option>
                                                            <option value="1">Thailand</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <button type="submit" className="btn btn-main w-100">
                                                        Find Now
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-buy"
                                    role="tabpanel"
                                    aria-labelledby="pills-buy-tab"
                                    tabIndex={0}
                                >
                                    <div className="filter">
                                        <form action="#">
                                            <div className="row gy-sm-4 gy-3">
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <input type="text" className="common-input" placeholder="Enter Keyword" />
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <div className="select-has-icon icon-black">
                                                        <select className="select common-input">
                                                            <option value="1" disabled>
                                                                Property Type
                                                            </option>
                                                            <option value="1">Apartment</option>
                                                            <option value="1">House</option>
                                                            <option value="1">Land</option>
                                                            <option value="1">Single Family</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <div className="select-has-icon icon-black">
                                                        <select className="select common-input">
                                                            <option value="1" disabled>
                                                                Location
                                                            </option>
                                                            <option value="1">Bangladesh</option>
                                                            <option value="1">Japan</option>
                                                            <option value="1">Korea</option>
                                                            <option value="1">Singapore</option>
                                                            <option value="1">Germany</option>
                                                            <option value="1">Thailand</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <button type="submit" className="btn btn-main w-100">
                                                        Find Now
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-sell"
                                    role="tabpanel"
                                    aria-labelledby="pills-sell-tab"
                                    tabIndex={0}
                                >
                                    <div className="filter">
                                        <form action="#">
                                            <div className="row gy-sm-4 gy-3">
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <input type="text" className="common-input" placeholder="Enter Keyword" />
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <div className="select-has-icon icon-black">
                                                        <select className="select common-input">
                                                            <option value="1" disabled>
                                                                Property Type
                                                            </option>
                                                            <option value="1">Apartment</option>
                                                            <option value="1">House</option>
                                                            <option value="1">Land</option>
                                                            <option value="1">Single Family</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <div className="select-has-icon icon-black">
                                                        <select className="select common-input">
                                                            <option value="1" disabled>
                                                                Location
                                                            </option>
                                                            <option value="1">Bangladesh</option>
                                                            <option value="1">Japan</option>
                                                            <option value="1">Korea</option>
                                                            <option value="1">Singapore</option>
                                                            <option value="1">Germany</option>
                                                            <option value="1">Thailand</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-6">
                                                    <button type="submit" className="btn btn-main w-100">
                                                        Find Now
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Slider