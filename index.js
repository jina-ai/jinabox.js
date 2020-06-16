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

	<script src="https://unpkg.com/jinabox.js"></script>
<script>
jb = window.JinaBox
jb.init({url:'${settings.url}',timeout:${settings.timeout});
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

this.renderCode();

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
		document.getElementById('searchbar-container').innerHTML = `<jina-searchbar placeholders='["custom placeholder 1","custom placeholder 2"]'/>`
	else
		document.getElementById('searchbar-container').innerHTML = ''
	renderCode()
});

document.getElementById('showFloater').addEventListener('change', function (e) {
	const checked = e.target.checked;
	settings.showFloater = checked;
	if (checked)
		document.getElementById('floater-container').innerHTML = '<jina-floater></jina-floater>'
	else
		document.getElementById('floater-container').innerHTML = ''
	renderCode()
});

JinaBox.init(initialEndpoint);