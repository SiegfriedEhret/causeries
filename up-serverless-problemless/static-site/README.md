# Deploy a static site

Create the `up.json` file:


```json
{
    "name": "devoxx-01",
    "profile": "devoxx",
    "type": "static",
    "regions": ["eu-central-1"]
}
```

And deploy with `up`.

You should see something like this:

```
build: 6 files, 6.9 MB (508ms)
deploy: staging (commit 0d02cc3) (4.767s)
stack: complete (17.062s)
endpoint: https://62td3k3ja5.execute-api.eu-central-1.amazonaws.com/staging/
```

Open the [endpoint url](https://62td3k3ja5.execute-api.eu-central-1.amazonaws.com/staging/) to see your site!
