import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const accountId: string | undefined = process.env.CLOUDFLARE_ACCOUNT_ID;
const apiToken: string | undefined = process.env.CLOUDFLARE_API_TOKEN;
const mode: string | undefined = process.argv.find((value, index) => index === 2 && value !== "--");
const htmlPath: string | undefined = process.argv.find(
  (value, index) => index === 3 && value !== "--",
);
const outputPath: string | undefined = process.argv.find(
  (value, index) => index === 4 && value !== "--",
);

if (!mode) {
  throw new Error("mode is required: ss, md, or pdf");
}

if (!["ss", "md", "pdf"].includes(mode)) {
  throw new Error("mode must be one of: ss, md, pdf");
}

if (!htmlPath) {
  throw new Error("HTML file path is required");
}

if (!outputPath) {
  throw new Error("output path is required");
}

if (!accountId) {
  throw new Error("CLOUDFLARE_ACCOUNT_ID is required");
}

if (!apiToken) {
  throw new Error("CLOUDFLARE_API_TOKEN is required");
}

const html: string = await readFile(htmlPath, "utf8");
const action = mode === "ss" ? "screenshot" : mode === "md" ? "markdown" : "pdf";

const response: Response = await fetch(
  `https://api.cloudflare.com/client/v4/accounts/${accountId}/browser-rendering/${action}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      html,
    }),
  },
);

if (!response.ok) {
  throw new Error(`${response.status} ${response.statusText}: ${await response.text()}`);
}

await mkdir(dirname(outputPath), { recursive: true });

if (mode === "md") {
  const json = (await response.json()) as { result: string };
  await writeFile(outputPath, json.result);
} else {
  await writeFile(outputPath, Buffer.from(await response.arrayBuffer()));
}

console.log(`wrote ${outputPath}`);
