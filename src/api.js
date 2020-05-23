import axios from 'axios';
const endpoint = 'http://localhost:3130';

const jina = axios.create({
	baseURL: endpoint,
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

export default {
	search: async (data, top_k) => {
		console.log('api: searching for ',data);
		let res;
		try {
			res = await jina.post('search', { data, top_k });
			return res.data
		}
		catch (error) {
			return { error }
		}
	}
}