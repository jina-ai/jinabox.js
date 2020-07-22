import SearchComponent from './SearchComponent.js';
import _icons from './icons.js';

class SearchBar extends SearchComponent{
	constructor(){
		super();
		this.overlay = this.getElement('jina-expander-overlay');
		this.contentContainer = this.getElement('jina-search-expander');
		this.searchInput = this.getElement('jina-search-input');
		this.searchIcon = this.getElement('jina-search-icon');
		this.init();
	}
}

export default SearchBar;
