# Deploy on a domain

You need a domain !

- `up domains ls` lists your domains (AWS Route 53).
- `up domains check` checks if a domain is available.
- `up domains buy` to purchase a domain!

Create the `up.json` file:

```json
{
  "name": "devoxx-02",
  "profile": "devoxx",
  "type": "static",
  "regions": ["eu-central-1"],
  "stages": {
    "production": {
      "domain": "devoxx-static.ehret.me"
    }
  }
}
```

And deploy with `up deploy production`.

You should see something like this:

```
build: 6 files, 6.9 MB (501ms)
deploy: production (commit 0d02cc3) (3.474s)
stack: complete (4m46.091s)
endpoint: https://9d1akm8c1d.execute-api.eu-central-1.amazonaws.com/production/
```

You can use the [endpoint url](https://9d1akm8c1d.execute-api.eu-central-1.amazonaws.com/production/) or the [domain you configured](https://devoxx-static.ehret.me/)!