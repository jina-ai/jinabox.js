const initialEndpoint = localStorage.getItem('jina-endpoint') || '';

const searchbarContainer = document.getElementById('searchbar-container');
const resultsContainer = document.getElementById('results-container');
const floaterContainer = document.getElementById('floater-container');

const defaultInitSettings = {
	timeout: 5000,
	top_k: 16
}

const settings = {
	url: initialEndpoint,
	timeout: defaultInitSettings.timeout,
	resultsAreaId: false,
	showSearch: true,
	showFloater: true,
	theme: 'default',
	placeholders:['type or drag anything to search', 'powered by Jina', 'unleash your curiosity and happy searching'],
	typewriterDelayCharacter: 50,
	typewriterDelayItem: 1000,
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
	placeholders:['type or drag anything to search', 'powered by Jina', 'unleash your curiosity and happy searching'],
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
placeholderInput.addEventListener('change',function(e){
	const text = e.target.value;
	addPlaceholder(text);
	placeholderInput.value = ''
});
placeholderDelayInput.addEventListener('change',function(e){
	const delay = e.target.value;
	settings.typewriterDelayItem = delay;
	document.getElementById('main-searchbar').setAttribute('typewriterDelayItem', delay);
	document.getElementById('main-floater').setAttribute('typewriterDelayItem', delay);
	renderCode();
})
placeholderKeystrokeDelayInput.addEventListener('change',function(e){
	const delay = e.target.value;
	settings.typewriterDelayCharacter = delay;
	document.getElementById('main-searchbar').setAttribute('typewriterDelayCharacter', delay);
	document.getElementById('main-floater').setAttribute('typewriterDelayCharacter', delay);
	renderCode();
})

function addPlaceholder(text){
	settings.placeholders.push(text);
	document.getElementById('main-searchbar').setAttribute('placeholders', JSON.stringify(settings.placeholders));
	document.getElementById('main-floater').setAttribute('placeholders', JSON.stringify(settings.placeholders));
	renderPlaceholders();
}
function removePlaceholder(e){
	const index = parseInt(e.target.getAttribute('index'))
	console.log('removing placeholder',index);
	settings.placeholders.splice(index,1);
	document.getElementById('main-searchbar').setAttribute('placeholders', JSON.stringify(settings.placeholders));
	document.getElementById('main-floater').setAttribute('placeholders', JSON.stringify(settings.placeholders));
	renderPlaceholders()
}

function renderPlaceholders(){
	let phtml = '';
	for(let i=0; i<settings.placeholders.length;++i){
		phtml+=`<li id="placeholder-${i}"><span class="placeholder-remove-icon" index="${i}" onclick="removePlaceholder(event)">❌</span>${settings.placeholders[i]}</li>`
	}
	placeholderList.innerHTML = phtml;
	renderCode();
}

function renderCode() {
	floaterContainer.innerHTML = floaterContainer.innerHTML;
	searchbarContainer.innerHTML = searchbarContainer.innerHTML;
	resultsContainer.innerHTML = resultsContainer.innerHTML;
	console.log('rendering...')
	const code = `
	<body>
${settings.showSearch ?
			`\n<jina-searchbar\
	${settings.theme != defaultComponentSettings.theme ? `\ntheme="${settings.theme}"` : ''}\
	${settings.resultsAreaId ? `\nresultsAreaId="${settings.resultsAreaId}"` : ''}\
	${settings.typewriterEffect ? `\ntypewriterEffect="true"` : ''}\
	${settings.typewriterDelayCharacter!=defaultComponentSettings.typewriterDelayCharacter ? `\ntypewriterDelayCharacter=${settings.typewriterDelayCharacter}` : ''}\
	${settings.typewriterDelayItem!=defaultComponentSettings.typewriterDelayItem ? `\ntypewriterDelayItem=${settings.typewriterDelayItem}` : ''}\
	${String(settings.placeholders)!=String(defaultComponentSettings.placeholders) ? `\nplaceholders='${JSON.stringify(settings.placeholders)}'` : ''}\
	${settings.resultsLocation=='external' ?'\nresultsLocation="external"':''}\>
</jina-searchbar>\n`
				: ''}\
${settings.resultsLocation=='external' ?'\n<jina-results></jina-results>':''}
${settings.showFloater ?
			`\n<jina-floater\
	${settings.theme != defaultComponentSettings.theme ? `\ntheme="${settings.theme}"` : ''}\
	${settings.typewriterEffect ? `\ntypewriterEffect="true"` : ''}\
	${settings.typewriterDelayCharacter!=defaultComponentSettings.typewriterDelayCharacter ? `\ntypewriterDelayCharacter=${settings.typewriterDelayCharacter}` : ''}\
	${settings.typewriterDelayItem!=defaultComponentSettings.typewriterDelayItem ? `\ntypewriterDelayItem=${settings.typewriterDelayItem}` : ''}\
	${String(settings.placeholders)!=String(defaultComponentSettings.placeholders) ? `\nplaceholders='${JSON.stringify(settings.placeholders)}'` : ''}>
	</jina-floater>\n`
        : ''}
<body>

	<script src="https://unpkg.com/jinabox"></script>
<script>
JinaBox.init('${settings.url}'${(settings.timeout || settings.top_k) ? `,{\
	${settings.timeout?`timeout:${settings.timeout},`:''}\
	${settings.top_k?`top_k:${settings.top_k}`:''}}` : ''});
</script>
`
    document.getElementById('jinabox-code').innerText = code;
}

renderCode();

const inputEndpoint = document.getElementById('inputEndpoint');
inputEndpoint.setAttribute('value', initialEndpoint || '');
inputEndpoint.addEventListener('input', function (e) {
    const url = e.target.value;
    localStorage.setItem('jina-endpoint', url);
    window.JinaBox.updateSettings({url});
    settings.url = url;
    renderCode();
});

const inputTimeout = document.getElementById('inputTimeout');
inputTimeout.setAttribute('value', defaultInitSettings.timeout);
inputTimeout.addEventListener('input', function (e) {
    const timeout = e.target.value;
    window.JinaBox.updateSettings({timeout});
    settings.timeout = timeout;
    renderCode()
});

const inputTopk = document.getElementById('inputTopk');
inputTopk.setAttribute('value', defaultInitSettings.top_k);
inputTopk.addEventListener('input', function (e) {
    const top_k = e.target.value;
    window.JinaBox.updateSettings({top_k});
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

const themes = document.querySelectorAll('.jina-theme-select');
for (let i = 0; i < themes.length; ++i) {
	let radio = themes[i];
	radio.onclick = function () {
		settings.theme = radio.value;
		document.getElementById('main-searchbar').setAttribute('theme', settings.theme);
		document.getElementById('main-floater').setAttribute('theme', settings.theme);
		renderCode();
	}
}

document.querySelector('#resultsDropdown').onclick = function(){
	settings.resultsLocation = 'dropdown';
	document.getElementById('main-searchbar').setAttribute('resultsLocation', 'dropdown');
	renderCode()
}

document.querySelector('#resultsComponent').onclick = function(){
	settings.resultsLocation = 'external';
	document.getElementById('main-searchbar').setAttribute('resultsLocation', 'external');
	renderCode()
}

document.getElementById('useTypewriter').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.typewriterEffect = checked;

	if(checked){
		document.getElementById('main-searchbar').setAttribute('typewriterEffect', checked);
		document.getElementById('main-floater').setAttribute('typewriterEffect', checked);
	}
	else{
		document.getElementById('main-searchbar').removeAttribute('typewriterEffect');
		document.getElementById('main-floater').removeAttribute('typewriterEffect');
	}
	renderCode();
});

JinaBox.init(settings.url, { timeout: settings.timeout });

function handleFileDrag(ev) {
	ev.dataTransfer.setData("text", ev.target.src);
	console.log('ev')
}
