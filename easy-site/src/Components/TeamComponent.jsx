import './TeamComponent.css';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function TeamComponent(props) {
    return (
        <Container sx={{
            maxWidth: 380,
            maxHeight: 500,
            
mb:2       }}>
     
            <img
                src={props.src}
                className="images"

                alt={props.title}
                loading="lazy"
               />
            
            
            <Typography variant="h3" className="name" >
                {props.name}
                </Typography>
            
            <Typography variant="h5" className="role">
                {props.role}
            </Typography>
            <Typography variant="h4" className="mail">
                {props.mail}
            </Typography>
        </Container>
            );
}

export default TeamComponent;
