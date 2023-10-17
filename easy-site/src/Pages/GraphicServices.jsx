import React from "react";

import Page from "./Page.jsx"
import { Trans } from "react-i18next";
import EasyMenuPage from "../Components/EasyPageMenu.tsx"
function GraphicServices(props) {
    let subpages = [
        <Trans i18nkey={"easypages.graphicServices.bi.title"}>{"easypages.graphicServices.bi.title"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.bs.title"}>{"easypages.graphicServices.bs.title"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.cd.title"}>{"easypages.graphicServices.cd.title"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.eg.title"}>{"easypages.graphicServices.eg.title"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.commerce.title"}>{"easypages.graphicServices.commerce.title"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.illustration.title"}>{"easypages.graphicServices.illustration.title"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.pd.title"}>{"easypages.graphicServices.pd.title"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.ctd.title"}>{"easypages.graphicServices.ctd.title"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.signals.title"}>{"easypages.graphicServices.signals.title"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.boards.title"}>{"easypages.graphicServices.boards.title"}</Trans>,
    ]
    let texts = [
        <Trans i18nkey={"easypages.graphicServices.bi.text"}>{"easypages.graphicServices.bi.text"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.bs.text"}>{"easypages.graphicServices.bs.text"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.cd.text"}>{"easypages.graphicServices.cd.text"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.eg.text"}>{"easypages.graphicServices.eg.text"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.commerce.text"}>{"easypages.graphicServices.commerce.text"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.illustration.text"}>{"easypages.graphicServices.illustration.text"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.pd.text"}>{"easypages.graphicServices.pd.text"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.ctd.text"}>{"easypages.graphicServices.ctd.text"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.signals.text"}>{"easypages.graphicServices.signals.text"}</Trans>,
        <Trans i18nkey={"easypages.graphicServices.boards.text"}>{"easypages.graphicServices.boards.text"}</Trans>,
    ]
    return (
        <Page color={props.color} {...props}  >
            <EasyMenuPage title={<Trans i18nkey={"easypages.graphicServices.title"}>{"easypages.graphicServices.title"}</Trans>} subpages={subpages} texts={texts} />
        </Page>
    );
}

export default GraphicServices;