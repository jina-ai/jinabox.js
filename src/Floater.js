import { defaultPlaceholders, defaultSettings } from './config';
import { getDataUri, waitFor } from './utils';
import _icons from './icons';

class Floater extends HTMLElement {
  constructor() {
    super();

    this.typeWriter = (text_list, i = 0, text_list_i = 0, delay_next_char = 100, delay_next_item = 1000) => {
      // console.log('floater typewriter ',new Date());
      if (!i) {
        this.searchInput.placeholder = "";
      }
      let txt = text_list[text_list_i];
      if (i < txt.length) {
        this.searchInput.placeholder += txt.charAt(i);
        i++;
        setTimeout(this.typeWriter, delay_next_char, text_list, i, text_list_i, delay_next_char, delay_next_item);
      } else {
        text_list_i++;
        if (typeof text_list[text_list_i] === "undefined") {
          setTimeout(this.typeWriter, delay_next_item, text_list, 0, 0, delay_next_char, delay_next_item);
        } else {
          i = 0;
          setTimeout(this.typeWriter, delay_next_item, text_list, i, text_list_i, delay_next_char, delay_next_item);
        }
      }
    }

    this.search = async (query = [this.searchInput.value], inBytes = false) => {
      console.log('query: ', query);
      if (!inBytes || query.length > 1) {
        console.log('removing search icon')
        this.searchIcon.src = this.originalSearchIcon;
        this.searchIcon.classList.remove('jina-border-right');
      }

      this.showLoading();
      await waitFor(2)
      console.log('searching...');
      let response;
      let startTime = new Date();
      try {
        response = await window.JinaBox.search(query, 16, inBytes);
        this.dropped = false;
      } catch (e) {
        this.dropped = false;
        console.log('error');
        return this.showError(e);
      }
      let endTime = new Date();
      let totalTime = Math.round((endTime - startTime) / 10) / 100;
      console.log('response:', response);
      let results = [];
      let queries = [];
      let totalResults = 0;
      let queriesContainMedia = false;
      let resultsContainText = false;
      let onlyImages = true;
      let { docs } = response.search;
      let { code, description } = response.status || {};
      if (code == 'ERROR')
        return this.showError(description);

      try {
        for (let i = 0; i < docs.length; ++i) {
          let docResults = docs[i];
          let { topkResults, uri, mimeType } = docResults;
          if (docResults.mimeType !== 'text/plain')
            queriesContainMedia = true;
          queries.push({ uri, mimeType });

          for (let j = 0; j < topkResults.length; ++j) {
            const res = topkResults[j];
            if (!results[i])
              results[i] = [];
            if (res.matchDoc.mimeType === 'text/plain')
              resultsContainText = true;
            if (!res.matchDoc.mimeType.startsWith('image'))
              onlyImages = false;

            results[i].push({
              mimeType: res.matchDoc.mimeType,
              data: res.matchDoc.uri,
              text: res.matchDoc.text,
              score: res.score.value,
            });
            totalResults++;
          }
        }
      }
      catch (e) {
        return this.showError('Could not get results')
      }

      for (let i = 0; i < results.length; ++i) {
        results[i] = results[i].sort((a, b) => {
          return b.score - a.score
        });
      }
      this.queries = queries;
      this.results = results;
      this.resultsMeta = { totalTime, totalResults, resultsContainText, queriesContainMedia, onlyImages };

      this.showResults(0);
    }

    this.showError = (message = 'could not reach server') => {
      this.dropArea.innerHTML = `
			<div class="jina-dropdown-message jina-error unselectable">
    		<div class="jina-face jina-roll"><div class="eye"></div><div class="eye right"></div><div class="mouth sad"></div>
        	</div>
   			<div class="jina-shadow jina-move"></div>
				<h4 class="alert">Error!</h4>
				<p>${message}</p>
				<button id="jina-floater-error-ok">Ok</button>
			</div>
		`
      this.errorButton = document.getElementById('jina-floater-error-ok')
      this.errorButton.onclick = this.clearDropArea;
    }

    this.showLoading = () => {
      this.dropArea.innerHTML = `
			<div class="jina-sea">
				<p class="title">Searching</p>
				<span class="jina-wave"></span>
				<span class="jina-wave"></span>
				<span class="jina-wave"></span>
			</div>
		`
    }

    this.clearDropArea = () => {
      this.dropArea.classList.remove('jina-scrollable');
      this.dropArea.innerHTML = `
			<input type="file" id="jina-floater-file-input" class="jina-floater-file-input" multiple>
				<h3 class="jina-floater-instructions">Drop here to search</h3>
				`
    }

    this.showResults = (index = this.resultsIndex) => {
      //TODO: settings > expander height
      this.resultsIndex = index;
      let resultsHTML = '';
      let toolbar;
      let results = this.results;
      let queries = this.queries;
      let { totalResults, totalTime, onlyImages, queriesContainMedia } = this.resultsMeta;

      if (queries.length > 1 || queriesContainMedia) {
        toolbar = `
				<div class="jina-results-toolbar">
					<div class="jina-results-tabs">`;

        if (queriesContainMedia)
          for (let i = 0; i < queries.length; ++i) {
            toolbar += this.renderPreviewTab(queries[i], i, index === i);
          }
        if (onlyImages)
          toolbar += `
					</div>
					<img class="jina-results-action-button${this.resultsView === 'list' ? ' jina-active' : ''}" src="${_icons.listView}" id="jina-toolbar-button-list" draggable="false">
					<img class="jina-results-action-button${this.resultsView === 'grid' ? ' jina-active' : ''}" src="${_icons.gridView}" id="jina-toolbar-button-grid" draggable="false">`

        toolbar += '</div></div>'
      }

      resultsHTML += `<p class="jina-results-label">${totalResults} results in ${totalTime} seconds</p>`;

      for (let i = 0; i < results[index].length; ++i) {
        let result = results[index][i];
        result.index = i;
        resultsHTML += this.renderResult(result);
      }

      this.dropArea.innerHTML = `
				${toolbar || ''}
				<div class="jina-expander-results-area">
					${resultsHTML}
				</div>
				`;
      if (toolbar) {
        for (let i = 0; i < queries.length; ++i) {
          document.getElementById(`jina-results-tab-${i}`).addEventListener('click', () => this.showResults(i));
        }
        if (onlyImages) {
          document.getElementById("jina-toolbar-button-list").addEventListener('click', () => this.setResultsView('list'));
          document.getElementById("jina-toolbar-button-grid").addEventListener('click', () => this.setResultsView('grid'));
        }
      }

      results[index].map((result, idx) => {
        let resultElement = document.getElementById(`jina-result-${idx}`);
        resultElement.addEventListener('click', () => {
          if (result.mimeType.startsWith('text')) {
            this.searchInput.value = result.text;
            this.search()
          } else {
            this.search([result.data], true);
            this.searchIcon.src = result.data;
            this.searchIcon.classList.add('jina-border-right');
          }
        });
      })
    }

    this.renderResult = (result) => {
      if (result.mimeType.startsWith('text')) {
        return `<div class="jina-result jina-text-result" id="jina-result-${result.index}">${result.text}</div>`
      }
      else if (result.mimeType.startsWith('image')) {
        if (this.resultsView === 'grid')
          return `<div class="jina-grid-container"><div class="jina-result" id="jina-result-${result.index}"><img src="${result.data}" class="jina-result-image"/></div></div>`
        else
          return `<div class="jina-result" id="jina-result-${result.index}"><img src="${result.data}" class="jina-result-image"/></div>`
      }
      else if (result.mimeType.startsWith('audio')) {
        return `<div class="jina-result" id="jina-result-${result.index}"><audio src="${result.data}" class="jina-result-audio" controls></audio></div>`
      }
      else if (result.mimeType.startsWith('video')) {
        return `<div class="jina-result" id="jina-result-${result.index}"><video src="${result.data}" class="jina-result-video" controls autoplay muted loop></video></div>`
      }
    }

    this.renderPreviewTab = (query, i, active) => {
      const { uri, mimeType } = query
      return `
			<div class="jina-results-tab${active ? ' jina-active' : ''}" id="jina-results-tab-${i}">
			${
        (mimeType.startsWith('image')) ?
          `<div class="jina-results-tab-img" style="background:url(${uri});background-size: cover;"></div>`
          :
          (mimeType.startsWith('video')) ?
            `<video class="jina-results-tab-video" src="${uri}" autoplay muted loop></video>`
            :
            (mimeType.startsWith('audio')) ?
              `<audio controls class="jina-results-tab-audio" src="${uri}"></audio>`
              : ''
        }
			</div>`
    }

    this.setResultsView = (view) => {
      localStorage.setItem('jina-floater-results-view', view);
      this.resultsView = view;
      this.showResults();
    }

    this.listenForEnter = (key) => {
      if (key.keyCode == 13) {
        this.search()
      }
    }

    this.preventDefaults = (e) => {
      e.preventDefault()
      e.stopPropagation()
    }

    this.handleDrag = () => {
      this.dragCounter++;
      if (this.showBox) {
        this.highlightArea();
        this.highlightSearch();
      } else {
        this.showLargeFloater();
      }
    }

    this.handleDragLeave = () => {
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

    this.handleDrop = async (e) => {
      this.dropped = true;
      console.log('handle drop files');
      console.log('drop event:', e);
      let dt = e.dataTransfer;
      let imgsrc = dt.getData('URL');
      console.log('imgsrc: ', imgsrc)
      if (!this.showBox) {
        console.log('toggling')
        this.toggleShow()
      }
      if (imgsrc) {
        if (imgsrc.startsWith('data:')) {
          this.search([imgsrc], true);
          this.searchIcon.src = imgsrc;
          this.searchIcon.classList.add('jina-border-right');
        } else {
          let dataURI;
          try {
            dataURI = await getDataUri(imgsrc);
          } catch (e) {
            dataURI = imgsrc;
          }
          console.log('dataUri:', dataURI);
          this.searchIcon.src = dataURI;
          this.searchIcon.classList.add('jina-border-right');
          this.search([imgsrc], true);
        }
      } else {
        let acceptedFiles = dt.files;
        let processedFiles = [];
        console.log('files: ', acceptedFiles)
        for (let i = 0; i < acceptedFiles.length; ++i) {
          const file = acceptedFiles[i];
          let reader = new FileReader();
          reader.addEventListener("load", () => {
            const processed = reader.result;
            processedFiles.push(processed);
            if (processedFiles.length === acceptedFiles.length) {
              this.search(processedFiles, true)
              if (processedFiles.length < 2) {
                this.searchIcon.src = processedFiles[0];
                this.searchIcon.classList.add('jina-border-right');
              }
            }
            console.log('processed: ', processed);
          }, false);
          reader.readAsDataURL(file);
        }
      }
    }

    this.toggleShow = () => {
      console.log('toggle show');
      this.hideLargeFloater();
      this.showBox = !this.showBox;
      if (this.showBox) {
        this.floaterBox.classList.add('jina-floater-box-visible');
        document.querySelector('#jina-floater-icon img').src = this.closeIcon;
      } else {
        this.clearDropArea();
        this.floaterBox.classList.remove('jina-floater-box-visible');
        document.querySelector('#jina-floater-icon img').src = this.floaterIcon;
      }
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
      this.dropArea.classList.add('jina-highlighted')
      this.dropArea.classList.add('jina-ready')
    }
    this.unhighlightArea = () => {
      this.dropArea.classList.remove('jina-highlighted')
      this.dropArea.classList.remove('jina-ready')
    }

    this.highlightSearch = () => {
      // this.searchBackground.classList.add('jina-bg-rainbow');
      this.searchInput.classList.add('jina-highlighted')
    }
    this.unhighlightSearch = () => {
      // this.searchBackground.classList.remove('jina-bg-rainbow');
      this.searchInput.classList.remove('jina-highlighted')
    }

    this.settings = {};

    let options = Object.keys(defaultSettings);
    for (let i = 0; i < options.length; ++i) {
      const attr = options[i];
      this.settings[attr] = this.getAttribute(attr) || defaultSettings[attr];
    }

    if (!this.getAttribute('floaterIcon')) {
      if (this.settings.theme !== 'default') {
        this.settings.floaterIcon = 'inverse';
      }
    }

    if (this.settings.theme !== 'default')
      this.closeIcon = _icons.closeLight;
    else
      this.closeIcon = _icons.closeDark;

    this.floaterIcon = _icons[this.settings.floaterIcon] || this.settings.floaterIcon;
    const searchIcon = _icons[this.settings.searchIcon] || this.settings.searchIcon;

    this.originalSearchIcon = searchIcon;

    this.innerHTML = `
		<div class="jina-floater-container jina-theme-${this.settings.theme}">
			<div class="jina-floater" id="jina-floater-icon">
				<img src="${this.floaterIcon}" class="jina-floater-icon"/>
				<h4 class="jina-floater-label">Drop here</h4>
			</div>
		</div>
		<div class="jina-floater-box jina-theme-${this.settings.theme}" id="jina-floater-box">
			<div class="jina-floater-search-container">
				<div id="jina-floater-background-search-container" class="jina-bg-default">
					<div class="jina-search-container">
						<img src="${searchIcon}" class="jina-search-icon" id="jina-floater-search-icon" onerror="this.src='${this.originalSearchIcon}'"/>
						<input placeholder="type or drop to search" class="jina-search-input jina-contained" id="jina-floater-search-box" autocomplete="off">
					</div>
				</div>
			</div>
			<div class="jina-floater-results-container" id="jina-floater-drop-area">
				<input type="file" id="jina-floater-file-input" class="jina-floater-file-input" multiple>
				<h3 class="jina-floater-instructions">Drop here to search</h3>
			</div>
		</div>
		`;

    this.showBox = false;
    this.dragCounter = 0;

    this.jinaButton = document.getElementById('jina-floater-icon');
    this.dropArea = document.getElementById('jina-floater-drop-area');
    this.searchInput = document.getElementById('jina-floater-search-box');
    this.searchBackground = document.getElementById('jina-floater-background-search-container');
    this.floaterBox = document.getElementById('jina-floater-box');
    this.searchIcon = document.getElementById('jina-floater-search-icon');

    this.jinaButton.addEventListener('click', this.toggleShow);

    ['drag', 'dragenter', 'dragover', 'dragleave', 'dragexit', 'drop'].forEach(eventName => {
      document.addEventListener(eventName, this.preventDefaults, false);
    });
    ['dragenter'].forEach(eventName => {
      document.addEventListener(eventName, this.handleDrag, false);
    });
    ['dragleave', 'drop', 'dragexit'].forEach(eventName => {
      document.addEventListener(eventName, this.handleDragLeave, false);
    });

    this.dropArea.addEventListener('drop', this.handleDrop, false);
    this.jinaButton.addEventListener('drop', this.handleDrop, false);
    this.searchInput.addEventListener('drop', this.handleDrop, false);

    this.searchInput = document.getElementById('jina-floater-search-box');
    this.searchInput.addEventListener('keydown', this.listenForEnter);
    this.searchInput.addEventListener('focus', this.highlightSearch);
    this.searchInput.addEventListener('blur', this.unhighlightSearch);

    this.resultsView = localStorage.getItem('jina-floater-results-view') || 'list';

    console.log('settings: ', this.settings)
    if (this.settings.typewriterEffect) {
      const placeholders = JSON.parse(this.getAttribute('placeholders'));
      this.typeWriter(placeholders || defaultPlaceholders, 0, 0, this.settings.typewriterDelayCharacter, this.settings.typewriterDelayItem);
    }
  }
}

export default Floater;
