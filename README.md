## This is a tool that helps you migrate your data from Amazon DynamoDB to MongoDB

### There are totally 4 steps to achieve this:
1. Dump remote dynamoDB data to local machine.
2. Load the result from step 1 to local dynamoDB.
3. Export data to a json format from local dynamoDB.
4. Load the json files from step3 to mongoDB.

### Prerequisite

1. We need to run a local dynamoDB instance. [Here][1] is the reference to download aws dynamoDB local version. Also remember to configure your AWS CLI, which you can find the instruction [here][2]. Once the above steps is done, you can run your local dynamoDB with this command line. 

```
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

[1]: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
[2]: https://docs.aws.amazon.com/cli/latest/reference/configure/index.html

2. After setup local dynamoDB, we need to fill up our dynamoDB 
* accessKey 
* secretKey
* region


in `index.js` file and `dump.sh`

3. Fill up the tables' name you want to migrate in ```dump.sh``` tables field.

4. run ```npm install```

### Usage

Just run

```
sh dump.sh
```

Once the migration finished, you can check out the result at `output` folder.
