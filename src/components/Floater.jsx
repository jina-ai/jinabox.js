import React from "react";
import { FromControl, FormGroup, InputGroup } from 'react-bootstrap';
import SearchBar from './SearchBar';
import DropZone from 'react-dropzone';

class Floater extends React.Component {
	state = {
		active: false,
		content: false
	}
	toggle = () => {
		this.setState({ active: !this.state.active });
	}
	renderContent = () => {
		const content = [
			<div className="empty-content mx-2" />,
			<div className="empty-content mx-2" />,
			<div className="empty-content mx-2" />,
			<div className="empty-content mx-2" />
		]
		return content;
	}
	render = () => {
		const { active,content } = this.state;
		return (
			<div>
				<div className="floater-container">
					<div className="floater-icon" onClick={this.toggle}>
						<img src="/icon.png" className="jina-icon my-auto mx-auto" />
					</div>
				</div>
				<div className={`${!active ? 'd-none' : ''} floater-box p-2 d-flex flex-column`}>
					<div className="pb-2">
						<SearchBar />
					</div>
					<DropZone onDrop={() => alert('drop')} noClick={true}>
						{({ getRootProps, getInputProps, isDragActive }) =>
							<div {...getRootProps()} className={`no-outline flex-fill results ${isDragActive ? 'drag-active' : ''}`}>
								<input {...getInputProps()} />
								{
									content?
									this.renderContent()
									:
									<h3 className="text-center text-muted mt-4">Search or Drop Files</h3>
								}
							</div >
						}
					</DropZone>
				</div>
			</div>
		)
	}
}

export default Floater;
