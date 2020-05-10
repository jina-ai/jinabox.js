const PROTO_PATH = __dirname + '/jina.proto';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
const jina_proto = grpc.loadPackageDefinition(packageDefinition).jina;

function main() {
  var client = new jina_proto.JinaRPC('localhost:50047', grpc.credentials.createInsecure());
  var call = client.call();
  call.on('data', function (data) {
    console.log('requestId: ', data.request_id);
    let results = [];
    data.search.docs[0].topk_results.map(doc => {
      results.push(Buffer.from(doc.match_doc.raw_bytes).toString())
    })
    console.log('search results: ', results);
  });

  call.on('end', () => console.log('response end'));

  const text = 'hello'
  const bytes = Buffer.from(text)


  console.log('searching', text);
  console.log('topk: ', 10);

  const doc = {
    raw_bytes: bytes,
  }

  const data = {
    search: {
      top_k: 10,
      docs: [doc]
    }
  }

  console.log('query: ', JSON.stringify(data));
  call.write(data);
  call.end()
  console.log('search request sent')
}

main();