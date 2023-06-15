import React from "react";
import { Trans } from "react-i18next";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

function ProjectComponent(props) {

    

    return (<Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }}>

       
        <Container sx={{ background: props.color, height: "100%" }}>
           
            <Typography variant="h5" ><Trans i18nkey="projects.clients" >projects.clients</Trans></Typography>
            <Typography variant="h4">{props.Client}</Typography>
            <Divider variant="middle" />
            <Typography variant="h5" ><Trans i18nkey="projects.year">projects.year</Trans></Typography>
            <Typography variant="h4" >{props.Year}</Typography>
            <Divider variant="middle" />
            <Typography variant="h5"><Trans i18nkey="projects.description" >projects.description</Trans></Typography>
            <Typography variant="h4" ><Trans i18nkey={props.DescriptionKey} >{props.DescriptionKey}</Trans></Typography>
            <Divider variant="middle" />
            <Typography variant="h5" ><Trans i18nkey="projects.skills" >projects.skills</Trans></Typography>
            <Typography variant="h4" ><Trans i18nkey={props.SkillsKey} >{props.SkillsKey}</Trans></Typography>
        </Container>
        <Container sx={{ background: props.color, height: "100%" }}>

            <img
                src={props.src}
                alt={props.title}
                loading="lazy"
               
            />
        </Container>
        </Box>
    );
}

export default ProjectComponent;