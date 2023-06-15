import React from "react";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import KeyGenerator from "../KeyGenerator.tsx";

function NavBarCrumbleSubMenu(props) {
    const [anchorElNav, setAnchorElNav] = React.useState < null | HTMLElement > (
        null
    );
    var pages = props.pages;
    var colours = props.colours;
    var content;

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
       
        setAnchorElNav(null);
    };

    if (props.subpages.length > 0) {        
        content = (<>
            <Box>
                <Menu
                    id={"menu-appbar" + props.index}
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left"
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: "block", md: "block" }
                    }}>
                    {props.subpages.map((spage, index) => (
                        <MenuItem key={KeyGenerator.GetNextKey()} onClick={handleCloseNavMenu}>
                            <Typography variant="h5" sx={{ color: 'inherit' }} aria-label={spage}>
                                {<p>{spage}</p>}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
                <MenuItem key={KeyGenerator.GetNextKey()} onClick={handleCloseNavMenu}>
                    <Typography variant="h5" sx={{ color: colours[props.index % colours.length] }} aria-label={props.page}>
                        {props.page}</Typography>
                    <Tooltip title="pages Menu">
                        <IconButton
                            size="large"
                            aria-label="Pages menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="#000000"
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Tooltip>
                </MenuItem>
            </Box>
     </>)
    }else {
        content =
            <MenuItem key={KeyGenerator.GetNextKey()} onClick={handleCloseNavMenu}>
            <Typography
            onClick={handleCloseNavMenu}
            aria-label={props.page}
            sx={{ my: 2, mr: 1, ml: 1, color: props.colours[props.index % props.colours.length], display: "block" }} variant="h5">
                {props.page}</Typography>
            </MenuItem>
    }
  
    return(
        <Box>
            {content}
    </Box>)
}

export default NavBarCrumbleSubMenu;