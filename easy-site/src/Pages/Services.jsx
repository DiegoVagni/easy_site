
import Page from "./Page.jsx"
import React from "react";

function Services(props) {
    return (
        <Page color={props.color} {...props} titleKey="menu.services">
            <div>services</div>
        </Page>
    );
}

export default Services;