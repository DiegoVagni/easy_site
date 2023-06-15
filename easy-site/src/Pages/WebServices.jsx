import Page from "./Page.jsx"
import React from "react";

function WebServices(props) {
 

    return (
        <Page color={props.color} {...props} titleKey="menu.webservices" >
            <div>WebServices</div>
        </Page>
    );
}

export default WebServices;