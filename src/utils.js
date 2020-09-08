export function getDataUri(url) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.responseType = "arraybuffer";
		xhr.open("GET", `${url}`);

		xhr.onload = function () {
			var base64, binary, bytes, mediaType;

			bytes = new Uint8Array(xhr.response);
			//NOTE String.fromCharCode.apply(String, ...
			//may cause "Maximum call stack size exceeded"
			binary = [].map.call(bytes, function (byte) {
				return String.fromCharCode(byte);
			}).join('');
			mediaType = xhr.getResponseHeader('content-type');
			base64 = [
				'data:',
				mediaType ? mediaType + ';' : '',
				'base64,',
				btoa(binary)
			].join('');
			resolve(base64);
		};
		xhr.onerror = function (e) {
			console.log('xhr error:', e);
			reject(e);
		}
		xhr.send();
	})
}

export function waitFor(seconds) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), seconds * 1000)
	})
}

export function parseBool(x) {
	if (String(x).toLowerCase() === 'true')
		return true;
	return false;
}