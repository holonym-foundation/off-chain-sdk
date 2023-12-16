# @holonym-foundation/off-chain-sdk

An SDK for verifying off-chain proofs from Holonym users.

## Installation

```bash
npm i @holonym-foundation/off-chain-sdk
```

## Usage

See [Holonym's docs for off-chain proofs](https://docs.holonym.id/for-developers/off-chain-proofs) for more information on how to get proofs from users.

```typescript
import { verifyUniquenessProof } from "@holonym-foundation/off-chain-sdk";
import type { Proof } from "@holonym-foundation/off-chain-sdk";

async function verify(proof: Proof): Promise<boolean> {
  const result = await verifyUniquenessProof(proof);
  console.log(`User is unique: ${result}`);
  return result;
}
```

## WASM in browser

If you are using the SDK in the browser, your project will need to be able to handle WASM.

For React projects, we have found that the following craco/webpack configuration works well.

```javascript
// craco.config.js
const path = require("path");
const craco = require("@craco/craco");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const wasmExtensionRegExp = /\.wasm$/;
      webpackConfig.resolve.extensions.push(".wasm");
      webpackConfig.module.rules.forEach((rule) => {
        (rule.oneOf || []).forEach((oneOf) => {
          if (oneOf.loader && oneOf.loader.indexOf("file-loader") >= 0) {
            // make file-loader ignore WASM files
            oneOf.exclude.push(wasmExtensionRegExp);
          }
        });
      });
      // add a dedicated loader for WASM
      webpackConfig.module.rules.push({
        test: wasmExtensionRegExp,
        include: path.resolve(__dirname, "src"),
        use: [{ loader: require.resolve("wasm-loader"), options: {} }],
      });
      return webpackConfig;
    },
  },
};
```
