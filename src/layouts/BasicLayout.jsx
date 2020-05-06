import React from "react";
import { Container } from "react-bootstrap";
import Header from '../components/Header';
import Floater from '../components/Floater';

class BasicLayout extends React.Component {
	render = () => {
		return (
			<Container fluid className="app-container px-0">
				<Header />
				{
					children
				}
				<Floater />
			</Container>
		)
	}
}

export default BasicLayout;