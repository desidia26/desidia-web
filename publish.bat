CALL aws s3 rm s3://iwritecodeformoney.com --recursive
ECHO FILES REMOVED FROM BUCKET
CALL aws s3 cp build s3://iwritecodeformoney.com --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --recursive
ECHO FILES UPLOADED