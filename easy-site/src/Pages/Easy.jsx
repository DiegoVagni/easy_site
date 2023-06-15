import Page from "./Page.jsx"
import React from "react";


function Easy(props) {
    return (
        <Page color={props.color} {...props} titleKey="menu.easy">
            <div>easy</div>
        </Page>
    );
}

export default Easy;