
import Page from "./Page.jsx"
import React from "react";
import { Trans } from "react-i18next";
import EasyMenuPage from "../Components/EasyPageMenu.tsx"
function Services(props) {
    let subpages = [<Trans i18nkey={"miscellaneus.graphicSeriveces"}>{"miscellaneus.graphicSeriveces"}</Trans>, <Trans i18nkey={"miscellaneus.webServices"}>{"miscellaneus.webServices"}</Trans>]
   let texts = [
        <Trans i18nkey={"texts.graphicServices"}>{"texts.graphicServices"}</Trans>, <Trans i18nkey={"texts.webServices"}>{"texts.webServices"}</Trans>
    ]
    return (
        <Page color={props.color} {...props} titleKey="menu.services">
            <EasyMenuPage title={<Trans i18nkey={"menu.services"}>{"menu.services"}</Trans>} subpages={subpages} texts={texts }/>
        </Page>
    );
}

export default Services;