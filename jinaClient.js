const PROTO_PATH = __dirname + '/jina.proto';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

class JinaClient {
	constructor(url) {
		const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
		const jina_proto = grpc.loadPackageDefinition(packageDefinition).jina;
		this.client = new jina_proto.JinaRPC(url, grpc.credentials.createInsecure());
		console.log('gRPC Jina Client initialized for ',url);
	}
	search(queries, top_k = 10) {
		const docs = queries.map(q => {
			return { raw_bytes: Buffer.from(q) }
		});
		const query = {
			search: {
				top_k,
				docs
			}
		}

		const call = this.client.call();

		let result = new Promise((resolve, reject) => {
			let results = [];
			call.on('data', function (data) {
				data.search.docs[0].topk_results.map(doc => {
					results.push(Buffer.from(doc.match_doc.raw_bytes).toString())
				})
			});

			call.on('end', function () {
				return resolve(results);
			})

			call.on('error', function (error) {
				return reject(error)
			})
		})

		call.write(query);
		call.end();
		return result;
	}
}

module.exports = JinaClient;