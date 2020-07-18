import { defaultPlaceholders, defaultSettings } from './config.js';
import { getDataUri, waitFor } from './utils.js';
import _icons from './icons.js';

class JinaBoxSearchComponent extends HTMLElement {
	constructor() {
		super();

		this.typeWriter = (text_list, i = 0, text_list_i = 0, delay_next_char = 100, delay_next_item = 1000) => {
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
				this.searchIcon.src = this.defaultSearchIcon;
				this.searchIcon.classList.remove('jina-border-right');
			}

			if (this.searchType !== 'live')
				this.showLoading();

			console.log('searching');
			let response;
			let startTime = new Date();
			try {
				response = await window.JinaBox.search(query, 16, inBytes);
			} catch (e) {
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
			for (let i = 0; i < results.length; ++i) {
				results[i] = results[i].sort((a, b) => {
					return b.score - a.score
				});
			}
			this.queries = queries;
			this.results = results;
			this.resultsMeta = { totalTime, totalResults, resultsContainText, queriesContainMedia, onlyImages };

			this.resultsIndex = 0;
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

		this.handleDrop = async (e) => {
			this.dropped = true;
			let dt = e.dataTransfer;
			let text = dt.getData('Text');
			let imgsrc = dt.getData('URL');
			console.log('text: ', text)
			console.log('imgsrc: ', imgsrc)
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
			}
			else if (text) {
				this.searchInput.value = text;
				this.search()
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

		this.handleUpload = (e) => {
			let acceptedFiles = e.target.files;
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

		this.showContentContainer = () => {
			if (this.overlay) {
				this.overlay.style.display = 'block';
				this.overlay.style.opacity = '1';
			}
			this.contentContainer.style.height = 'auto';
			this.contentContainer.style.opacity = 1;
		}

		this.clearContentContainer = () => {
			this.dropped = false;
			this.searchType = '';
			if (this.overlay) {
				this.overlay.style.display = 'none';
				this.overlay.style.opacity = '0';
			}
			this.contentContainer.innerHTML = this.defaultContent || ''
		}

		//TODO: replace functional parts with onDragEnter()
		this.handleDrag = () => {
			this.dragCounter++;
			if (!this.highlighted) {
				if (this.settings.showDropzone && this.settings.showDropzone !== 'false')
					this.showContentContainer();
				this.contentContainer.innerHTML = `
				<div class="jina-dropdown-message jina-ready unselectable">
    			<div class="jina-face"><div class="eye"></div><div class="eye right"></div><div class="mouth happy"></div></div>
    			<div class="jina-shadow jina-scale"></div>
					<h4 class="alert">Drop here</h4>
					<p>Drop any content here from webpage/local to search</p>
				</div>
				`
				this.highlighted = true;
			}
		}

		//TODO: replace functional parts with onDragLeave()
		this.handleDragLeave = () => {
			this.dragCounter--;
			if (this.dragCounter < 1) {
				this.searchInput.classList.remove('jina-highlighted');
				if (!this.dropped) {
					this.clearExpander();
				}
				this.dragCounter = 0;
			}
		}

		this.showInputOptions = async () => {
			this.showContentContainer();
			this.contentContainer.innerHTML = `
			<div class="jina-input-options">
				<input type="file" class="jina-floater-file-input" id="jina-expander-file-input" multiple>
				<button class="jina-action-button" id="jina-expander-file-input-trigger">Upload Files</button>
				<button class="jina-action-button" id="jina-expander-capture-media-button">Camera Search</button>
				${
				window.MediaRecorder ?
					'<button class="jina-action-button" id="jina-expander-capture-audio-button">Audio Search</button>'
					:
					''
				}
				${
				navigator.mediaDevices && (navigator.mediaDevices.getDisplayMedia || navigator.getDisplayMedia) ?
					'<button class="jina-action-button" id="jina-expander-capture-screen-button">Screen Capture</button>'
					:
					''
				}
				
			</div>
		`;
			document.getElementById('jina-expander-file-input-trigger').onclick = function () { document.getElementById('jina-expander-file-input').click() };
			document.getElementById('jina-expander-file-input').addEventListener('change', this.handleUpload);

			let captureMediaButton = document.getElementById('jina-expander-capture-media-button');
			if (captureMediaButton)
				captureMediaButton.addEventListener('click', this.showCaptureMedia);

			let captureScreenButton = document.getElementById('jina-expander-capture-screen-button');
			if (captureScreenButton)
				captureScreenButton.addEventListener('click', this.showCaptureScreen);

			let captureAudioButton = document.getElementById('jina-expander-capture-audio-button')
			if (captureAudioButton)
				captureAudioButton.addEventListener('click', this.showCaptureAudio);
		}

		this.showCaptureMedia = async (e) => {
			this.searchType = 'capture';
			this.useVideo = true;
			this.useAudio = true;

			try {
				this.showLoading('Accessing Device Media');
				this.mediaStream = await this.getUserMediaStream();
			}
			catch (e) {
				console.log('error')
				console.log(e)
				return this.showError('Could not access media. Please ensure permission is granted.')
			}

			this.showContentContainer();
			this.contentContainer.innerHTML = `
			<div class="jina-media-container">
				<canvas id="jina-media-capture-canvas">
				</canvas>
				<div class="jina-input-controls">
					<div>
						<input type="file" name="video" accept="video/*" capture style="display: none;" id="jina-video-input-button">
						<img src="${_icons.camera}"/>
						<select class="jina-select jina-small" id="jina-video-select">
						</select>
					</div>
					<div>
						<img src="${_icons.mic}"/>
						<select class="jina-select jina-small" id="jina-audio-select">
						</select>
					</div>
				</div>
				<div class="jina-media-preview-container">
					<button class="jina-media-live-button" id="jina-media-live-button">
					Live Search
					</button>
					<video id="jina-capture-preview" width="100%" style="display: block;" autoplay muted playsinline></video>
					<button id="jina-media-screen-button" style="display:none;"></button>
				</div>
				<div class="jina-media-controls" id="jina-media-controls">
				<button class="jina-media-button" id="jina-take-photo-button"><img src="${_icons.camera}"></button>
				<button class="jina-media-button" id="jina-record-video-button"><img src="${_icons.video}"></button>
				</div>
			</div>
			`
			this.capturePreview = document.getElementById('jina-capture-preview');
			this.videoInputButton = document.getElementById('jina-video-input-button');
			this.audioSelect = document.getElementById('jina-audio-select');
			this.videoSelect = document.getElementById('jina-video-select');
			this.captureCanvas = document.getElementById('jina-media-capture-canvas');
			this.captureCanvas.width = 0;
			this.captureCanvas.height = 0;
			this.captureCanvas.style.display = 'none';

			this.audioSelect.onchange = () => this.updateStreamSource(this.showCaptureMedia);
			this.videoSelect.onchange = () => this.updateStreamSource(this.showCaptureMedia);

			this.capturePreview.srcObject = this.mediaStream;

			await this.getMediaDevices();

			if (this.audioSource) {
				this.audioSelect.selectedIndex = [...this.audioSelect.options].findIndex(option => option.value === this.audioSource);
			}
			if (this.videoSource) {
				this.videoSelect.selectedIndex = [...this.videoSelect.options].findIndex(option => option.value === this.videoSource);
			}

			this.videoInputButton.addEventListener('change', this.handleUpload);
			document.getElementById('jina-take-photo-button').onclick = this.capturePhoto;
			document.getElementById('jina-record-video-button').onclick = window.MediaRecorder ? this.startMediaRecord : () => this.videoInputButton.click();
			document.getElementById('jina-media-live-button').onclick = this.showLiveSearch;
			this.previousCapture = this.showCaptureMedia
		}

		this.showCaptureScreen = async () => {
			this.searchType = 'capture';
			this.useVideo = true;
			this.useAudio = false;

			try {
				this.showLoading('Accessing Screen Capture');
				this.mediaStream = await this.getScreenMediaStream();
			}
			catch (e) {
				console.log('error')
				console.log(e)
				return this.showError('Could not access screen capture. Please ensure permission is granted.')
			}

			this.showContentContainer();
			this.contentContainer.innerHTML = `
			<div class="jina-media-container">
				<canvas id="jina-media-capture-canvas">
				</canvas>
				<div class="jina-media-preview-container">
					<button class="jina-media-live-button" id="jina-media-live-button">
					Live Search
					</button>
					<video id="jina-capture-preview" width="100%" style="display: block;" autoplay muted playsinline></video>
					<button id="jina-media-screen-button" style="display:none;"></button>
				</div>
				<div class="jina-media-controls" id="jina-media-controls">
				<button class="jina-media-button" id="jina-take-photo-button"><img src="${_icons.camera}"></button>
				<button class="jina-media-button" id="jina-record-video-button"><img src="${_icons.video}"></button>
				</div>
			</div>
			`
			this.capturePreview = document.getElementById('jina-capture-preview');
			this.captureCanvas = document.getElementById('jina-media-capture-canvas');
			this.captureCanvas.width = 0;
			this.captureCanvas.height = 0;
			this.captureCanvas.style.display = 'none';

			this.capturePreview.srcObject = this.mediaStream;

			document.getElementById('jina-take-photo-button').onclick = this.capturePhoto;
			document.getElementById('jina-record-video-button').onclick = window.MediaRecorder ? this.startMediaRecord : () => this.videoInputButton.click();
			document.getElementById('jina-media-live-button').onclick = this.showLiveSearch;
			this.previousCapture = this.showCaptureScreen
		}

		this.showCaptureAudio = async () => {
			this.searchType = 'capture';
			this.useVideo = false;
			this.useAudio = true;

			try {
				this.showLoading('Accessing Audio');
				this.mediaStream = await this.getUserMediaStream();
			}
			catch (e) {
				console.log(e);
				return this.showError('Could not access audio. Please ensure permission is granted.')
			}

			this.showContentContainer();
			this.contentContainer.innerHTML = `
			<div class="jina-media-container">
				<div class="jina-input-controls">
					<div>
						<img src="${_icons.mic}"/>
						<select class="jina-select jina-small" id="jina-audio-select">
						</select>
					</div>
				</div>
				<div id="jina-media-controls">
				<button class="jina-media-button" id="jina-record-audio-button"><img src="${_icons.mic}"></button>
				</div>
			</div>
			`
			this.audioSelect = document.getElementById('jina-audio-select');
			this.audioSelect.onchange = () => this.updateStreamSource(this.showCaptureAudio);
			await this.getMediaDevices();

			if (this.audioSource) {
				this.audioSelect.selectedIndex = [...this.audioSelect.options].findIndex(option => option.value === this.audioSource);
			}

			document.getElementById('jina-record-audio-button').onclick = () => this.startMediaRecord();
			this.previousCapture = this.showCaptureAudio
		}

		this.showLiveSearch = async () => {

			this.showContentContainer();
			this.contentContainer.innerHTML = `
			<div class="jina-live-container">
				<canvas id="jina-media-capture-canvas">
				</canvas>
				<div class="jina-live-header">
					<div class="jina-live-header-item" style="text-align: left;">
						<button class="jina-live-button" id="jina-live-cancel-button">
							<img src="${_icons.close}">
						</button>
					</div>
					<div class="jina-live-header-item" style="margin-top: .5em">
						Live Search
					</div>
					<div class="jina-live-header-item" style="text-align: right;">
						<button class="jina-live-button" id="jina-live-toggle-button">
							<img src="${_icons.pause}">
						</button>
					</div>
				</div>
				<div class="jina-live-results-area" id="jina-live-results-area"></div>
				<video id="jina-capture-preview" class="jina-live-preview" autoplay muted width="33%"></video>
			</div>
			`
			let capturePreview = document.getElementById('jina-capture-preview');
			this.captureCanvas = document.getElementById('jina-media-capture-canvas');
			this.captureCanvas.width = 0;
			this.captureCanvas.height = 0;
			this.captureCanvas.style.display = 'none';

			document.getElementById('jina-live-cancel-button').onclick = this.showCaptureMedia;

			document.getElementById('jina-capture-preview').srcObject = this.mediaStream;
			this.searchType = 'live'

			this.startLiveSearch();
			document.getElementById('jina-live-toggle-button').onclick = this.toggleLiveSearch;
		}

		this.getUserMediaStream = () => {
			this.clearMedia();

			const constraints = {};
			if (this.useVideo)
				constraints.video = {
					deviceId: this.videoSource ? { exact: this.videoSource } : undefined,
					width: { ideal: this.settings.userMediaWidth },
					height: { ideal: this.settings.userMediaHeight },
					facingMode: "environment"
				}
			if (this.useAudio)
				constraints.audio = {
					deviceId: this.audioSource ? { exact: this.audioSource } : undefined
				}
			console.log('userMedia constraints: ', constraints)
			return navigator.mediaDevices.getUserMedia(constraints);
		}

		this.getScreenMediaStream = async () => {
			this.clearMedia();

			let audio = this.useAudio;
			if (navigator.mediaDevices.getDisplayMedia) {
				return navigator.mediaDevices.getDisplayMedia({ video: true, audio });
			} else if (navigator.getDisplayMedia) {
				return navigator.getDisplayMedia({ video: true, audio });
			} else {
				return await navigator.mediaDevices.getUserMedia({ video: { mediaSource: 'screen' }, audio });
			}
		}

		this.updateStreamSource = async (next) => {
			this.clearMedia();
			if (this.useAudio)
				this.audioSource = this.audioSelect.value;
			if (this.useVideo)
				this.videoSource = this.videoSelect.value;
			if (next == this.showCaptureMedia)
				return next();

			try {
				this.showLoading('Accessing Device Media');
				this.mediaStream = await this.getUserMediaStream();
			}
			catch (e) {
				console.log(e);
				return this.showError('Could not access media. Please ensure permission is granted.')
			}
			return next()
		}

		this.clearMedia = () => {
			if (this.liveInterval)
				clearInterval(this.liveInterval);

			if (this.mediaStream) {
				this.mediaStream.getTracks().forEach(track => {
					track.stop();
				});
			}
		}

		this.showReviewMedia = async () => {
			this.clearMedia();
			const { type, dataURI } = this.recordedMedia;
			console.log('recorded media:', this.recordedMedia);

			this.showContentContainer();
			this.contentContainer.innerHTML = `
			<div class="jina-media-container">
				<button class="jina-media-cancel-button" id="jina-media-cancel-button">
				<img src="${_icons.close}">
				</button>
				${type === 'video' ?
					`<video src="${dataURI}" width="100%" autoplay muted playsinline loop style="display: block;" id="jina-media-video"></video>` :
					type === 'audio' ?
						`<audio src="${dataURI}" controls autoplay loop style="margin-top: 5em; margin-bottom:5em; display:block"></audio>`
						:
						`<img src="${dataURI}" width="100%">`
				}
				<div class="jina-media-search-button-container">
				<button class="jina-media-search-button" id="jina-media-search-button">
				search <img src="${_icons.arrow_right}">
				</button
				</div>
			</div>
			`
			document.getElementById('jina-media-search-button').onclick = () => this.search([this.recordedMedia.dataURI]);
			document.getElementById('jina-media-cancel-button').onclick = this.previousCapture;
			return;
		}

		this.getMediaDevices = async () => {
			let deviceInfos = await navigator.mediaDevices.enumerateDevices();
			console.log('deviceInfos: ', deviceInfos)
			for (var i = 0; i !== deviceInfos.length; ++i) {
				let deviceInfo = deviceInfos[i];
				let option = document.createElement('option');
				option.value = deviceInfo.deviceId;
				if (deviceInfo.kind === 'audioinput') {
					option.text = deviceInfo.label || 'Microphone ' + (this.audioSelect.length + 1);
					if (this.useAudio)
						this.audioSelect.appendChild(option);
				} else if (deviceInfo.kind === 'videoinput') {
					option.text = deviceInfo.label || 'Camera ' + (this.videoSelect.length + 1);
					if (this.useVideo)
						this.videoSelect.appendChild(option);
				}
			}
		}

		this.capturePhoto = async () => {
			let width = this.capturePreview.videoWidth;
			let height = this.capturePreview.videoHeight;
			this.captureCanvas.width = width;
			this.captureCanvas.height = height;
			this.captureCanvas.style.display = 'block';
			let context = this.captureCanvas.getContext('2d');
			context.drawImage(document.getElementById('jina-capture-preview'), 0, 0, width, height);

			let data = this.captureCanvas.toDataURL('image/jpeg');
			this.captureCanvas.width = 0;
			this.captureCanvas.height = 0;
			this.captureCanvas.style.display = 'none';
			console.log('data:', data);
			this.recordedMedia = {
				src: data,
				dataURI: data,
				type: 'image',
			}
			if (this.searchType === 'live')
				this.search([data])
			else
				this.showReviewMedia()
		}

		this.startMediaRecord = async () => {
			this.recordedBlobs = [];
			try {
				this.mediaRecorder = new MediaRecorder(this.mediaStream);
			} catch (e) {
				console.error('Exception while creating MediaRecorder:', e);
				errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
				return;
			}
			//create button UI
			this.mediaRecorder.addEventListener('dataavailable', (event) => {
				if (event.data && event.data.size > 0) {
					this.recordedBlobs.push(event.data);
				}
			})
			this.mediaRecorder.addEventListener('stop', this.handleStopMediaRecording)
			this.mediaRecorder.start();
			// setTimeout(this.stopMediaRecord,1000);

			console.log('MediaRecorder started', this.mediaRecorder);
			document.getElementById('jina-media-controls').innerHTML = `
			<button class="jina-media-button" id="jina-stop-record-button"><img src="${_icons.stop}"></button>
			`;
			document.getElementById('jina-stop-record-button').onclick = this.stopMediaRecord;
			let liveButton = document.getElementById('jina-media-live-button');
			if (liveButton)
				liveButton.style.display = 'none';
		}

		this.startLiveSearch = async () => {
			this.capturePhoto()
			this.liveInterval = setInterval(() => this.capturePhoto(), 3000);
		}

		this.toggleLiveSearch = () => {
			if (this.liveInterval) {
				clearInterval(this.liveInterval)
				document.querySelector('#jina-live-toggle-button img').setAttribute('src', _icons.play);
				this.liveInterval = false;
			}
			else {
				document.querySelector('#jina-live-toggle-button img').setAttribute('src', _icons.pause);
				this.startLiveSearch();
			}
		}

		this.stopMediaRecord = () => {
			console.log('stopping media recording')
			this.mediaRecorder.stop();
		}

		this.handleStopMediaRecording = () => {
			console.log('handleStop')
			let data;
			if (this.useVideo)
				data = new Blob(this.recordedBlobs, { type: 'video/mp4' });
			else
				data = new Blob(this.recordedBlobs, { type: 'audio/wav' });
			let reader = new FileReader();
			reader.addEventListener("load", () => {
				const processed = reader.result;
				console.log('processed: ', processed);
				this.recordedMedia = {
					src: window.URL.createObjectURL(data),
					type: this.useVideo ? 'video' : 'audio',
					dataURI: processed,
				}
				this.showReviewMedia()
			}, false);
			reader.readAsDataURL(data);
		};

		this.showLoading = (message = "Searching") => {
			this.showContentContainer();
			this.contentContainer.innerHTML = `
			<div class="jina-sea">
				<p class="title">${message}</p>
				<span class="jina-wave"></span>
				<span class="jina-wave"></span>
				<span class="jina-wave"></span>
			</div>
		`
		}

		this.showError = (message = 'could not reach server') => {
			this.showContentContainer()
			this.contentContainer.innerHTML = `
			<div class="jina-dropdown-message jina-error unselectable">
    		<div class="jina-face jina-roll"><div class="eye"></div><div class="eye right"></div><div class="mouth sad"></div>
        	</div>
   			<div class="jina-shadow jina-move"></div>
				<h4 class="alert">Error!</h4>
				<p>${message}</p>
				<button id="jina-searchbar-error-ok">Ok</button>
			</div>
		`
			this.errorButton = document.getElementById('jina-searchbar-error-ok')
			this.errorButton.onclick = this.clearExpander;
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

			if (this.searchType === 'live') {
				document.getElementById('jina-live-results-area').innerHTML = `
				${toolbar || ''}
				<div class="jina-expander-results-area">
					${resultsHTML}
				</div>
				`;
			}
			else if (this.settings.resultsLocation === 'dropdown') {
				this.showContentContainer();
				this.contentContainer.innerHTML = `
				${toolbar || ''}
				<div class="jina-expander-results-area">
					${resultsHTML}
				</div>
				`;
			} else {
				this.resultsArea = document.getElementById(this.settings.resultsAreaId || 'jina-results-area')
				this.resultsArea.innerHTML = `
				${toolbar || ''}
				<div class="jina-expander-results-area">
					${resultsHTML}
				</div>
				`;
				this.clearExpander()
			}

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
			localStorage.setItem('jina-results-view', view);
			this.resultsView = view;
			this.showResults();
		}

		this.clearExpander = async () => {
			this.clearMedia();
			this.searchIcon.src = this.defaultSearchIcon;
			this.searchIcon.classList.remove('jina-border-right');
			this.searchInput.value = '';
			this.dragCounter = 0;
			this.searchInput.classList.remove('jina-highlighted');
			this.clearContentContainer();
			//TODO: settings > animation speed
			await waitFor(.2);
			this.contentContainer.innerHTML = this.defaultContent || '';
			this.highlighted = false;
		}

		this.init = () => {
			console.log(this.getAttribute('name') || 'JinaSearchComponent', 'settings:', this.settings);
			this.dragCounter = 0;

			['drag', 'dragenter', 'dragover', 'dragleave', 'dragexit', 'drop'].forEach(eventName => {
				document.addEventListener(eventName, this.preventDefaults);
			});
			['dragenter'].forEach(eventName => {
				document.addEventListener(eventName, this.handleDrag);
			});
			['drop', 'dragleave'].forEach(eventName => {
				document.addEventListener(eventName, this.handleDragLeave);
			});

			if (this.overlay) {
				this.overlay.addEventListener('click', this.clearExpander);
			}
			if (this.searchInput) {
				this.searchInput.addEventListener('drop', this.handleDrop);
				this.searchInput.addEventListener('keydown', this.listenForEnter);
			}
			if (this.contentContainer) {
				this.contentContainer.addEventListener('drop', this.handleDrop);
			}
			if (this.searchIcon)
				this.searchIcon.addEventListener('click', this.showInputOptions);

			this.resultsView = localStorage.getItem('jina-results-view') || 'list';

			if (this.settings.typewriterEffect) {
				const placeholders = JSON.parse(this.getAttribute('placeholders'));
				this.typeWriter(placeholders || defaultPlaceholders, 0, 0, this.settings.typewriterDelayCharacter, this.settings.typewriterDelayItem);
			}
		}

		this.settings = {};

		let options = Object.keys(defaultSettings);
		for (let i = 0; i < options.length; ++i) {
			const attr = options[i];
			this.settings[attr] = this.getAttribute(attr) || defaultSettings[attr];
		}

		this.defaultSearchIcon = _icons[this.settings.searchIcon] || this.settings.searchIcon;
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
	}
}

export default JinaBoxSearchComponent;