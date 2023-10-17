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
    var check = textIndex > 0;
    
    return (
        <Box sx={{
            flexGrow: 1, display: "flex", flexDirection:"row"
        }}>
            <Typography key={KeyGenerator.GetNextKey()}
                value={0}
                onMouseEnter={changeIndex}
                onMouseExit={changeIndex}
                aria-label={props.title}
                sx={{ my: 2, mr: 1, ml: 1,  display: "block" }} variant="h5">
                {props.title}</Typography>
            <Divider orientation="vertical" variant="middle" flexItem />          
            <Box sx={{
                flexGrow: 1, display: "flex", flexDirection: "column"
            }}>
                {props.subpages.map((spage, index) => {
                    let weight = "regular";
                    if (index + 1 == textIndex) {
                        weight = "bold"
                    }
                    return (<Typography variant="h5" sx={{ color: 'inherit', fontWeight: weight }} aria-label={spage} value={index + 1} key={KeyGenerator.GetNextKey()} onMouseEnter={changeIndex} >
                        {<p>{spage}</p>}</Typography>)
                })}
            </Box>
            <Box sx={{ flexGrow: 1.5, m: 1 }}>
                {check ? <Textdisplay text={props.texts[textIndex - 1]} />: <div></div>}
                
            </Box>
        </Box>)
}
export default EasyPageMenu;