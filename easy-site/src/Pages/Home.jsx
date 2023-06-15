import Page from "./Page.jsx"
import React from "react";


function Home(props) {
     return (
         <Page color={props.color} {...props}>
            <div>home</div>
        </Page>
    );
}

export default Home;