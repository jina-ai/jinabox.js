import React from "react";
import { FromControl, FormGroup, InputGroup } from 'react-bootstrap';
import SearchBar from './SearchBar';
import DropZone from 'react-dropzone';
import Results from './Results'
import api from '../api';
import { CSSTransition } from "react-transition-group";

class Floater extends React.Component {
	state = {
		active: false,
		content: false,
		results: [],
	}
	toggle = () => {
		this.setState({ active: !this.state.active }, function () {
			if (this.state.active)
				document.getElementById('floater-search').focus();
		});
	}
	search = async (query) => {
		console.log('searching for ', query);
		const response = await api.search([query]);

		const { error, results:items } = response;
		if (error)
			alert(error);
		else if (items)
			this.setState({ results:{items,query}, content: true });
	}
	render = () => {
		const { active, content,results } = this.state;
		return (
			<div>
				<div className="floater-container">
					<div className="floater-icon" onClick={this.toggle}>
						<img src="/icon.png" className="jina-icon my-auto mx-auto" />
					</div>
				</div>
				<CSSTransition
					in={active}
					unmountOnExit
					timeout={500}
					classNames="jina-box-floater"
					>
					<div className="floater-box p-2 d-flex flex-column">
						<div className="pb-2">
							<SearchBar search={this.search} id="floater-search" />
						</div>
						<DropZone onDrop={() => alert('drop')} noClick={true}>
							{({ getRootProps, getInputProps, isDragActive }) =>
								<div {...getRootProps()} className={`no-outline flex-fill results ${isDragActive ? 'drag-active' : ''}`}>
									<input {...getInputProps()} />
									{
										content ?
											<Results results={results} search={this.search}/>
											:
											<h3 className="text-center text-muted mt-4">Search or Drop Files</h3>
									}
								</div >
							}
						</DropZone>
					</div>
				</CSSTransition>
			</div>
		)
	}
}

export default Floater;
