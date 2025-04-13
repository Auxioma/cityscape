import { Link } from "react-router-dom";
import { menuData } from "../../data/menuData";

function Desckop() {
  return (
    <div className="header-menu d-lg-block d-none">
      <ul className="nav-menu flx-align">
        {menuData.map((menuItem, index) => (
          <li
            key={index}
            className={`nav-menu__item ${menuItem.submenu ? "has-submenu" : ""}`}
          >
            {menuItem.link ? (
              <Link to={menuItem.link} className="nav-menu__link">
                {menuItem.title}
              </Link>
            ) : (
              <span className="nav-menu__link">{menuItem.title}</span>
            )}

            {menuItem.submenu && (
              <ul className="nav-submenu">
                {menuItem.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="nav-submenu__item">
                    <Link to={`/${subItem.link}`} className="nav-submenu__link">
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Desckop;
