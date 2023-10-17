import React, { useState } from 'react';

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import Divider from '@mui/material/Divider';
import KeyGenerator from "../KeyGenerator.tsx";
import Textdisplay from './TextDisplay.tsx';

function EasyPageMenu(props) {
    const [textIndex, SetIndex] = useState(0);
    const changeIndex = (event) => {
        event.stopPropagation();
        SetIndex(event.target.getAttribute("value"));
    };

    return (
        <Box sx={{
            flexGrow: 1, display: "flex", flexDirection:"row"
        }}>
            <Typography key={KeyGenerator.GetNextKey()}
                
                aria-label={props.title}
                sx={{ my: 2, mr: 1, ml: 1,  display: "block" }} variant="h5">
                {props.title}</Typography>
            <Divider orientation="vertical" variant="middle" flexItem />          
            <Box sx={{
                flexGrow: 1, display: "flex", flexDirection: "column"
            }}>
                {props.subpages.map((spage, index) => (
                    <Typography variant="h5" sx={{ color: 'inherit' }} aria-label={spage} value={index} key={KeyGenerator.GetNextKey()} onMouseEnter={changeIndex}>
                        {<p>{spage}</p>}</Typography>
                ))}
            </Box>
            <Box sx={{ flexGrow: 1.5, m:1}}>
                <Textdisplay text={props.texts[textIndex]} />
            </Box>
        </Box>)
}
export default EasyPageMenu;