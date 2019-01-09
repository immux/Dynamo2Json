## Dynamo2Json

This tool exports data from Amazon DynamoDB and save them as individual JSON files.

### How to use

#### 1. Launch a local DynamoDB instance

Download a local version of DynamoDB from AWS[1] and configure[2] it.

After installation, launch the DyanmoDB instance with:

```bash
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

[1]: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
[2]: https://docs.aws.amazon.com/cli/latest/reference/configure/index.html

#### 2. Initialize environment

You are expected to have Python (2 or 3) and Node.js and you are working on a Unix-like system.

Then, initialize the environment with:

```
./init.sh
```

#### 3. Fill in credentials

In both `scan.js` and `dump.sh`, fill in these three credentials of your target DynamoDB servers:

* accessKey 
* secretKey
* region

#### 4. Set target tables

In `dump.sh`, set the `tables` variable with the list of tables that you like to export.

#### 5. Export the data

You are advised to run this on a powerful machine (think 32GB memory and 8 cores) in the same availability zone as your target DynamoDB service.

```
./dump.sh
```

#### 6. Wait and profit

Depending on the size of data, machine performance, and networking, it may take a few minutes to multiple hours to export a table from DynamoDB.


#### License

MIT
