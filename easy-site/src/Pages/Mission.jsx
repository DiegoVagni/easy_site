import Page from "./Page.jsx";
import React from "react";

function Mission(props) {

    return (
        <Page color={props.color} {...props} titlekey="menu.mission">
            <div>mission</div>
        </Page>
    );
}

export default Mission;