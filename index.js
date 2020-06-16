function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.src);
}

function renderCode() {
	console.log('rendering...')
	const code = `
	<body>
${settings.showSearch ?
			`\n<jina-searchbar
	theme="${settings.theme}"${settings.resultsAreaId ? `\nresultsAreaId="${settings.resultsAreaId}"` : ''}${settings.typewriterEffect ? `\ntypewriterEffect` : ''}>
</jina-searchbar>\n`
			: ''}\
${settings.showFloater ?
			`\n<jina-floater
	theme="${settings.theme}"${settings.typewriterEffect ? `\ntypewriterEffect` : ''}>
	</jina-floater>\n`
			: ''}
<body>

	<script src="https://unpkg.com/jinabox"></script>
<script>
JinaBox.init('${settings.url}'${settings.timeout?`,{timeout:${settings.timeout}}`:''});
</script>
`
	document.getElementById('jinabox-code').innerText = code;
}

const initialEndpoint = localStorage.getItem('jina-endpoint') || '';
const initialTimeout = localStorage.getItem('jina-timeout') || '';

const settings = {
	url: initialEndpoint,
	timeout: initialTimeout,
	resultsAreaId: false,
	showSearch: true,
	showFloater: true,
	theme: 'persian'
};

renderCode();

const searchbarContainer = document.getElementById('searchbar-container');
const floaterContainer = document.getElementById('floater-container');
const resultsContainer = document.getElementById('results-container');

const inputEndpoint = document.getElementById('inputEndpoint');
inputEndpoint.setAttribute('value', initialEndpoint || '');
inputEndpoint.addEventListener('input', function (e) {
	const url = e.target.value;
	localStorage.setItem('jina-endpoint', url);
	window.JinaBox.updateSettings({ url });
	settings.url = url;
	renderCode();
});

const inputTimeout = document.getElementById('inputTimeout');
inputTimeout.setAttribute('value', initialTimeout || 5000);
inputTimeout.addEventListener('input', function (e) {
	const timeout = e.target.value;
	localStorage.setItem('jina-timeout', timeout);
	window.JinaBox.updateSettings({ timeout });
	settings.timeout = timeout;
	renderCode()
});

document.getElementById('showSearch').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.showSearch = checked;
	if (checked)
	searchbarContainer.innerHTML = `<jina-searchbar theme="${settings.theme}"/>`
	else
		searchbarContainer.innerHTML = ''
	renderCode()
});

document.getElementById('showFloater').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.showFloater = checked;
	if (checked)
		floaterContainer.innerHTML = `<jina-floater theme="${settings.theme}"></jina-floater>`
	else
		floaterContainer.innerHTML = ''
	renderCode()
});

const radios = document.querySelectorAll('.jina-theme-select');

for(let i=0; i<radios.length;++i){
	let radio = radios[i];
	radio.onclick = function(){
		settings.theme = radio.value;
		floaterContainer.innerHTML = `<jina-floater theme="${settings.theme}"></jina-floater>`
		searchbarContainer.innerHTML = `<jina-searchbar theme="${settings.theme}"/>`
		renderCode();
	}
}

JinaBox.init(initialEndpoint,{timeout:initialTimeout});