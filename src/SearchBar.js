import SearchComponent from './SearchComponent.js';
import _icons from './icons.js';

class SearchBar extends SearchComponent{
	constructor(){
		super();
		this.innerHTML = `
		<div class="jina-expander-overlay" id="jina-expander-overlay"></div>
		<div class="jina-searchbar-container jina-theme-${this.settings.theme}">
			<div class="jina-expander" id="jina-search-expander"></div>
			<div id="jina-searchbar-background-container" class="jina-bg-default">
				<div class="jina-search-container">
					<img src="${this.defaultSearchIcon}" class="jina-search-icon" id="jina-search-icon" onerror="this.src='${this.defaultSearchIcon}'" />
					<input placeholder="type or drop to search" class="jina-search-input jina-contained" id="jina-search-input" autocomplete="off">
				</div>
			</div>
		</div>
		`;
		this.overlay = document.getElementById('jina-expander-overlay');
		this.contentContainer = document.getElementById('jina-search-expander');
		this.searchInput = document.getElementById('jina-search-input');
		this.searchIcon = document.getElementById('jina-search-icon');
		this.init();
	}
}

export default SearchBar;
