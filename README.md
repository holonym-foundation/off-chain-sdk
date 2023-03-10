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
