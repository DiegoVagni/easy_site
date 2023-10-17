import React from "react";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import KeyGenerator from "../KeyGenerator.tsx";

function NavBarSubMenu(props) {
    var content;

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        console.log(event.currentTarget)
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
       
        setAnchorElNav(null);
    };

    if (props.subpages.length > 0) {
        content = (<>
            <Menu
                id={"menu-appbar" + props.index}
                anchorEl={anchorElNav}
               
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: "block", md: "block" }
                }}>
                {props.subpages.map((spage) => (
                    <MenuItem key={KeyGenerator.GetNextKey()} onClick={handleCloseNavMenu}>
                        <Typography variant="h5" sx={{ color: 'inherit' }} aria-label={spage}>
                            {<p>{spage}</p>}</Typography>
                    </MenuItem>
                ))}
            </Menu>

            <Typography key={KeyGenerator.GetNextKey()}
                onClick={handleCloseNavMenu}
                onMouseEnter={handleOpenNavMenu}
                aria-label={props.page}
                sx={{ my: 2, mr: 1, ml: 1, color: props.colours[props.index % props.colours.length], display: "block" }} variant="h5">
                {props.page}</Typography>
        </>)
    }else {
        content = <Typography key={KeyGenerator.GetNextKey()}
            onClick={handleCloseNavMenu}
            aria-label={props.page}
            sx={{ my: 2, mr: 1, ml: 1, color: props.colours[props.index % props.colours.length], display: "block" }} variant="h5">
            {props.page}</Typography>
    }
  
    return(
        <Box>
            {content}
    </Box>)
}

export default NavBarSubMenu;