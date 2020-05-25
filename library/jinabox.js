console.log('loading widget')
let _url;
let _results;

const JINA_ICON = 'data:image/png;base64,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';
const TEST_DATA = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA2ElEQVR4nADIADf/AxWcWRUeCEeBO68T3u1qLWarHqMaxDnxhAEaLh0Ssu6ZGfnKcjP4CeDLoJok3o4aOPYAJocsjktZfo4Z7Q/WR1UTgppAAdguAhR+AUm9AnqRH2jgdBZ0R+kKxAFoAME32BL7fwQbcLzhw+dXMmY9BS9K8EarXyWLH8VYK1MACkxlLTY4Eh69XfjpROqjE7P0AeBx6DGmA8/lRRlTCmPkL196pC0aWBkVs2wyjqb/LABVYL8Xgeomjl3VtEMxAeaUrGvnIawVh/oBAAD///GwU6v3yCoVAAAAAElFTkSuQmCC", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA2ElEQVR4nADIADf/AvdGjTZeOlQq07xSYPgJjlWRwfWEBx2+CgAVrPrP+O5ghhOa+a0cocoWnaMJFAsBuCQCgiJOKDBcIQTiLieOrPD/cp/6iZ/Iu4HqAh5dGzggIQVJI3WqTxwVTDjs5XJOy38AlgHoaKgY+xJEXeFTyR7FOfF7JNWjs3b8evQE6B2dTDvQZx3n3Rz6rgOtVlaZRLvR9geCAxuY3G+0mepEAhrTISES3bwPWYYi48OUrQOc//IaJeij9xZGGmDIG9kc73fNI7eA8VMBAAD//0SxXMMT90UdAAAAAElFTkSuQmCC';

let defaultStyles = {
	jinaFloaterContainer: `
	position: fixed;
  bottom: 2em;
  right: 2em;
	`,
	jinaFloater: `
	background: white;
  border: 2px solid #cfd8dc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  height: 3em;
  width: 3em;
  border-radius: 50%;
  position: relative;
	cursor: pointer;`,
	jinaFloaterIcon: `
	width: 1.25em; 
  height: 1.25em;
	position: absolute;
  top: .85rem;
	left: .85rem;
	`,
	jinaFloaterBox: `
	position: fixed;
  background: white;
  border: 2px solid #cfd8dc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  bottom: 6em;
  right: 2em;
  height: 500px;
  max-height: 65vh;
  width: 300px;
	border-radius: 1em;
	display: none;
	flex-direction: column;
	align-items: stretch;
	font-family: sans-serif;
	`,
	jinaSearchInput: `
	font-size:1em;
	border-radius: .5em;
	outline: none;
	padding: .5em;
	border: 2px solid #cfd8dc;
	padding-left: 2.25rem;
	`,
	jinaFloaterSearchContainer: `
	padding: .5em;
	border-radius: .5em .5em 0em 0em;
	position: relative;
	`,
	jinaFloaterResultsContainer: `
	align-content: flex-end;
	border: 2px solid white;
	border-radius: .5em;
	margin: .5em;
	height: 100%;
	overflow-y: auto;
	transition: .2s;
	`,
	jinaFloaterFileInput: `
	display: none;
	`,
	jinaResult: `
	padding: .5em;
	margin: .5em;
  border-radius: .25em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	`,
	jinaResultsArea: `
	font-family: sans-serif;
	padding: .5em;
	height: 100%;
	overflow-y: auto;
	`,
	jinaHighlighted: `
	border-color: #009999
	`,
	jinaSearchIcon: `
	width: 1.25em; 
  height: 1.25em;
	position: absolute;
  top: .55rem;
	left: .55rem;
	`,
	jinaFloaterInstructions: `
	text-align: center;
	opacity: .5;
	`,
	jinaResultsLabel: `
	margin-top: 0px;
	margin-left: .5em;
	opacity: .5;
	`,
	jinaSearchContainer: `
	position: relative;
	`
}

