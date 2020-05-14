import React from "react";
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import Dropzone from "react-dropzone";

class Searchbar extends React.Component {
	state = {
		query: '',
		files: [],
		filesProcessed: [],
	}
	handleUpdateQuery = (query) => {
		this.setState({ query })
	}
	listenForEnter = (key) => {
		if (key.charCode == 13) {
			this.search()
		}
	}
	search = (query=[this.state.query]) => {
		this.props.search(query);
	}
	onDrop = (acceptedFiles) => {
		console.log('files dropped:', acceptedFiles);
		this.setState({ files: [...this.state.files, ...acceptedFiles] });
		for (let i = 0; i < acceptedFiles.length; ++i) {
			const file = acceptedFiles[i];
			let reader = new FileReader();
			reader.addEventListener("load", ()=>{
				const processed = reader.result;
				this.setState({filesProcessed: [...this.state.filesProcessed,processed]},()=>{
					const {files,filesProcessed} = this.state;
					if(filesProcessed.length===files.length){
						console.log('files:',files,'\nprocessed:',filesProcessed)
						// this.search(filesProcessed);
					}
				})
			}, false);
			reader.readAsDataURL(file);
		}
	}
	clearInputs = () => {
		this.setState({ query: '', files: [], filesProcessed: [] });
	}
	render = () => {
		const { id } = this.props;
		const { query } = this.state;
		return (
			<Dropzone onDrop={this.props.onDrop || this.onDrop} noClick={true} className="no-outline">
				{({ getRootProps, getInputProps, isDragActive }) =>
					<div {...getRootProps()} className={`no-outline p-relative ${isDragActive ? 'drag-active' : ''}`}>
						<input {...getInputProps()} />
						<img src="/icon.png" className="jina-icon" />
						<FormControl
							autocomplete="off"
							id={id || 'searchbar'}
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
