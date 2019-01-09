tables=(
    # example
    user
    transaction
)

accessKey=""
secretKey=""
region=""


echo "start dumping tables from remote database to local..."

for table in ${tables[@]}
do
    echo "dumping table ${table}"
    python3 dynamodump/dynamodump.py -m backup -r ${region} --srcTable ${table} --accessKey ${accessKey} --secretKey ${secretKey}
done

echo "start dumping tables to local database..."

for table in ${tables[@]}
do
    echo "dumping table ${table}"
    python dynamodump/dynamodump.py -m restore -r local --srcTable ${table} --writeCapacity 400 --host localhost --port 8000
done

echo "start exporting tables from local database..."

rm -f output
mkdir output

for table in ${tables[@]}
do
    echo "migrating ${table}"
    node scan.js ${table}
done

