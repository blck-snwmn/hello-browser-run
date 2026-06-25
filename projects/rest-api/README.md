# REST API

Minimal Cloudflare Browser Run REST API samples.

Set credentials:

```sh
export CLOUDFLARE_ACCOUNT_ID=your-account-id
export CLOUDFLARE_API_TOKEN=your-api-token
```

Run with HTML:

```sh
pnpm --dir ../.. run rest:html ss projects/rest-api/inputs/example.html projects/rest-api/outputs/html.png
pnpm --dir ../.. run rest:html md projects/rest-api/inputs/example.html projects/rest-api/outputs/html.md
pnpm --dir ../.. run rest:html pdf projects/rest-api/inputs/example.html projects/rest-api/outputs/html.pdf
```

Run with a URL:

```sh
pnpm --dir ../.. run rest:url ss https://example.com projects/rest-api/outputs/url.png
pnpm --dir ../.. run rest:url md https://example.com projects/rest-api/outputs/url.md
pnpm --dir ../.. run rest:url pdf https://example.com projects/rest-api/outputs/url.pdf
```
