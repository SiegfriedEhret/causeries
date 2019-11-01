# Deploy an API

:warning: the DB is probably down because it was for demo purposes. Use your own!

Create a `up.json` file:

```json
{
  "name": "devoxx-03",
  "profile": "devoxx",
  "regions": ["eu-central-1"],
  "environment": {
    "MONGO_USERNAME": "siegfried"
  },
  "lambda": {
    "vpc": {
      "subnets": [
        "subnet-5d32f020",
        "subnet-0a44cc61",
        "subnet-67bc0d2a"
      ],
      "security_groups": [
        "sg-a2cd9fc8"
      ]
    }
  },
  "stages": {
    "production": {
      "domain": "devoxx-api.ehret.me"
    }
  }
}
```

Add an encrypted variable with `up env add MONGO_PASSWORD=********`

And deploy with `up deploy production`.

You should see something like this:

```
build: 8 files, 7.6 MB (719ms)
deploy: production (commit 0d02cc3) (10.528s)
stack: complete (3m45.058s)
endpoint: https://a71s8v398l.execute-api.eu-central-1.amazonaws.com/production/
```

You can use the [endpoint url](https://a71s8v398l.execute-api.eu-central-1.amazonaws.com/production/) or the [domain you configured](https://devoxx-api.ehret.me/)!

Use [http](https://httpie.org/) ! The ¥ symbol is just to change from the usual $ :wink:.

```
¥ http POST http https://devoxx-api.ehret.me title="Hello Devoxx!"

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 2
Content-Type: application/json; charset=utf-8
Date: Fri, 01 Nov 2019 22:46:47 GMT
Etag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"
Vary: Accept-Encoding
Via: 1.1 25d46f0dbca17b9a78cca036e17d8ad3.cloudfront.net (CloudFront)
X-Amz-Cf-Id: -tZrGzzpm7wUfkrQJVSrfqy2Lzwn6i1v0KOKmzWf-N-bPTEwU_u2Zg==
X-Amz-Cf-Pop: ZRH50-C1
X-Amzn-Trace-Id: Root=1-5dbcb5d5-f6ddd2a973a8e597349185a3;Sampled=0
X-Cache: Miss from cloudfront
X-Powered-By: Express
x-amz-apigw-id: CgFZWGRRFiAFRwg=
x-amzn-Remapped-Content-Length: 2
x-amzn-Remapped-Date: Fri, 01 Nov 2019 22:46:47 GMT
x-amzn-RequestId: d93cd243-a010-44d6-9be4-955d929e5e79

[]
```

And then:

```
¥ http https://devoxx-api.ehret.me

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 59
Content-Type: application/json; charset=utf-8
Date: Fri, 01 Nov 2019 22:47:08 GMT
Etag: W/"3b-5qS1MLV0nqKfFRLTHliDYGjo3NI"
Vary: Accept-Encoding
Via: 1.1 8455bcb2c0203b0c4ee93b610d75e69b.cloudfront.net (CloudFront)
X-Amz-Cf-Id: iVs7ZOvZ-qTX2O6Azj3FiNdeDiXBRENkopfrBQnWkeFCbhr9gXksOA==
X-Amz-Cf-Pop: ZRH50-C1
X-Amzn-Trace-Id: Root=1-5dbcb5ec-4870ba9af641443238507f50;Sampled=0
X-Cache: Miss from cloudfront
X-Powered-By: Express
x-amz-apigw-id: CgFdCE49liAFp-A=
x-amzn-Remapped-Content-Length: 59
x-amzn-Remapped-Date: Fri, 01 Nov 2019 22:47:08 GMT
x-amzn-RequestId: 1dfb3ccf-61de-4fe8-98a4-79f93a38846f

[
    {
        "_id": "5dbcb5eae1dfb8000e0d1062",
        "title": "hello devoxx"
    }
]
```