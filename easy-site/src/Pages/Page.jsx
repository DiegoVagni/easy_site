import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Trans } from "react-i18next";
import React from "react";

function Page(props) {
    var content;
    if (props.titleKey) {
      content =  <Typography variant="h5" ><Trans i18nkey={props.titleKey} >{props.titleKey}</Trans></Typography>
    }
    
    return (
        <Container style={{ background: props.color }}>
            { content}
            {props.children }
        </Container>
    );
}

export default Page;