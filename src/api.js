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
	search: async (queries, top_k) => {
		console.log('api: searching for ',queries);
		let res;
		try {
			res = await jina.post('search', { queries, top_k });
			return res.data
		}
		catch (error) {
			return { error }
		}
	}
}