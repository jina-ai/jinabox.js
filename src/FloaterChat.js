import SearchComponent from './SearchComponent.js';
import _icons from './icons.js';
import {waitFor}from './utils.js';

class Floater extends SearchComponent{
	constructor(){
		super();

		this.floaterIcon = _icons[this.settings.floaterIcon] || this.settings.floaterIcon;
		this.closeIcon = _icons.closeDark;
		this.showBox = false;

		this.messages = [
			{type:'from',content:'Howdy! Let\'s find you a South Park quote.',contentType:'text'}
		]

		this.renderMessages = () =>{
			let content = '<input type="file" class="jina-expander-file-input jina-floater-file-input" multiple>';
			for(let i=0; i<this.messages.length;++i){
				let message = this.messages[i];
				let item = `
				<div class="jina-message-${message.type}">
				${message.content}
				</div>
				`
				content+=(item);
			}
			this.defaultContent = content;
			console.log('content: ',content)
			return content;
		}

		this.listenForEnter = (key) => {
			if (key.keyCode == 13) {
				let query = this.searchInput.value;
				let message = {type:'to',content:query,contentType:'text'}
				this.messages.push(message);
				this.searchInput.value = '';
				this.renderMessages();
				this.search([query])
			}
		}

		this.showError = async (text) =>{
			await waitFor(2);
			this.removeLoading();
			let message = {type:'from',content:`Error: ${text}`,contentType:'text',theme:'error'};
			this.messages.push(message);
			this.renderMessages();
			this.clearContentContainer();
			this.scrollToBottom();
		}

		this.scrollToBottom = () =>{
			this.contentContainer.scrollTo(0,this.contentContainer.scrollHeight);
		}

		this.showLoadingOriginal = this.showLoading;
		this.showResultsOriginal = this.showResults;

		this.showLoading = (text) =>{
			if(text){
				return this.showLoadingOriginal(text);
			}
			this.removeLoading();
			let content = `
			<div class="jina-jumping-dots">
				<span class="jina-dot"></span>
				<span class="jina-dot"></span>
				<span class="jina-dot"></span>
			</div>
			`;

			this.messages.push({type:'from',content,theme:'loading'});
			this.renderMessages();
			this.clearContentContainer();
			this.scrollToBottom();
		}

		this.showResults = async (index = this.resultsIndex, searchType) => {
			if (searchType === 'live' && !this.liveSearchActive)
				return;
			//TODO: settings > expander height
			let { totalResults, totalTime, onlyImages, queriesContainMedia } = this.resultsMeta;
			if(queriesContainMedia)
			return this.showResultsOriginal();

			let results = this.results;

			this.messages.push({type:'from',content:`I found ${totalResults} quotes:`});
			for(let i=0; i<results[index].length;++i){
				let result = results[index][i];
				this.messages.push({type:'from',content:result.text})
			}
			this.removeLoading();
			this.renderMessages();
			this.clearContentContainer();
			this.scrollToBottom();

			// let results = this.results;
		}

		this.removeLoading = ()=>{
			for (let i=0; i<this.messages.length; ++i) {
				let message = this.messages[i];
				if(message.theme==='loading')
					this.messages.splice(i,1);
			}
		}

		//Override Inherited Methods
		this.handleDrag = () => {
			this.dragCounter++;
			if (this.showBox) {
				this.highlightArea();
				this.highlightSearch();
			} else {
				if(this.settings.showDropzone && this.settings.showDropzone!=='false')
				this.showLargeFloater();
			}
		}
		this.handleDragLeave = () => {
			console.log('leave')
			this.dragCounter--;
			if (this.dragCounter < 1) {
				if (this.showBox) {
					this.unhighlightArea();
					this.unhighlightSearch();
				} else {
					this.hideLargeFloater();
				}
				this.dragCounter = 0;
			}
		}
		this.showContentContainer = () =>{
			if(!this.showBox)
				this.toggleShow();	
		}
		//End Override Inherited Methods

		//Class Specific Methods
		this.toggleShow = () => {
			console.log('toggle show');
			this.hideLargeFloater();
			this.showBox = !this.showBox;
			if (this.showBox) {
				this.floaterBox.classList.add('jina-floater-box-visible');
				this.getElement('jina-floater-button img').src = this.closeIcon;
			} else {
				this.clearDropArea();
				this.floaterBox.classList.remove('jina-floater-box-visible');
				this.getElement('jina-floater-button img').src = this.floaterIcon;
			}
		}
		this.clearDropArea = () => {
			this.clearExpander();
			this.contentContainer.classList.remove('jina-scrollable');
		}
		this.showLargeFloater = () => {
			this.jinaButton.classList.add('jina-floater-large')
			this.jinaButton.classList.add('jina-ready')
		}
		this.hideLargeFloater = () => {
			this.jinaButton.classList.remove('jina-floater-large')
			this.jinaButton.classList.remove('jina-ready')
		}
		this.highlightArea = () => {
			this.contentContainer.classList.add('jina-highlighted')
			this.contentContainer.classList.add('jina-ready')
		}
		this.unhighlightArea = () => {
			this.contentContainer.classList.remove('jina-highlighted')
			this.contentContainer.classList.remove('jina-ready')
		}
		this.highlightSearch = () => {
			// this.searchBackground.classList.add('jina-bg-rainbow');
			this.searchInput.classList.add('jina-highlighted')
		}
		this.unhighlightSearch = () => {
			// this.searchBackground.classList.remove('jina-bg-rainbow');
			this.searchInput.classList.remove('jina-highlighted')
		}
		//End Class Specific Methods

		this.innerHTML = `
		<div class="jina-floater-container jina-theme-${this.settings.theme}">
			<div class="jina-floater jina-floater-button">
				<img src="${this.floaterIcon}" class="jina-floater-icon" draggable="false"/>
			</div>
		</div>
		<div class="jina-floater-box jina-theme-${this.settings.theme}">
			<div class="jina-floater-title">Jina Search</div>
			<div class="jina-floater-results-container" style="margin:0px;">
				${this.renderMessages()}
			</div>
			<div>
			<div class="jina-floater-search-container">
				<div class="jina-bg-default jina-floater-background-search-container">
					<div class="jina-search-container">
						<img src="${this.defaultSearchIcon}" class="jina-search-icon jina-floater-search-icon" onerror="this.src='${this.originalSearchIcon}'"/>
						<input placeholder="type or drop to search" class="jina-search-input jina-contained jina-floater-search-box" autocomplete="off" autofocus>
					</div>
				</div>
			</div>
		`;

		this.overlay = false;
		this.contentContainer = this.getElement('jina-floater-results-container');
		this.searchInput = this.getElement('jina-floater-search-box');
		this.searchIcon = this.getElement('jina-floater-search-icon');
		this.floaterBox = this.getElement('jina-floater-box');
		this.jinaButton = this.getElement('jina-floater-button');

		this.init();

		this.jinaButton.onclick = this.toggleShow;
		this.jinaButton.addEventListener('drop', this.handleDrop, false);
	}
}

export default Floater
