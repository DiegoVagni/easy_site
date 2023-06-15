
import { Trans } from "react-i18next";

import logo from "../Resources/logo.svg"

import TeamComponent from "../Components/TeamComponent.jsx"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import React from "react";

import Page from "./Page.jsx"

function Team(props) {
    return (

        <Page color={props.color} maxWidth={false} sx={{
            width: '100%', bgcolor: props.color, display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'stretch',         
            p: 4
        }} titleKey="menu.team">
            <Typography variant="h3" className="PageTitle" >
              <Trans i18nkey="menu.team" >menu.team</Trans>
            </Typography>
            <Box sx={{
                width: '100%', display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'stretch',
                p: 4
            }}>
            <TeamComponent src={logo} title="Thibault Ghielmetti's photo" color={props.color} name="Thibault Ghielmetti" role="Head of Branding" mail="tg@easystudio.ch" />
            <TeamComponent src={logo} title="Patrick De Lorenzi's photo" color={props.color} name="Patrick De Lorenzi" role="Social Manager" mail="pd@easystudio.ch" />
            <TeamComponent src={logo} title="Diego Vagni's photo" color={props.color} name="Diego Vagni" role="Software Engineer" mail="dm@easystudio.ch" />
            <TeamComponent src={logo} title="Arber Kqiku's photo" color={props.color} name="Arber Kqiku" role="Marketing Manager" mail="dm@easystudio.ch" />
                <TeamComponent src={logo} title="Alban Jerliu's photo" color={props.color} name="Alban Jerliu" role="Salesman" mail="dm@easystudio.ch" />
                </Box>
            </Page>
    );
}

export default Team;