class Floater extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<style>
		.jina-floater-container{${defaultStyles.jinaFloaterContainer}}
		.jina-floater{${defaultStyles.jinaFloater}}
		.jina-floater-icon{${defaultStyles.jinaFloaterIcon}}
		.jina-floater-box{${defaultStyles.jinaFloaterBox}}
		.jina-floater-search-container{${defaultStyles.jinaFloaterSearchContainer}}
		.jina-search-container{${defaultStyles.jinaSearchContainer}}
		.jina-search-icon{${defaultStyles.jinaSearchIcon}}
		.jina-search-input{${defaultStyles.jinaSearchInput}}
		.jina-floater-results-container{${defaultStyles.jinaFloaterResultsContainer}}
		.jina-floater-result{${defaultStyles.jinaResult}}
		.jina-highlighted{${defaultStyles.jinaHighlighted}}
		.jina-contained{width:100%;box-sizing: border-box;}
		.jina-floater-instructions{${defaultStyles.jinaFloaterInstructions}}
		.jina-floater-results-label{${defaultStyles.jinaResultsLabel}}
		#jina-floater-file-input{${defaultStyles.jinaFloaterFileInput}}
		</style>
		<div class="jina-floater-container">
			<div class="jina-floater" id="jina-floater-icon">
				<img src="${JINA_ICON}" class="jina-floater-icon" />
			</div>
		</div>
		<div class="jina-floater-box" ondrag={function(){alert('drag')}} id="jina-floater-box">
			<div class="jina-floater-search-container">
				<div class="jina-search-container">
					<img src="${JINA_ICON}" class="jina-search-icon" />
					<input placeholder="search" class="jina-search-input jina-contained" id="jina-floater-search-box">
				</div>
			</div>
			<div class="jina-floater-results-container" id="jina-floater-drop-area">
				<input type="file" id="jina-floater-file-input" multiple>
				<h2 class="jina-floater-instructions">Search or Drop Files</h2>
			</div>
		</div>
		`;

		this.showBox = false;


		this.jinaButton = document.getElementById('jina-floater-icon');
		this.dropArea = document.getElementById('jina-floater-drop-area');
		this.searchInput = document.getElementById('jina-floater-search-box');

		this.jinaButton.addEventListener('click', this.toggleShow);

		['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
			this.dropArea.addEventListener(eventName, this.preventDefaults, false)
			this.searchInput.addEventListener(eventName, this.preventDefaults, false)
		});
		['dragenter', 'dragover'].forEach(eventName => {
			this.dropArea.addEventListener(eventName, this.highlightArea, false)
			this.searchInput.addEventListener(eventName, this.highlightSearch, false)
		});
		['dragleave', 'drop'].forEach(eventName => {
			this.dropArea.addEventListener(eventName, this.unhighlightArea, false)
			this.searchInput.addEventListener(eventName, this.unhighlightSearch, false)
		});
		this.dropArea.addEventListener('drop', this.handleDrop, false);
		this.searchInput.addEventListener('drop', this.handleDrop, false);

		this.searchInput = document.getElementById('jina-floater-search-box');
		this.searchInput.addEventListener('keydown', this.listenForEnter);
	}

	toggleShow() {
		console.log('toggle show');
		this.showBox = !this.showBox;
		this.floaterBox = document.getElementById('jina-floater-box');
		if (this.showBox) {
			this.floaterBox.style.display = 'flex';
		}
		else {
			this.floaterBox.style.display = 'none';
		}
	}

	listenForEnter = (key) => {
		if (key.keyCode == 13) {
			this.search()
		}
	}

	async search(query = [this.searchInput.value], inBytes = false) {
		console.log('query: ',query);
		console.log('searching...');
		let response = await window.JinaBox.search(query, 10, inBytes);
		console.log('response:', response);
		let results = [];
		let { docs } = response.search;
		for (let i = 0; i < docs.length; ++i) {
			let docResults = docs[i];
			let { topkResults } = docResults;
			for (let j = 0; j < topkResults.length; ++j) {
				const res = topkResults[j];
				results.push({ data: res.matchDoc.dataUri, score: res.score.value, contentType: res.matchDoc.dataUri.startsWith('data:image/') ? 'image' : 'text' });
			}
		}
		this.results = results;
		let html = '';
		console.log('results before:', this.results);
		this.results = this.results.sort((a, b) => { return b.score - a.score });
		console.log('results after:', this.results);
		html += `<p class="jina-floater-results-label">results for ${inBytes ? `${query.length} image input${query.length > 1 ? 's' : ''}` : `"${query}"`}</p>`;
		this.results.map((result, idx) => {
			html += `<div class="jina-floater-result" id="jina-floater-result-${idx}">${result.contentType === 'text' ? result.data : `<img src="${result.data}" class="jina-result-image"/>`}</div>`;
		});
		this.dropArea.innerHTML = html;
		this.results.map((result, idx) => {
			let resultElement = document.getElementById(`jina-floater-result-${idx}`);
			resultElement.addEventListener('click', () => { this.search([result.data], result.data.startsWith('data:image/')) });
		})
	}

	preventDefaults = (e) => {
		e.preventDefault()
		e.stopPropagation()
	}
	handleDrag = function () {
		console.log('handle drag enter');
	}
	handleDragLeave = function () {
		console.log('handle drag leave');
	}
	handleDrop = (e) => {
		console.log('handle drop files');
		let dt = e.dataTransfer;
		let imgsrc = dt.getData('text')
		if (imgsrc) {
			this.search([imgsrc],true);
		}
		else {
			let acceptedFiles = dt.files;
			let processedFiles = [];
			console.log('files: ', acceptedFiles)
			for (let i = 0; i < acceptedFiles.length; ++i) {
				const file = acceptedFiles[i];
				let reader = new FileReader();
				reader.addEventListener("load", () => {
					const processed = reader.result;
					processedFiles.push(processed);
					if (processedFiles.length === acceptedFiles.length)
						this.search(processedFiles, true)
					console.log('processed: ', processed);
				}, false);
				reader.readAsDataURL(file);
			}
		}
	}

	highlightArea = () => {
		this.dropArea.classList.add('jina-highlighted')
	}
	unhighlightArea = () => {
		this.dropArea.classList.remove('jina-highlighted')
	}

	highlightSearch = () => {
		this.searchInput.classList.add('jina-highlighted')
	}
	unhighlightSearch = () => {
		this.searchInput.classList.remove('jina-highlighted')
	}
}

class SearchBar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<style>
		.jina-search-container{${defaultStyles.jinaSearchContainer}}
		.jina-search-icon{${defaultStyles.jinaSearchIcon}}
		.jina-search-input{${defaultStyles.jinaSearchInput}}
		</style>
		<div class="jina-search-container">
			<img src="${JINA_ICON}" class="jina-search-icon" />
			<input placeholder="search" class="jina-search-input" id="jina-search-box">
		</div>
		
		`;

		this.dropArea = document.getElementById('jina-search-box');
		['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => { this.dropArea.addEventListener(eventName, this.preventDefaults, false) });
		['dragenter', 'dragover'].forEach(eventName => {
			this.dropArea.addEventListener(eventName, this.highlight, false)
		});
		['dragleave', 'drop'].forEach(eventName => {
			this.dropArea.addEventListener(eventName, this.unhighlight, false)
		});
		this.dropArea.addEventListener('drop', this.handleDrop, false);

		this.searchInput = document.getElementById('jina-search-box');
		this.searchInput.addEventListener('keydown', this.listenForEnter);
	}

	async search(query = [this.searchInput.value], inBytes = false) {
		console.log('searching...');
		let response = await window.JinaBox.search(query, 10, inBytes);
		console.log('response:', response);
		let results = [];
		let { docs } = response.search;
		for (let i = 0; i < docs.length; ++i) {
			let docResults = docs[i];
			let { topkResults } = docResults;
			for (let j = 0; j < topkResults.length; ++j) {
				const res = topkResults[j];
				results.push({ data: res.matchDoc.dataUri, score: res.score.value, contentType: res.matchDoc.dataUri.startsWith('data:image/') ? 'image' : 'text' });
			}
		}
		this.results = results;
		this.results = this.results.sort((a, b) => { return b.score - a.score });
		let html = '';
		console.log('this.results:', this.results);
		html += `<p class="jina-results-label">results for ${inBytes ? `${query.length} image input${query.length > 1 ? 's' : ''}` : `"${query}"`}</p>`;
		this.results.map((result, idx) => {
			html += `<div class="jina-result" id="jina-result-${idx}">${result.contentType === 'text' ? result.data : `<img src="${result.data}" class="jina-result-image"/>`}</div>`;
		});
		this.resultsArea = document.getElementById('jina-results-area');
		this.resultsArea.innerHTML = html;
		this.results.map((result, idx) => {
			let resultElement = document.getElementById(`jina-result-${idx}`);
			resultElement.addEventListener('click', () => { this.search([result.data], result.data.startsWith('data:image/')) });
		})
	}

	listenForEnter = (key) => {
		if (key.keyCode == 13) {
			this.search()
		}
	}

	preventDefaults = (e) => {
		e.preventDefault()
		e.stopPropagation()
	}

	handleDrop = (e) => {
		console.log('handle drop files');
		let dt = e.dataTransfer;
		let imgsrc = dt.getData('text')
		if (imgsrc) {
			this.search([imgsrc],true);
		}
		else {
			let acceptedFiles = dt.files;
			let processedFiles = [];
			console.log('files: ', acceptedFiles)
			for (let i = 0; i < acceptedFiles.length; ++i) {
				const file = acceptedFiles[i];
				let reader = new FileReader();
				reader.addEventListener("load", () => {
					const processed = reader.result;
					processedFiles.push(processed);
					if (processedFiles.length === acceptedFiles.length)
						this.search(processedFiles, true)
					console.log('processed: ', processed);
				}, false);
				reader.readAsDataURL(file);
			}
		}
	}

	highlight = () => {
		this.dropArea.classList.add('jina-highlighted')
	}
	unhighlight = () => {
		this.dropArea.classList.remove('jina-highlighted')
	}
}

class Results extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<style>
		.jina-results-area{${defaultStyles.jinaResultsArea}}
		.jina-results-label{${defaultStyles.jinaResultsLabel}}
		.jina-result{${defaultStyles.jinaResult}}
		</style>
		<div class="jina-results-area" id="jina-results-area"></div>
		`;
		this.dropArea = document.getElementById('jina-search-box');
		this.dropArea.addEventListener('dragenter', this.handleDrag)
		this.dropArea.addEventListener('drop', this.handleDrop);
		this.dropArea.addEventListener('dragleave', this.handleDragLeave);
	}
	handleDrag = function () {
		console.log('handle drag enter');
	}
	handleDragLeave = function () {
		console.log('handle drag leave');
	}
}

window.customElements.define('jina-floater', Floater);
window.customElements.define('jina-searchbar', SearchBar);
window.customElements.define('jina-results', Results);

window.JinaBox = {
	init: function (url) {
		_url = url;
		console.log('initialized with ', url);
	},
	search: async function (data, top_k = 10, inBytes = false) {
		const results = await fetch(_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ data, top_k, mode: 'search' })
		})
		return results.json();
	}
}
