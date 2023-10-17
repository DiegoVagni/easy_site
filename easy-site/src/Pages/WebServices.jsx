
import Page from "./Page.jsx"
import React from "react";
import { Trans } from "react-i18next";
import EasyMenuPage from "../Components/EasyPageMenu.tsx"
function WebServices(props) {
 
    let subpages = [
        <Trans i18nkey={"easypages.webServices.coding.title"}>{"easypages.webServices.coding.title"}</Trans>,
        <Trans i18nkey={"easypages.webServices.UI.title"}>{"easypages.webServices.UI.title"}</Trans>,
        <Trans i18nkey={"easypages.webServices.copywriting.title"}>{"easypages.webServices.copywriting.title"}</Trans>,
        <Trans i18nkey={"easypages.webServices.SEO.title"}>{"easypages.webServices.SEO.title"}</Trans>,
        <Trans i18nkey={"easypages.webServices.social.title"}>{"easypages.webServices.social.title"}</Trans>,
        <Trans i18nkey={"easypages.webServices.commerce.title"}>{"easypages.webServices.commerce.title"}</Trans>,
        <Trans i18nkey={"easypages.webServices.multimedia.title"}>{"easypages.webServices.multimedia.title"}</Trans>
    ]
    let texts = [
        <Trans i18nkey={"easypages.webServices.coding.text"}>{"easypages.webServices.coding.text"}</Trans>,
        <Trans i18nkey={"easypages.webServices.UI.text"}>{"easypages.webServices.UI.text"}</Trans>,
        <Trans i18nkey={"easypages.webServices.copywriting.text"}>{"easypages.webServices.copywriting.text"}</Trans>,
        <Trans i18nkey={"easypages.webServices.SEO.text"}>{"easypages.webServices.SEO.text"}</Trans>,
        <Trans i18nkey={"easypages.webServices.social.text"}>{"easypages.webServices.social.text"}</Trans>,
        <Trans i18nkey={"easypages.webServices.commerce.text"}>{"easypages.webServices.commerce.text"}</Trans>,
        <Trans i18nkey={"easypages.webServices.multimedia.text"}>{"easypages.multimedia.pd.text"}</Trans>,
        <Trans i18nkey={"easypages.webServices.ctd.text"}>{"easypages.webServices.ctd.text"}</Trans>
    ]
    return (
        <Page color={props.color} {...props}  >
            <EasyMenuPage title={<Trans i18nkey={"easypages.webServices.title"}>{"easypages.webServices.title"}</Trans>} subpages={subpages} texts={texts} />
        </Page>
    );
}

export default WebServices;