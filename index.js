const AWS = require("aws-sdk")
const fs = require('fs');

const accessKeyId = ''
const secretAccessKey = ''
const region = ''
const endpoint = 'http://localhost:8000'

const config = {
	region,
	accessKeyId,
	secretAccessKey,
	endpoint
}

AWS.config.update(config)
const client = new AWS.DynamoDB.DocumentClient()

const startTime = Date.now()

args = process.argv.slice(2)
console.log(args[0])

const params = {
    TableName: args[0]
};

const fileDir = `./output/${params.TableName}`

if (!fs.existsSync(fileDir)){
    fs.mkdirSync(fileDir);
}

client.scan(params, onScan)

function onScan(err, data) {
    if (err) {
    	console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        data.Items.forEach(function(item) {
        	fs.writeFile(`${fileDir}/${item.id}.json`, JSON.stringify(item, null, 4), 'utf8', (error) => {
        		if (error) {
        			console.log(`write file failed at ${item.id}`)
        		}
        	});
        });

        if (typeof data.LastEvaluatedKey != "undefined") {
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            client.scan(params, onScan);
        } else {
            const endTime = Date.now()
            console.log(`total time used ${endTime - startTime}`)
        }
    }
}