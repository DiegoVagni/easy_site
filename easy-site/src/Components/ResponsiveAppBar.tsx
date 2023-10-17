import * as React from "react";
import { NavLink} from "react-router-dom"

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import SvgIcon from '@mui/material/SvgIcon';

import { ReactComponent as logo } from "../Resources/logo.svg";
import KeyGenerator from "../KeyGenerator.tsx";
import CrumbleMenu from "./CrumbleMenu.tsx";
import NavBarSubMenu from "./NavBarSubMenu.tsx";
function ResponsiveAppBar(props) {
  
    
         
    var pages = props.pages;
    var colours = [...props.colours]
    return (
        <AppBar position="static" sx={{ minHeight: '2.5vw',maxHeight:'3vw', boxShadow: " 0px 25px 49px -20px rgba(0,0,0,0.45)", backgroundColor: "#ffffff"}}>
            <Container  maxWidth={ false} >
                <Toolbar disableGutters>
                    <NavLink className="nav-link" to="/">  <SvgIcon component={logo} inheritViewBox sx={{ transform: "scale(8)", ml: "40px", mr: "40px" }} /></NavLink>

                    <CrumbleMenu colours={ colours} pages={pages }/>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>   
                        {pages.map((page, index) => (
                            <NavBarSubMenu page={page} key={KeyGenerator.GetNextKey()} colours={colours }index={ index} subpages={page.props.subpages ? page.props.subpages : []} />
                        ))}
                    </Box>

                    <Box>
                        {props.localLanguage == "en" ? <button onClick={() => props.changeLanguage("it")}>IT</button> : <button onClick={() => props.changeLanguage("en")}>EN</button>}   
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
