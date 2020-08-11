const searchbarContainer = document.getElementById('searchbar-container');
const resultsContainer = document.getElementById('results-container');
const floaterContainer = document.getElementById('floater-container');

const defaultInitSettings = {
	timeout: 25000,
	top_k: 16,
	endpointType: 'https://demo.jina.ai/api/search'
}

const settings = {
	endpointType: localStorage.getItem('jina-endpoint-type') || defaultInitSettings.endpointType,
	url: localStorage.getItem('jina-endpoint') || '',
	timeout: localStorage.getItem('jina-timeout') || defaultInitSettings.timeout,
	top_k: localStorage.getItem('jina-top_k') || defaultInitSettings.top_k,
	resultsAreaId: false,
	showSearch: true,
	showFloater: true,
	showSearchbarDropzone: true,
	showFloaterDropzone: true,
	theme: 'default',
	placeholders: ['type or drag anything to search', 'powered by Jina', 'unleash your curiosity and happy searching'],
	typewriterDelayCharacter: 50,
	typewriterDelayItem: 1000,
	floaterStyle: 'standard',
	acceptVideo: true,
	acceptAudio: true,
	acceptText: true,
	acceptImage: true,
};

const defaultComponentSettings = {
	resultsLocation: 'dropdown',
	typewriterEffect: false,
	typewriterDelayCharacter: 50,
	typewriterDelayItem: 1000,
	theme: 'default',
	searchIcon: 'color',
	floaterIcon: 'color',
	globalDrag: true,
	placeholders: ['type or drag anything to search', 'powered by Jina', 'unleash your curiosity and happy searching'],
}

const searchbarSettings = {}

const floaterSettings = {}

const placeholderList = document.getElementById('typewriterPlaceholders');
const placeholderInput = document.getElementById('placeholderInput');
const placeholderDelayInput = document.getElementById('placeholderDelayInput');
const placeholderKeystrokeDelayInput = document.getElementById('placeholderKeystrokeDelayInput');

renderPlaceholders();
placeholderDelayInput.value = settings.typewriterDelayItem;
placeholderKeystrokeDelayInput.value = settings.typewriterDelayCharacter;
placeholderInput.addEventListener('change', function (e) {
	const text = e.target.value;
	addPlaceholder(text);
	placeholderInput.value = ''
});
placeholderDelayInput.addEventListener('change', function (e) {
	const delay = e.target.value;
	settings.typewriterDelayItem = delay;
	renderCode();
})
placeholderKeystrokeDelayInput.addEventListener('change', function (e) {
	const delay = e.target.value;
	settings.typewriterDelayCharacter = delay;
	renderCode();
})

function addPlaceholder(text) {
	settings.placeholders.push(text);
	renderPlaceholders();
}
function removePlaceholder(e) {
	const index = parseInt(e.target.getAttribute('index'))
	console.log('removing placeholder', index);
	settings.placeholders.splice(index, 1);
	renderPlaceholders()
}

function renderPlaceholders() {
	let phtml = '';
	for (let i = 0; i < settings.placeholders.length; ++i) {
		phtml += `<li id="placeholder-${i}"><span class="placeholder-remove-icon" index="${i}" onclick="removePlaceholder(event)">❌</span>${settings.placeholders[i]}</li>`
	}
	placeholderList.innerHTML = phtml;
	renderCode();
}

function renderCode() {
	let searchbarCode = `
	${settings.showSearch ?
			`\n<jina-searchbar\
	${settings.theme != defaultComponentSettings.theme ? `\ntheme="${settings.theme}"` : ''}\
	${settings.resultsAreaId ? `\nresultsAreaId="${settings.resultsAreaId}"` : ''}\
	${settings.typewriterEffect ? `\ntypewriterEffect="true"` : ''}\
	${settings.typewriterDelayCharacter != defaultComponentSettings.typewriterDelayCharacter ? `\ntypewriterDelayCharacter=${settings.typewriterDelayCharacter}` : ''}\
	${settings.typewriterDelayItem != defaultComponentSettings.typewriterDelayItem ? `\ntypewriterDelayItem=${settings.typewriterDelayItem}` : ''}\
	${String(settings.placeholders) != String(defaultComponentSettings.placeholders) ? `\nplaceholders='${JSON.stringify(settings.placeholders)}'` : ''}\
	${settings.resultsLocation == 'external' ? '\nresultsLocation="external"' : ''}\
	${settings.acceptAudio ? '' : '\nacceptAudio="false"'}\
	${settings.acceptVideo ? '' : '\nacceptVideo="false"'}\
	${settings.acceptImage ? '' : '\nacceptImage="false"'}\
	${settings.acceptText ? '' : '\nacceptText="false"'}\
	${settings.showSearchbarDropzone ? '' : '\nshowDropzone="false"'}>
	</jina-searchbar>`: ''}\
	`;

	let floaterCode = `
	${settings.showFloater ?
			`\n${settings.floaterStyle === 'standard' ? '<jina-floater' : '<jina-floater-chat'}\
	${settings.theme != defaultComponentSettings.theme ? `\ntheme="${settings.theme}"` : ''}\
	${settings.typewriterEffect ? `\ntypewriterEffect="true"` : ''}\
	${settings.typewriterDelayCharacter != defaultComponentSettings.typewriterDelayCharacter ? `\ntypewriterDelayCharacter=${settings.typewriterDelayCharacter}` : ''}\
	${settings.typewriterDelayItem != defaultComponentSettings.typewriterDelayItem ? `\ntypewriterDelayItem=${settings.typewriterDelayItem}` : ''}\
	${String(settings.placeholders) != String(defaultComponentSettings.placeholders) ? `\nplaceholders='${JSON.stringify(settings.placeholders)}'` : ''}\
	${settings.acceptAudio ? '' : '\nacceptAudio="false"'}\
	${settings.acceptVideo ? '' : '\nacceptVideo="false"'}\
	${settings.acceptImage ? '' : '\nacceptImage="false"'}\
	${settings.acceptText ? '' : '\nacceptText="false"'}\
	${settings.showFloaterDropzone ? '' : '\nshowDropzone="false"'}>
	${settings.floaterStyle === 'standard' ? '</jina-floater>' : '</jina-floater-chat>'}` : ''}
	`;

	let resultsCode = `
	${settings.resultsLocation == 'external' ? '<jina-results></jina-results>' : ''}\
	`

	floaterContainer.innerHTML = floaterCode;
	searchbarContainer.innerHTML = searchbarCode;
	resultsContainer.innerHTML = resultsCode;

	const code = `
	<body>\
		${searchbarCode}\
		${resultsCode}\
		${floaterCode}
	<body>

	<script src="https://unpkg.com/jinabox"></script>
<script>
JinaBox.init('${settings.url}'${(settings.timeout || settings.top_k) ? `,{\
	${settings.timeout ? `timeout:${settings.timeout},` : ''}\
	${settings.top_k ? `top_k:${settings.top_k}` : ''}}` : ''});
</script>
`;

	document.getElementById('jinabox-code').innerText = code;
}

