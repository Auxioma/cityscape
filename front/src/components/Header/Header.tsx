import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className="header-top">
            <div className="container container-two">
                <div className="flx-between">
                    <div className="header-info flx-align">
                        <div className="header-info__item flx-align">
                            <span className="header-info__icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                            <a href="tel:(629) 555-0129" className="header-info__text">(629) 555-0129</a>
                        </div>
                        <div className="header-info__item flx-align">
                            <span className="header-info__icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <a href="mailto:info@example.com" className="header-info__text">info@example.com</a>
                        </div>
                    </div>
                    <div className="header-info flx-align d-sm-block d-none">
                        <div className="header-info__item flx-align">
                            <span className="header-info__icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </span>
                            <span className="header-info__text">6391 Elgin St. Celina, 10299</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
