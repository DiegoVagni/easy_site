import React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";


import KeyGenerator from "../KeyGenerator.tsx";

function Textdisplay(props) {
   
    return (
        <Box sx={{
            width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.75)", borderRadius:"20px"
        }}>
            <Typography key={KeyGenerator.GetNextKey()}
                
                aria-label={props.text}
                sx={{ my: 2, mr: 1, ml: 1, display: "block", color:"#ffffff"}} variant="h5">
                {props.text}</Typography>
        </Box>)
}

export default Textdisplay;