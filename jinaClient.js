/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var PROTO_PATH = __dirname + '/jina.proto';

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
	PROTO_PATH,
	{
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true
	});
var jina_proto = grpc.loadPackageDefinition(packageDefinition).jina;

function main() {
	var client = new jina_proto.JinaRPC('localhost:64124', grpc.credentials.createInsecure());
	var call = client.call();
	call.on('data', function (data) {
		console.log('requestId: ',data.request_id);
		let results = [];
		data.search.docs[0].topk_results.map(doc=>{
			results.push(Buffer.from(doc.match_doc.raw_bytes).toString())
		})
		console.log('search results: ',results);
	});

	call.on('end', () => console.log('response end'));

	const text = 'hello, bro'
	const bytes = Buffer.from(text)

	console.log('searching: ',text);
	console.log('topk: ',10);

	const doc = {
		raw_bytes: bytes,
	}

	const data = {
		body:'search',
		search:{
			top_k: 10,
			docs:[doc]
		}
	}

	call.write(data);
	call.end()
	console.log('search request sent')
}

main();
