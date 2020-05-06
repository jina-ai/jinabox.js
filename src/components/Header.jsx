import React from "react";
import { Button } from 'react-bootstrap';

class Header extends React.Component {
	render = () => {
		return (
			<div className="p-2 border-bottom d-flex flex-row">
				<Button variant="none">Jina-Box Samle</Button>
				<div className="flex-fill" />
			</div>
		)
	}
}

export default Header;
