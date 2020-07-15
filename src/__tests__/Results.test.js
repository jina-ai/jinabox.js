import Results from '../Results';
import '../../golbalTestsSetup';
import { getByTestId, } from '@testing-library/dom'

describe('jina-results tests', () => {
    let container;

    beforeAll(() => {
        window.customElements.define('jina-results', Results);
    });

    beforeEach(() => {
        const div = document.createElement('div');
        div.innerHTML = `<jina-results></jina-results>`;
        container = div;
    });

    it('should get default inner HTML when first render', async () => {
        const jinaResults = getByTestId(container, 'jina-results-area');
        expect(jinaResults).toContainHTML(`<div class="jina-results-area" id="jina-results-area"></div>`);
        expect(container).toMatchSnapshot();
    });
});
