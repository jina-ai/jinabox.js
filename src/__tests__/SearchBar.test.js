import SearchBar from "../SearchBar";
import icons from "../icons";
import '../../golbalTestsSetup';
import { getByPlaceholderText, getBy } from "@testing-library/dom";

describe('SearchBar test', () => {
    let container;
    beforeAll(() => {
        window.customElements.define('jina-searchbar', SearchBar);
    });
    beforeEach(() => {
        const div = document.createElement('div');
        div.innerHTML = `<jina-searchbar></jina-searchbar>`;
        container = div;
    });
    it('should show search bar with icon and placeholder on input element', function () {
        expect(container.querySelector(".jina-search-input").getAttribute("placeholder")).toEqual('type or drop to search');
        expect(container.querySelector(".jina-search-icon").getAttribute("src")).toEqual(icons.color);
    });
});
