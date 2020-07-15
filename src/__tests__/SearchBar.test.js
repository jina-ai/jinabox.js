import SearchBar from "../SearchBar";
import './golbalTestsSetup';
import { getByPlaceholderText, getByTestId } from "@testing-library/dom";

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
        const jinaSearchBarInput = getByPlaceholderText(container, 'type or drop to search');
        const jinaSearchBarIcon = getByTestId(container, 'jina-search-icon');
        expect(jinaSearchBarIcon.getAttribute('id')).toEqual('jina-search-icon');
        expect(jinaSearchBarInput.getAttribute('id')).toEqual("jina-search-input");
        expect(container).toMatchSnapshot();
    });
});
