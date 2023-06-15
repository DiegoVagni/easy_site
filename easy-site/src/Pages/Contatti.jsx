import Page from "./Page.jsx"
import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import image from "../Resources/logo.svg";
function Contacts(props) {
    return (<Page color={props.color} {...props} titleKey="menu.contacts">
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
                    <img
                        src={image}
                        alt={props.title}
                        loading="lazy"

                    />
                <Typography variant="h5" >easystudio</Typography>
                <Typography variant="h5" >+41 91 722 12 34</Typography>
           
                <Typography variant="h5" >hello@easystudio.ch</Typography>
        </Box>
    </Page>
    );
}

export default Contacts;