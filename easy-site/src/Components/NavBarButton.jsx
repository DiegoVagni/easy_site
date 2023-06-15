import { Trans } from "react-i18next";

import { NavLink } from "react-router-dom"

function NavBarButton(props) {
 
    
    return (
        <NavLink to={props.to} className="nav-link"> <Trans i18nKey={props.i18nkey} >{props.children}</Trans></NavLink>
    );
}

export default NavBarButton;
