
import Page from "./Page.jsx"
import React from "react";
import { Trans } from "react-i18next";
import EasyMenuPage from "../Components/EasyPageMenu.tsx"
function Services(props) {
    let subpages = [<Trans i18nkey={"easypages.graphicServices.title"}>{"easypages.graphicServices.title"}</Trans>, <Trans i18nkey={"easypages.webServices.title"}>{"easypages.webServices.title"}</Trans>]
   let texts = [
        <Trans i18nkey={"texts.graphicServices"}>{"texts.graphicServices"}</Trans>, <Trans i18nkey={"texts.webServices"}>{"texts.webServices"}</Trans>
    ]
    return (
        <Page color={props.color} {...props}>
            <EasyMenuPage title={<Trans i18nkey={"menu.services"}>{"menu.services"}</Trans>} subpages={subpages} texts={texts }/>
        </Page>
    );
}

export default Services;