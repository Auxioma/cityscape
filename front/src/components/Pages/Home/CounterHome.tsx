function CounterHome () {
    return (
        <section className="counter padding-y-120">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-sm-3 col-6">
                        <div className="counter-item position-relative">
                            <h2 className="counter-item__number counter"> 200 </h2>
                            <span className="counter-item__text"> HAPPY PATIENTS </span>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6">
                        <div className="counter-item position-relative">
                            <h2 className="counter-item__number counter"> 20 </h2>
                            <span className="counter-item__text"> SAVED HEARTS </span>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6">
                        <div className="counter-item position-relative">
                            <h2 className="counter-item__number counter"> 10k </h2>
                            <span className="counter-item__text"> EXPERT DOCTORS </span>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6">
                        <div className="counter-item position-relative">
                            <h2 className="counter-item__number counter"> 900 </h2>
                            <span className="counter-item__text"> SERENITY WORK </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export  default CounterHome