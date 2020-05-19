console.log('loading widget')
let _url;
let _results;

let defaultStyles = {
	floaterContainer: `
	position: absolute;
  bottom: 2em;
  right: 2em;
	`,
	floater: `
	background: white;
  border: 2px solid #cfd8dc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  height: 3em;
  width: 3em;
  border-radius: 50%;
  position: relative;
	cursor: pointer;`,
	floaterIcon: `
	width: 1.5em; 
  height: 1.5em;
	position: absolute;
  top: .65em;
  left: .75em;
	`,
	floaterBox: `
	position: absolute;
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
	`,
	jinaSearch: `
	font-size:1em;
	border-radius: .5em;
	outline: none;
	padding: .5em;
	`,
	jinaFloaterSearchContainer: `
	padding: .5em;
	`,
	jinaFloaterResultsContainer: `
	border: 1px solid green;
	align-content: flex-end;
	margin: .5em;
	height: 100%;
	overflow-y: auto;
	border-radius: .5em;
	`,
	jinaFloaterFileInput: `
	display: none;
	`
}

class Floater extends HTMLElement {
	constructor() {
		super();
		// this.attachShadow({mode:'open'});
		const styles = this.getAttribute('style') || {};
		this.innerHTML = `
		<style>
		.jina-floater-container{${styles.floaterContainer || defaultStyles.floaterContainer}}
		.jina-icon{${styles.floater || defaultStyles.floater}}
		.jina-floater-icon{${styles.floaterIcon || defaultStyles.floaterIcon}}
		.jina-floater-box{${styles.floaterBox || defaultStyles.floaterBox}}
		.jina-floater-search-container{${styles.jinaFloaterSearchContainer || defaultStyles.jinaFloaterSearchContainer}}
		.jina-search{${styles.jinaSearch || defaultStyles.jinaSearch}}
		.jina-floater-results-container{${styles.jinaFloaterResultsContainer || defaultStyles.jinaFloaterResultsContainer}}
		#jina-floater-file-input{${styles.jinaFloaterFileInput || defaultStyles.jinaFloaterFileInput}}
		</style>
		<div class="jina-floater-container">
			<div class="jina-icon"  id="jina-floater-icon">
				<img src="https://pbs.twimg.com/profile_images/1246021554686713857/sU8AgR4n_400x400.jpg" class="jina-floater-icon" />
			</div>
		</div>
		<div class="jina-floater-box" ondrag={function(){alert('drag')}} id="jina-floater-box">
			<div class="jina-floater-search-container">
				<input placeholder="search" class="jina-search" id="jina-floater-search-box">
			</div>
			<div class="jina-floater-results-container" id="jina-floater-drop-area">
			<input type="file" id="jina-floater-file-input" multiple>
			</div>
		</div>
		`;
		this.showBox = false;
		this.dropArea = document.getElementById('jina-floater-drop-area');
		this.dropArea.addEventListener('dragenter', this.handleDrag)
		this.dropArea.addEventListener('drop', this.handleDrop);
		this.dropArea.addEventListener('dragleave', this.handleDragLeave);
		this.dropArea.ondrop = this.handleDrop;

		this.jinaButton = document.getElementById('jina-floater-icon');
		this.jinaButton.addEventListener('click', this.toggleShow);

	}

	toggleShow() {
		console.log('hello');
		this.showBox = !this.showBox;
		this.floaterBox = document.getElementById('jina-floater-box');
		if (this.showBox) {
			this.floaterBox.style.display = 'flex';
		}
		else {
			this.floaterBox.style.display = 'none';
		}
	}
	handleDrag = function () {
		console.log('handle drag enter');
	}
	handleDragLeave = function () {
		console.log('handle drag leave');
	}
	handleDrop = function (e) {
		console.log('handle drop files');
	}
}

class SearchBar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<style>
		.jina-search{${defaultStyles.jinaSearch}}
		</style>
		<input placeholder="search" class="jina-search" id="jina-search-box">
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
	handleDrop = function () {
		console.log('handle drop files');
	}
}

class Results extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<style>
		.jina-search{${defaultStyles.jinaSearch}}
		</style>
		<input placeholder="search" class="jina-search" id="jina-search-box">
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
	handleDrop = function () {
		console.log('handle drop files');
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
	search: async function (queries, top_k = 10) {
		xhr = new XMLHttpRequest();
		const results = await fetch(`${_url}/search`, {
			method: 'POST',
			body: JSON.stringify({ queries, top_k })
		})
		console.log('result:', results);
		_results = results.json();
		return _results;

	}
}