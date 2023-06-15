import React from "react";

import TextCarousel from "../Components/TextCarousel.tsx";
import Page from "./Page.jsx"
import { ReactComponent as logo } from "../Resources/logo.svg";

function GraphicServices(props) {

    return (
        <Page color={props.color} {...props} titleKey="menu.graphicservices" >
            <TextCarousel sections={[<div>a</div>, <div>a</div>, <div>a</div>, <div>a</div>]} sectionskeys={["a", "a", "a", "a"]} backgroundColor={props.color} images={[   <img
                src={logo}
                className="images"
                style={{ backgroundColor: props.backgroundColor }}
                loading="lazy"
                />,
                <img
                    src={logo}
                    className="images"
                    style={{ backgroundColor: props.backgroundColor }}
                    loading="lazy"
                />,
                <img
                    src={logo}
                    className="images"
                    style={{ backgroundColor: props.backgroundColor }}
                    loading="lazy"
                />,
                <img
                    src={logo}
                    className="images"
                    style={{ backgroundColor: props.backgroundColor }}
                    loading="lazy"
               />] }>
             
          </TextCarousel>
        </Page>
    );
}

export default GraphicServices;