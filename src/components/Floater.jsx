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
		files:[],
		filesProcessed: [],
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
		const response = await api.search(query);

		const { error, results:items } = response;
		if (error)
			alert(error);
		else if (items)
			this.setState({ results:{items,query}, content: true });
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
						console.log('floater files:',files,'\nprocessed:',filesProcessed)
						// this.search(filesProcessed);
						alert('converted '+filesProcessed.length+' files to data URI')
					}
				})
			}, false);
			reader.readAsDataURL(file);
		}
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
							<SearchBar search={this.search} onDrop={this.onDrop} id="floater-search" />
						</div>
						<DropZone onDrop={this.onDrop} noClick={true}>
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
