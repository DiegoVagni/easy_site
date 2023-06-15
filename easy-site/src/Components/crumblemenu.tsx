import React  from "react"

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import NavBarCrumbleSubMenu from "./NavBarCrumbleSubMenu.tsx"

import KeyGenerator from "../KeyGenerator.tsx";

function CrumbleMenu(props) {

    var pages = props.pages;
    var colours = props.colours;
    const [anchorElNav, setAnchorElNav] = React.useState < null | HTMLElement > (
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
       
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="pages Menu">
                <IconButton
                    size="large"
                    aria-label="Pages menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="#000000"
                >
                    <MenuIcon />
                </IconButton>
            </Tooltip>
            <Menu
                id="menu-appbar"
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
                    display: { xs: "block", md: "none" }
                }}
            >
                {props.pages.map((page, index) => {
                    var content
                    if (page.props.subpages.length > 0) {
                        content = <NavBarCrumbleSubMenu page={page} key={KeyGenerator.GetNextKey()}  colours={colours} index={index} subpages={page.props.subpages ? page.props.subpages : []} />
                        
                    } else {
                        content = <MenuItem key={KeyGenerator.GetNextKey()}  onClick={handleCloseNavMenu}>
                            <Typography variant="h5" sx={{ color: colours[index % colours.length] }} aria-label={page}>
                                {page}</Typography>
                        </MenuItem>
                    }
                    return content
                })}
            </Menu>
        </Box>
        )
}

export default CrumbleMenu;