const endpointSelection = document.getElementById('endpointSelection');
const inputEndpoint = document.getElementById('inputEndpoint');

endpointSelection.addEventListener('change', function (e) {
	let url = e.target.value;
	localStorage.setItem('jina-endpoint-type', url);
	if (url === 'custom') {
		url = inputEndpoint.value;
		inputEndpoint.style.display = 'block';
		window.JinaBox.updateSettings({ url });
		settings.url = url;
		renderCode();
	}
	else {
		document.getElementById('acceptAudio').checked = false;
		document.getElementById('acceptVideo').checked = false;
		settings.acceptAudio = false;
		settings.acceptVideo = false;
		inputEndpoint.style.display = 'none';
		window.JinaBox.updateSettings({ url });
		settings.url = url;
		renderCode();
	}
})

inputEndpoint.setAttribute('value', settings.url || '');
inputEndpoint.addEventListener('input', function (e) {
	const url = e.target.value;
	localStorage.setItem('jina-endpoint', url);
	window.JinaBox.updateSettings({ url });
	settings.url = url;
	renderCode();
});

if (settings.endpointType === 'custom') {
	endpointSelection.value = settings.endpointType;
	inputEndpoint.style.display = 'block';
}
else {
	document.getElementById('acceptAudio').checked = false;
	document.getElementById('acceptVideo').checked = false;
	settings.acceptAudio = false;
	settings.acceptVideo = false;
	settings.url = settings.endpointType;
}

const inputTimeout = document.getElementById('inputTimeout');
inputTimeout.setAttribute('value', settings.timeout);
inputTimeout.addEventListener('input', function (e) {
	const timeout = e.target.value;
	window.JinaBox.updateSettings({ timeout });
	localStorage.setItem('jina-timeout', timeout);
	settings.timeout = timeout;
	renderCode()
});

const inputTopk = document.getElementById('inputTopk');
inputTopk.setAttribute('value', settings.top_k);
inputTopk.addEventListener('input', function (e) {
	const top_k = e.target.value;
	window.JinaBox.updateSettings({ top_k });
	localStorage.setItem('jina-top_k', top_k);
	settings.top_k = top_k;
	renderCode()
});

document.getElementById('showSearch').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.showSearch = checked;
	if (checked)
		searchbarContainer.style.visibility = '';
	else
		searchbarContainer.style.visibility = 'hidden';
	renderCode()
});

document.getElementById('showFloater').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.showFloater = checked;
	if (checked) {
		floaterContainer.style.visibility = '';
		floaterContainer.style.opacity = 1;
	}
	else {
		floaterContainer.style.opacity = 0;
		floaterContainer.style.visibility = 'hidden';
	}
	renderCode()
});

document.getElementById('showSearchbarDropzone').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.showSearchbarDropzone = checked;
	renderCode()
});

document.getElementById('showFloaterDropzone').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.showFloaterDropzone = checked;
	renderCode()
});

document.getElementById('acceptVideo').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.acceptVideo = checked;
	renderCode()
});

document.getElementById('acceptAudio').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.acceptAudio = checked;
	renderCode()
});

document.getElementById('acceptText').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.acceptText = checked;
	renderCode()
});

document.getElementById('acceptImage').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.acceptImage = checked;
	renderCode()
});


const themes = document.querySelectorAll('.jina-theme-select');
for (let i = 0; i < themes.length; ++i) {
	let radio = themes[i];
	radio.onclick = function () {
		settings.theme = radio.value;
		renderCode();
	}
}

document.querySelector('#floaterStandard').onclick = function () {
	settings.floaterStyle = 'standard';
	renderCode()
}

document.querySelector('#floaterChatBot').onclick = function () {
	settings.floaterStyle = 'chatBot';
	renderCode()
}

document.querySelector('#resultsDropdown').onclick = function () {
	settings.resultsLocation = 'dropdown';
	renderCode()
}

document.querySelector('#resultsComponent').onclick = function () {
	settings.resultsLocation = 'external';
	renderCode()
}

document.getElementById('useTypewriter').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.typewriterEffect = checked;
	renderCode();
});

function handleFileDrag(ev) {
	ev.dataTransfer.setData("text", ev.target.src);
	console.log('ev')
}

renderCode();

console.log('initializing');
JinaBox.init(settings.url, { timeout: settings.timeout, top_k: settings.top_k })