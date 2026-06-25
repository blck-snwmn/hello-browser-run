# hello-browser-run

Cloudflare Browser Run samples.

This repo uses `pnpm` as the workspace/package manager so Worker projects can be added naturally later.

Requires Node.js 23.6 or newer for running TypeScript files directly.

## REST API samples

```sh
export CLOUDFLARE_ACCOUNT_ID=your-account-id
export CLOUDFLARE_API_TOKEN=your-api-token
pnpm run rest:html ss projects/rest-api/inputs/example.html projects/rest-api/outputs/html.png
pnpm run rest:html md projects/rest-api/inputs/example.html projects/rest-api/outputs/html.md
pnpm run rest:html pdf projects/rest-api/inputs/example.html projects/rest-api/outputs/html.pdf
pnpm run rest:url ss https://example.com projects/rest-api/outputs/url.png
pnpm run rest:url md https://example.com projects/rest-api/outputs/url.md
pnpm run rest:url pdf https://example.com projects/rest-api/outputs/url.pdf
```

Local input files can go in `projects/rest-api/inputs/`. Generated files can go in `projects/rest-api/outputs/`.
