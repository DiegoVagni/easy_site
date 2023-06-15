import { useState } from "react";
import { Trans } from "react-i18next";

import Carousel from "./Carousel3D.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

function TextCarousel(props) {
	const [index, setIndex] = useState(0);

	var content = []
	for (let i = 0; i < props.sections; i++) {
		content.push(<Typography><Trans i18nkey={props.sectionskeys[i]}>{props.sectionskeys[i]}</Trans></Typography>)
	}
	return (<Container>
		<Box>
			{ content}
		</Box>
		<Box>
			<Carousel autoPlay={false} height={ 100} width={ 100}>
				<Box style={{backgroundColor:props.backgroundColor}}>
				</Box>
				{[...props.images] }
			</Carousel>
		</Box>
	</Container>)
}

export default TextCarousel;