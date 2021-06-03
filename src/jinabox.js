import { Floater,FloaterChat, Results, SearchBar } from './index.js';
// import './index.css';

window.customElements.define('jina-floater', Floater);
window.customElements.define('jina-floater-chat', FloaterChat);
window.customElements.define('jina-searchbar', SearchBar);
window.customElements.define('jina-results', Results);

window.JinaSettings = {
	timeout: 5000,
	url: false,
	top_k: 16
}

window.JinaBox = {
	init: function (url, settings) {
		window.JinaSettings = {
			...window.JinaSettings,
			...settings,
			url
		}
		console.log('initialized with ', url);
	},
	search: async function (data) {
		return new Promise(function (resolve, reject) {
			const { url, timeout, top_k } = window.JinaSettings;
			if (!url) {
				return reject('Invalid URL');
			}
			var xhr = new XMLHttpRequest();
			xhr.open("POST", url);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onload = () => {
				try {
					const data = JSON.parse(xhr.responseText);
					resolve(data);
				}
				catch{
					reject(`request failed at ${url}`);
				}
			}
			xhr.onerror = function (e) {
				console.log('xhr error:', e);
				reject(`request failed at ${url}`);
			}
			xhr.timeout = timeout;
			xhr.ontimeout = () => reject('Search Timeout');
			xhr.send(JSON.stringify({ data,
				parameters: {top_k: parseInt(top_k)},
				mode: 'search' }));
		})
	},
	updateSettings: function (settings) {
		window.JinaSettings = {
			...window.JinaSettings,
			...settings
		}
	}
}
