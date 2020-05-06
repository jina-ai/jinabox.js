import React from "react";
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import Dropzone from "react-dropzone";

class Searchbar extends React.Component {
	render = () => {
		return (
			<Dropzone onDrop={() => alert('drop')} noClick={true} className="no-outline">
				{({ getRootProps, getInputProps, isDragActive }) =>
					<div {...getRootProps()} className={`no-outline p-relative ${isDragActive ? 'drag-active' : ''}`}>
						<input {...getInputProps()} />
						<img src="/icon.png" className="jina-icon" />
						<FormControl className={`jina-search ${isDragActive ? 'drag-active' : ''}`} placeholder="search" />
					</div>
				}
			</Dropzone>
		)
	}
}

export default Searchbar;
