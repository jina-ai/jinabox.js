import React from "react";
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import Dropzone from "react-dropzone";

class Searchbar extends React.Component {
	state = {
		query: ''
	}
	handleUpdateQuery = (query) => {
		this.setState({ query })
	}
	listenForEnter = (key) => {
		if (key.charCode == 13) {
			this.search()
		}
	}
	search = () =>{
		const {query} = this.state;
		this.props.search(query);
	}
	onFileDrop = (acceptedFiles) =>{
		console.log('files dropped:',acceptedFiles);
	}
	render = () => {
		const {id} = this.props;
		const { query } = this.state;
		return (
			<Dropzone onDrop={this.onFileDrop} noClick={true} className="no-outline">
				{({ getRootProps, getInputProps, isDragActive }) =>
					<div {...getRootProps()} className={`no-outline p-relative ${isDragActive ? 'drag-active' : ''}`}>
						<input {...getInputProps()} />
						<img src="/icon.png" className="jina-icon" />
						<FormControl
						id={id||'searchbar'}
						className={`jina-search ${isDragActive ? 'drag-active' : ''}`}
						placeholder="search"
						value={query}
						onChange={(e) => this.handleUpdateQuery(e.target.value)} 
						onKeyPress={this.listenForEnter}
						/>
					</div>
				}
			</Dropzone>
		)
	}
}

export default Searchbar;
